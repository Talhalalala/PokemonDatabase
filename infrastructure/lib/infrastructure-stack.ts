import { Duration, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecs_patterns from "aws-cdk-lib/aws-ecs-patterns";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as rds from "aws-cdk-lib/aws-rds";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";

interface Props extends StackProps {
  hostedZoneId: string;
  zoneName: string;
  forestSecretCompleteArn: string;
  username: string;
}


export class InfrastructureStack extends Stack {
  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
    const vpc = new ec2.Vpc(this, "vpc", { maxAzs: 2 });

    const cluster = new ecs.Cluster(this, "pokemon-trainer", {
      vpc: vpc,
    });

    const hostedZone = route53.HostedZone.fromHostedZoneAttributes(this, props.zoneName, { hostedZoneId: props.hostedZoneId, zoneName: props.zoneName })

    const apiDomain = `api.${props.username}.${props.zoneName}`;
    const forestDomain = `api.forest.${props.username}.${props.zoneName}`;
    const appDomain = `app.${props.username}.${props.zoneName}`;

    const apiCertificate = new acm.DnsValidatedCertificate(this, 'api-certificate', {
      domainName: apiDomain,
      subjectAlternativeNames: [`www.${apiDomain}`],
      hostedZone: hostedZone,
      region: props?.env?.region,
    });
    const forestCertificate = new acm.DnsValidatedCertificate(this, 'api-forest-certificate', {
      domainName: forestDomain,
      subjectAlternativeNames: [`www.${forestDomain}`],
      hostedZone: hostedZone,
      region: props?.env?.region,
    });
    const appCertificate = new acm.DnsValidatedCertificate(this, 'app-certificate', {
      domainName: appDomain,
      subjectAlternativeNames: [`www.${appDomain}`],
      hostedZone: hostedZone,
      region: props?.env?.region,
    });


    const secret = new secretsmanager.Secret(this, `database-credentials-secret`, {
      secretName: `${props.username}-database-credentials`,
      generateSecretString: {
        secretStringTemplate: JSON.stringify({
          username: "contic",
          database: "contic",
          port: 5432,
        }),
        excludePunctuation: true,
        includeSpace: false,
        generateStringKey: "password",
      },
    });

    const forestSecrets = secretsmanager.Secret.fromSecretAttributes(
      this,
      "forest-admin-secrets",
      {
        secretCompleteArn: props.forestSecretCompleteArn,
      }
    );

    const dbInstance = new rds.DatabaseInstance(this, "db-instance", {
      vpc,
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_14_1,
      }),
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.BURSTABLE3,
        ec2.InstanceSize.MICRO
      ),
      credentials: rds.Credentials.fromSecret(secret),
      multiAz: false,
      allocatedStorage: 100,
      maxAllocatedStorage: 105,
      allowMajorVersionUpgrade: false,
      autoMinorVersionUpgrade: true,
      backupRetention: Duration.days(0),
      deleteAutomatedBackups: true,
      removalPolicy: RemovalPolicy.DESTROY,
      deletionProtection: false,
      databaseName: "contic",
    });

    const apiService = new ecs_patterns.ApplicationLoadBalancedFargateService(
      this,
      "api-production",
      {
        cluster,
        certificate: apiCertificate,
        domainName: apiDomain,
        domainZone: hostedZone,
        taskImageOptions: {
          image: ecs.ContainerImage.fromAsset("../api"),
          environment: {
            DATABASE_URL: `postgresql://${secret
              .secretValueFromJson("username")
              .toString()}:${secret
              .secretValueFromJson("password")
              .toString()}@${dbInstance.dbInstanceEndpointAddress}:${
              dbInstance.dbInstanceEndpointPort
            }/contic`,
          },
        },
        publicLoadBalancer: true,
        redirectHTTP: true,
      }
    );

    const forestService =
      new ecs_patterns.ApplicationLoadBalancedFargateService(
        this,
        "forest-production",
        {
          cluster,
          certificate: forestCertificate,
          domainName: forestDomain,
          domainZone: hostedZone,
          taskImageOptions: {
            image: ecs.ContainerImage.fromAsset("../admin"),
            environment: {
              DATABASE_URL: `postgresql://${secret
                .secretValueFromJson("username")
                .toString()}:${secret
                .secretValueFromJson("password")
                .toString()}@${dbInstance.dbInstanceEndpointAddress}:${
                dbInstance.dbInstanceEndpointPort
              }/contic`,
              FOREST_AUTH_SECRET: forestSecrets.secretValueFromJson("FOREST_AUTH_SECRET").toString(),
              FOREST_ENV_SECRET: forestSecrets.secretValueFromJson("FOREST_ENV_SECRET").toString(),
              APPLICATION_URL: `https://${forestDomain}`,
              APPLICATION_PORT: "80",
            },
          },
          publicLoadBalancer: true,
          redirectHTTP: true,
        }
      );

    dbInstance.connections.allowDefaultPortFrom(apiService.service);
    dbInstance.connections.allowDefaultPortFrom(forestService.service);

    const appService = new ecs_patterns.ApplicationLoadBalancedFargateService(
      this,
      "next-production",
      {
        cluster,
        certificate: appCertificate,
        domainName: appDomain,
        domainZone: hostedZone,
        taskImageOptions: {
          image: ecs.ContainerImage.fromAsset("../app"),
          environment: {
            NEXT_PUBLIC_API: `https://${apiDomain}/graphql`,
          },
        },
        publicLoadBalancer: true,
        redirectHTTP: true,
      }
    );
  }
}