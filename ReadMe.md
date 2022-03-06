<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ConticTech/PokemonTrainer">
    <img src="public/pokemon-logo.png" alt="Logo" width="200" height="200">
  </a>

<h3 align="center">Contic - Pokemon Training</h3>

  <p align="center">
    Contic training guidelines for new starters
    <br />
    <a href="https://github.com/ConticTech/PokemonTrainer"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ConticTech/PokemonTrainer">View Demo</a>
    ·
    <a href="https://github.com/ConticTech/PokemonTrainer/issues">Report Bug</a>
    ·
    <a href="https://github.com/ConticTech/PokemonTrainer/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This repo is a template for a Pokemon Showcase application and admin managament console. The objective of this repo is to train new Contic starters to build high quality applications very quickly and to be able to maintain them with a wider team. You will do this by following the instructions below to create:

<ol>
<li>Web Application to view, search and find pokemon</li>
<li>Admin console for an inhouse operations to manage the database eassily</li>
<li>Api using GraphQL to tie the above items together</li>
</ol>

<p align="right">(<a href="#top">back to top</a>)</p>

### Necessary Technologies

**Frontend**

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [React-Query](https://react-query.tanstack.com/)

**Backend**

- [Express](https://expressjs.com/)
- [Prisma](https://prisma.io)
- [GraphQL](https://graphql.org/)
- [Apollo Server](https://github.com/apollographql/apollo-server)

**Admin**

- [Forest Admin](https://www.forestadmin.com/)
- [Sequelize](https://sequelize.org/)

**DevTools**

- [Docker](https://www.docker.com/)
- [Typescript](https://nextjs.org/)
- [Yarn](https://yarnpkg.com/)
- [Storybook](https://storybook.js.org/)
- [Hygen](https://www.hygen.io/)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [Graphql Code Generator](https://www.graphql-code-generator.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Tutorial

### Project Setup

<details>
<summary>Setup a Basic API</summary>

```
mkdir api
cd api
npm init -y
npx prisma init
```

Copy in the package.json:

```
{
  "name": "api",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "prestart": "prisma migrate deploy",
    "start": "node ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/node": "^17.0.18",
    "prisma": "^3.9.2",
    "ts-node": "^10.5.0",
    "typescript": "^4.5.5"
  },
  "dependencies": {
    "@prisma/client": "^3.9.2",
    "class-validator": "^0.13.2",
    "express": "^4.17.3",
    "graphql": "^16.3.0",
    "reflect-metadata": "^0.1.13",
    "type-graphql": "^1.1.1"
  }
}

```

tsconfig.json:

```
{
    "compilerOptions": {
      "sourceMap": true,
      "outDir": "dist",
      "strict": true,
      "lib": ["esnext"],
      "esModuleInterop": true
    }
  }
```

index.ts:

```
import express from 'express';

const app = express()
const port = process.env.PORT ?? 80;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

Dockerfile:

```
FROM node:14 AS builder

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
COPY yarn.lock ./
COPY prisma ./prisma/

# Install app dependencies
RUN yarn

COPY . .

RUN npm run build

FROM node:14

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/dist ./dist

ENV PORT=80
CMD [ "npm", "run", "start" ]
```

docker-compose.yml:

```
version: "3.1"

services:
  db:
    image: postgres
    environment:
      POSTGRES_PASSWORD: password
      POSTGRES_USER: contic
      POSTGRES_DB: contic
    ports:
      - "5432:5432"
```

.gitignore:

```
node_modules
.env
dist
```

.dockerignore:

```
node_modules
npm-debug.log
```

Edit the `.env` file:

```
DATABASE_URL="postgresql://contic:password@localhost:5432/contic"
```

Change the prisma file to create a basic migration in `schema.prisma`:

```
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
```

Start the database:

```
docker-compose up
```

Create a new migration:

```
npx prisma migrate dev --name init
```

</details>
<details>
<summary>Setup Next.js</summary>

Run the Next.js setup script and call your application `app`

```
npx create-next-app@latest --ts
```

Create a `Dockerfile` to deploy your code in `app/Dockerfile`:

```
# Install dependencies only when needed
FROM node:lts-alpine AS deps

WORKDIR /opt/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
# This is where because may be the case that you would try
# to build the app based on some `X_TAG` in my case (Git commit hash)
# but the code hasn't changed.
FROM node:lts-alpine AS builder

ENV NODE_ENV=production
WORKDIR /opt/app
COPY . .
COPY --from=deps /opt/app/node_modules ./node_modules
RUN yarn build

# Production image, copy all the files and run next
FROM node:lts-alpine AS runner

ARG X_TAG
WORKDIR /opt/app
ENV NODE_ENV=production
ENV PORT=80
COPY --from=builder /opt/app/next.config.js ./
COPY --from=builder /opt/app/public ./public
COPY --from=builder /opt/app/.next ./.next
COPY --from=builder /opt/app/node_modules ./node_modules
CMD ["node_modules/.bin/next", "start"]
```

</details>

<details>
<summary>Set up ForestAdmin</summary>

Create a Forest Admin account [here](https://app.forestadmin.com/signup) and add a new project.

Click on Connect a datasource and choose PostgreSQL.

Use the following details:

```
Host: localhost
Port: 5432
User: contic
Password: password
Database name: contic
```

Click Install with NPM and enter the NPM commands into your terminal. Ensure to replace PROJECT_NAME with the name of your project

```
npm install -g forest-cli@latest -s
forest login
PokemonTrainer % forest projects:create "PROJECT_NAME" --databaseConnectionURL "postgres://contic:password@localhost:5432/contic" --databaseSchema "public" --applicationHost "localhost" --applicationPort "3310"
npm install -s
npm start
```

Rename your Forest Admin project folder to admin

```
mv <PROJECT_NAME> admin
```

Move into forest admin and install it's packages

```
cd admin
yarn
```

Start the forest admin server

```
yarn start
```

Forest Admin should pick this up and you should now see your database!

</details>
<details>
<summary>Setup AWS</summary>

> Ask Adam to send AWS credentials to get started

Install the AWS CLI. Information can be found here: https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

Once the above is working, configure aws locally. The region should be `eu-west-2`

```
aws configure
```

Enter the following to list your buckets to ensure AWS is working

```
aws s3 ls
```

</details>

<details>

<summary>Connect AWS and Forest Admin</summary>

On Forest Admin, navigate to your project and click on 'Deploy you admin backend', then 'Connect a datasource'. Enter the database details from earlier. We now need to copy the environment variables shown in Forst Admin into AWS.

![](public/forest-secret.png)

Login to AWS and search for AWS Secrets Manager. Click on 'Store a new secret'.

Select 'Other type of secret' and enter FOREST_ENV_SECRET, FOREST_AUTH_SECRET and APPLICATION_URL and fill in the details from forest admin.

![](public/amazon-secret.png)

</details>

<details>
<summary>Setup your infrastructure</summary>

We are going to use aws cloudformation to create our infrastructure today. Start by installing the AWS CDK (Cloud development kit) using npm.

```
npm install -g aws-cdk
```

Create a new folder called infrastructure and navigate into it

```
mkdir infrastructure
cd infrastructure
```

Initialise the empty project with cdk:

```
cdk init
```

Update `infrastructure/lib/infrastructure-stack.ts` to the following:

```
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
            NEXT_PUBLIC_API: `https://${apiDomain}`,
          },
        },
        publicLoadBalancer: true,
        redirectHTTP: true,
      }
    );
  }
}
```

After the above is setup, from the `infrastructure` folder. Run the following:

```
cdk bootstrap
cdk synth
cdk deploy
```

> Don't worry about breaking things. This is an isolated environment.

</details>

<details>
<summary>Create Models for Prisma</summary>

Now that Forest Admin and AWS are connected, we need to create our models for the database. You will need to edit the `schema.prisma` file in `api/prisma` to reflect the `pokemon.csv` file in the `data` folder.

Read about Primsa Models [here](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model).

<details>

</details>
<summary>Complete Prisma Schema</summary>

```
// This is your Prisma schema file
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Pokemon {
  id                Int                @id @default(autoincrement())
  name              String
  japanese_name     String
  percentage_male   Float
  pokedex_number    Pokedex?
  attack            Int
  defense           Int
  hp                Int
  sp_attack         Int
  sp_defense        Int
  speed             Int
  types             PokemonTypes[]
  weight_kg         Float
  generation        Generation         @relation(fields: [generationId], references: [id])
  generationId      Int
  classification    Classification     @relation(fields: [classificationId], references: [id])
  classificationId  Int
  is_legendary      Boolean
  abilities         PokemonAbilities[]
  against_bug       Float
  against_dark      Float
  against_dragon    Float
  against_electric  Float
  against_fairy     Float
  against_fight     Float
  against_fire      Float
  against_flying    Float
  against_ghost     Float
  against_grass     Float
  against_ground    Float
  against_ice       Float
  against_normal    Float
  against_poison    Float
  against_psychic   Float
  against_rock      Float
  against_steel     Float
  against_water     Float
  base_egg_steps    Int
  base_happiness    Int
  base_total        Int
  capture_rate      Float?
  experience_growth Int
  height_m          Float
}

model Pokedex {
  id        Int       @id @default(autoincrement())
  pokemon   Pokemon   @relation(fields: [pokemonId], references: [id])
  pokemonId Int       @default(autoincrement())
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  expiresAt DateTime?
}

model Type {
  id           Int            @id @default(autoincrement())
  type         String         @unique
  pokemonTypes PokemonTypes[]
  createdAt    DateTime       @default(now())
  updatedAt    DateTime       @updatedAt
  expiresAt    DateTime?
}

model PokemonTypes {
  pokemon   Pokemon   @relation(fields: [pokemonId], references: [id])
  pokemonId Int       @default(autoincrement())
  type      Type      @relation(fields: [typeId], references: [id])
  typeId    Int       @default(autoincrement())
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  expiresAt DateTime?

  @@id([pokemonId, typeId])
}

model Ability {
  id               Int                @id @default(autoincrement())
  ability          String             @unique
  pokemonAbilities PokemonAbilities[]
  createdAt        DateTime           @default(now())
  updatedAt        DateTime           @updatedAt
  expiresAt        DateTime?
}

model PokemonAbilities {
  pokemon   Pokemon   @relation(fields: [pokemonId], references: [id])
  pokemonId Int       @default(autoincrement())
  ability   Ability   @relation(fields: [abilityId], references: [id])
  abilityId Int       @default(autoincrement())
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
  expiresAt DateTime?

  @@id([pokemonId, abilityId])
}

model Classification {
  id             Int       @id @default(autoincrement())
  classification String    @unique
  pokemon        Pokemon[]
}

model Generation {
  id         Int       @id @default(autoincrement())
  generation Int       @unique
  pokemon    Pokemon[]
}

enum Abilities {
  Overgrow
  Chlorophyll
  Blaze
  Solar_Power
  Torrent
  Rain_Dish
  Shield_Dust
  Run_Away
  Shed_Skin
  Compoundeyes
  Tinted_Lens
  Swarm
  Sniper
  Keen_Eye
  Tangled_Feet
  Big_Pecks
  Guts
  Hustle
  Gluttony
  Thick_Fat
  Intimidate
  Unnerve
  Static
  Lightningrod
  Surge_Surfer
  Sand_Veil
  Sand_Rush
  Snow_Cloak
  Slush_Rush
  Poison_Point
  Rivalry
  Sheer_Force
  Cute_Charm
  Magic_Guard
  Friend_Guard
  Unaware
  Flash_Fire
  Drought
  Snow_Warning
  Competitive
  Frisk
  Inner_Focus
  Infiltrator
  Stench
  Effect_Spore
  Dry_Skin
  Damp
  Wonder_Skin_
  Arena_Trap
  Sand_Force
  Tangling_Hair
  Pickup
  Technician
  Rattled
  Limber
  Fur_Coat
  Cloud_Nine
  Swift_Swim
  Vital_Spirit
  Anger_Point
  Defiant
  Justified
  Water_Absorb
  Synchronize
  No_Guard
  Steadfast
  Clear_Body
  Liquid_Ooze
  Rock_Head
  Sturdy
  Magnet_Pull
  Galvanize
  Flame_Body
  Oblivious
  Own_Tempo
  Regenerator
  Analytic
  Early_Bird
  Hydration
  Ice_Body
  Sticky_Hold
  Poison_Touch
  Power_of_Alchemy
  Shell_Armor
  Skill_Link
  Overcoat
  Levitate
  Cursed_Body
  Weak_Armor
  Insomnia
  Forewarn
  Hyper_Cutter
  Soundproof
  Aftermath
  Harvest
  Battle_Armor
  Reckless
  Unburden
  Iron_Fist
  Natural_Cure
  Serene_Grace
  Healer
  Leaf_Guard
  Scrappy
  Water_Veil
  Illuminate
  Filter
  Mold_Breaker
  Moxie
  Imposter
  Adaptability
  Anticipation
  Volt_Absorb
  Quick_Feet
  Trace
  Download
  Pressure
  Immunity
  Marvel_Scale
  Multiscale
  Super_Luck
  Magic_Bounce
  Plus
  Huge_Power
  Sap_Sipper
  Drizzle
  Speed_Boost
  Prankster
  Shadow_Tag
  Telepathy
  Light_Metal
  Contrary
  Pickpocket
  Honey_Gather
  Magma_Armor
  Moody
  Suction_Cups
  Sand_Stream
  Poison_Heal
  Truant
  Wonder_Guard
  Normalize
  Stall
  Heavy_Metal
  Pure_Power
  Minus
  Rough_Skin
  Simple
  Solid_Rock
  White_Smoke
  Toxic_Boost
  Storm_Drain
  Forecast
  Color_Change
  Protean
  Air_Lock
  Flower_Gift
  Flare_Boost
  Klutz
  Heatproof
  Motor_Drive
  Slow_Start
  Bad_Dreams
  Multitype
  Victory_Star
  Zen_Mode
  Mummy
  Defeatist
  Illusion
  Iron_Barbs
  Turboblaze
  Teravolt
  Bulletproof
  Magician
  Battle_Bond
  Cheek_Pouch
  Gale_Wings
  Flower_Veil
  Symbiosis
  Grass_Pelt
  Stance_Change
  Aroma_Veil
  Sweet_Veil
  Tough_Claws
  Mega_Launcher
  Strong_Jaw
  Refrigerate
  Pixilate
  Gooey
  Fairy_Aura
  Dark_Aura
  Aura_Break
  Power_Construct
  Long_Reach
  Liquid_Voice
  Stakeout
  Battery
  Dancer
  Schooling
  Merciless
  Stamina
  Water_Bubble
  Corrosion
  Fluffy
  Queenly_Majesty
  Triage
  Receiver
  Wimp_Out
  Emergency_Exit
  Water_Compaction
  Innards_Out
  RKS_System
  Shields_Down
  Comatose
  Disguise
  Dazzling
  Berserk
  Steelworker
  Electric_Surge
  Psychic_Surge
  Grassy_Surge
  Misty_Surge
  Full_Metal_Body
  Shadow_Shield
  Beast_Boost
  Prism_Armor
  SoulHeart
}

enum Classifications {
  Seed_Pokemon
  Lizard_Pokemon
  Flame_Pokemon
  Tiny_Turtle_Pokemon
  Turtle_Pokemon
  Shellfish_Pokemon
  Worm_Pokemon
  Cocoon_Pokemon
  Butterfly_Pokemon
  Hairy_Pokemon
  Poison_Bee_Pokemon
  Tiny_Bird_Pokemon
  Bird_Pokemon
  Mouse_Pokemon
  Beak_Pokemon
  Snake_Pokemon
  Cobra_Pokemon
  Poison_Pin_Pokemon
  Drill_Pokemon
  Fairy_Pokemon
  Fox_Pokemon
  Balloon_Pokemon
  Bat_Pokemon
  Weed_Pokemon
  Flower_Pokemon
  Mushroom_Pokemon
  Insect_Pokemon
  Poison_Moth_Pokemon
  Mole_Pokemon
  Scratch_Cat_Pokemon
  Classy_Cat_Pokemon
  Duck_Pokemon
  Pig_Monkey_Pokemon
  Puppy_Pokemon
  Legendary_Pokemon
  Tadpole_Pokemon
  Psi_Pokemon
  Superpower_Pokemon
  Flycatcher_Pokemon
  Jellyfish_Pokemon
  Rock_Pokemon
  Megaton_Pokemon
  Fire_Horse_Pokemon
  Dopey_Pokemon
  Hermit_Crab_Pokemon
  Magnet_Pokemon
  Wild_Duck_Pokemon
  Twin_Bird_Pokemon
  Triple_Bird_Pokemon
  Sea_Lion_Pokemon
  Sludge_Pokemon
  Bivalve_Pokemon
  Gas_Pokemon
  Shadow_Pokemon
  Rock_Snake_Pokemon
  Hypnosis_Pokemon
  River_Crab_Pokemon
  Pincer_Pokemon
  Ball_Pokemon
  Egg_Pokemon
  Coconut_Pokemon
  Lonely_Pokemon
  Bone_Keeper_Pokemon
  Kicking_Pokemon
  Punching_Pokemon
  Licking_Pokemon
  Poison_Gas_Pokemon
  Spikes_Pokemon
  Vine_Pokemon
  Parent_Pokemon
  Dragon_Pokemon
  Goldfish_Pokemon
  Starshape_Pokemon
  Mysterious_Pokemon
  Barrier_Pokemon
  Mantis_Pokemon
  Humanshape_Pokemon
  Electric_Pokemon
  Spitfire_Pokemon
  Stagbeetle_Pokemon
  Wild_Bull_Pokemon
  Fish_Pokemon
  Atrocious_Pokemon
  Transport_Pokemon
  Transform_Pokemon
  Evolution_Pokemon
  Bubble_Jet_Pokemon
  Lightning_Pokemon
  Virtual_Pokemon
  Spiral_Pokemon
  Fossil_Pokemon
  Sleeping_Pokemon
  Freeze_Pokemon
  Genetic_Pokemon
  New_Species_Pokemon
  Leaf_Pokemon
  Herb_Pokemon
  Fire_Mouse_Pokemon
  Volcano_Pokemon
  Big_Jaw_Pokemon
  Scout_Pokemon
  Long_Body_Pokemon
  Owl_Pokemon
  Five_Star_Pokemon
  String_Spit_Pokemon
  Long_Leg_Pokemon
  Angler_Pokemon
  Light_Pokemon
  Tiny_Mouse_Pokemon
  Star_Shape_Pokemon
  Spike_Ball_Pokemon
  Happiness_Pokemon
  Little_Bird_Pokemon
  Mystic_Pokemon
  Wool_Pokemon
  Aquamouse_Pokemon
  Aquarabbit_Pokemon
  Imitation_Pokemon
  Frog_Pokemon
  Cottonweed_Pokemon
  Long_Tail_Pokemon
  Sun_Pokemon
  Clear_Wing_Pokemon
  Water_Fish_Pokemon
  Moonlight_Pokemon
  Darkness_Pokemon
  Royal_Pokemon
  Screech_Pokemon
  Symbol_Pokemon
  Patient_Pokemon
  Long_Neck_Pokemon
  Bagworm_Pokemon
  Land_Snake_Pokemon
  Flyscorpion_Pokemon
  Iron_Snake_Pokemon
  Mold_Pokemon
  Singlehorn_Pokemon
  Sharp_Claw_Pokemon
  Little_Bear_Pokemon
  Hibernator_Pokemon
  Lava_Pokemon
  Pig_Pokemon
  Swine_Pokemon
  Coral_Pokemon
  Jet_Pokemon
  Delivery_Pokemon
  Kite_Pokemon
  Armor_Bird_Pokemon
  Dark_Pokemon
  Long_Nose_Pokemon
  Armor_Pokemon
  Big_Horn_Pokemon
  Painter_Pokemon
  Scuffle_Pokemon
  Handstand_Pokemon
  Kiss_Pokemon
  Live_Coal_Pokemon
  Milk_Cow_Pokemon
  Thunder_Pokemon
  Aurora_Pokemon
  Rock_Skin_Pokemon
  Hard_Shell_Pokemon
  Diving_Pokemon
  Rainbow_Pokemon
  Time_Travel_Pokemon
  Wood_Gecko_Pokemon
  Forest_Pokemon
  Chick_Pokemon
  Young_Fowl_Pokemon
  Blaze_Pokemon
  Mud_Fish_Pokemon
  Bite_Pokemon
  Tiny_Racoon_Pokemon
  Rush_Pokemon
  Water_Weed_Pokemon
  Jolly_Pokemon
  Carefree_Pokemon
  Acorn_Pokemon
  Wily_Pokemon
  Wickid_Pokemon
  TinySwallow_Pokemon
  Swallow_Pokemon
  Seagull_Pokemon
  Water_Bird_Pokemon
  Feeling_Pokemon
  Emotion_Pokemon
  Embrace_Pokemon
  Pond_Skater_Pokemon
  Eyeball_Pokemon
  Slacker_Pokemon
  Wild_Monkey_Pokemon
  Lazy_Pokemon
  Trainee_Pokemon
  Ninja_Pokemon
  Shed_Pokemon
  Whisper_Pokemon
  Big_Voice_Pokemon
  Loud_Noise_Pokemon
  Guts_Pokemon
  Arm_Thrust_Pokemon
  Polka_Dot_Pokemon
  Compass_Pokemon
  Kitten_Pokemon
  Prim_Pokemon
  Deceiver_Pokemon
  Iron_Armor_Pokemon
  Meditate_Pokemon
  Discharge_Pokemon
  Cheering_Pokemon
  Firefly_Pokemon
  Thorn_Pokemon
  Stomach_Pokemon
  Poison_Bag_Pokemon
  Savage_Pokemon
  Brutal_Pokemon
  Ball_Whale_Pokemon
  Float_Whale_Pokemon
  Numb_Pokemon
  Eruption_Pokemon
  Coal_Pokemon
  Bounce_Pokemon
  Manipulate_Pokemon
  Spot_Panda_Pokemon
  Ant_Pit_Pokemon
  Vibration_Pokemon
  Cactus_Pokemon
  Scarecrow_Pokemon
  Cotton_Bird_Pokemon
  Humming_Pokemon
  Cat_Ferret_Pokemon
  Fang_Snake_Pokemon
  Meteorite_Pokemon
  Whiskers_Pokemon
  Ruffian_Pokemon
  Rogue_Pokemon
  Clay_Doll_Pokemon
  Sea_Lily_Pokemon
  Barnacle_Pokemon
  Old_Shrimp_Pokemon
  Plate_Pokemon
  Tender_Pokemon
  Weather_Pokemon
  Color_Swap_Pokemon
  Puppet_Pokemon
  Marionette_Pokemon
  Requiem_Pokemon
  Beckon_Pokemon
  Fruit_Pokemon
  Wind_Chime_Pokemon
  Disaster_Pokemon
  Bright_Pokemon
  Snow_Hat_Pokemon
  Face_Pokemon
  Clap_Pokemon
  Ball_Roll_Pokemon
  Ice_Break_Pokemon
  Deep_Sea_Pokemon
  South_Sea_Pokemon
  Longevity_Pokemon
  Rendezvous_Pokemon
  Rock_Head_Pokemon
  Endurance_Pokemon
  Iron_Ball_Pokemon
  Iron_Claw_Pokemon
  Iron_Leg_Pokemon
  Rock_Peak_Pokemon
  Iceberg_Pokemon
  Iron_Pokemon
  Eon_Pokemon
  Sea_Basin_Pokemon
  Continent_Pokemon
  Sky_High_Pokemon
  Wish_Pokemon
  DNA_Pokemon
  Tiny_Leaf_Pokemon
  Grove_Pokemon
  Chimp_Pokemon
  Playful_Pokemon
  Penguin_Pokemon
  Emperor_Pokemon
  Starling_Pokemon
  Predator_Pokemon
  Plump_Mouse_Pokemon
  Beaver_Pokemon
  Cricket_Pokemon
  Flash_Pokemon
  Spark_Pokemon
  Gleam_Eyes_Pokemon
  Bud_Pokemon
  Bouquet_Pokemon
  Head_Butt_Pokemon
  Shield_Pokemon
  Moth_Pokemon
  Tiny_Bee_Pokemon
  Beehive_Pokemon
  EleSquirrel_Pokemon
  Sea_Weasel_Pokemon
  Cherry_Pokemon
  Blossom_Pokemon
  Sea_Slug_Pokemon
  Blimp_Pokemon
  Rabbit_Pokemon
  Magical_Pokemon
  Big_Boss_Pokemon
  Catty_Pokemon
  Tiger_Cat_Pokemon
  Bell_Pokemon
  Skunk_Pokemon
  Bronze_Pokemon
  Bronze_Bell_Pokemon
  Bonsai_Pokemon
  Mime_Pokemon
  Playhouse_Pokemon
  Music_Note_Pokemon
  Forbidden_Pokemon
  Land_Shark_Pokemon
  Cave_Pokemon
  Mach_Pokemon
  Big_Eater_Pokemon
  Emanation_Pokemon
  Aura_Pokemon
  Hippo_Pokemon
  Heavyweight_Pokemon
  Scorpion_Pokemon
  Ogre_Scorp_Pokemon
  Toxic_Mouth_Pokemon
  Bug_Catcher_Pokemon
  Wing_Fish_Pokemon
  Neon_Pokemon
  Frosted_Tree_Pokemon
  Magnet_Area_Pokemon
  Thunderbolt_Pokemon
  Blast_Pokemon
  Jubilee_Pokemon
  Ogre_Darner_Pokemon
  Verdant_Pokemon
  Fresh_Snow_Pokemon
  Fang_Scorp_Pokemon
  Twin_Tusk_Pokemon
  Blade_Pokemon
  Gripper_Pokemon
  Snow_Land_Pokemon
  Plasma_Pokemon
  Knowledge_Pokemon
  Willpower_Pokemon
  Temporal_Pokemon
  Spatial_Pokemon
  Lava_Dome_Pokemon
  Colossal_Pokemon
  Renegade_Pokemon
  Lunar_Pokemon
  Sea_Drifter_Pokemon
  Seafaring_Pokemon
  PitchBlack_Pokemon
  Gratitude_Pokemon
  Alpha_Pokemon
  Victory_Pokemon
  Grass_Snake_Pokemon
  Regal_Pokemon
  Fire_Pig_Pokemon
  Mega_Fire_Pig_Pokemon
  Sea_Otter_Pokemon
  Discipline_Pokemon
  Formidable_Pokemon
  Lookout_Pokemon
  Loyal_Dog_Pokemon
  BigHearted_Pokemon
  Devious_Pokemon
  Cruel_Pokemon
  Grass_Monkey_Pokemon
  Thorn_Monkey_Pokemon
  High_Temp_Pokemon
  Ember_Pokemon
  Spray_Pokemon
  Geyser_Pokemon
  Dream_Eater_Pokemon
  Drowsing_Pokemon
  Tiny_Pigeon_Pokemon
  Wild_Pigeon_Pokemon
  Proud_Pokemon
  Electrified_Pokemon
  Mantle_Pokemon
  Ore_Pokemon
  Compressed_Pokemon
  Courting_Pokemon
  Subterrene_Pokemon
  Hearing_Pokemon
  Muscular_Pokemon
  Judo_Pokemon
  Karate_Pokemon
  Sewing_Pokemon
  LeafWrapped_Pokemon
  Nurturing_Pokemon
  Centipede_Pokemon
  Curlipede_Pokemon
  Megapede_Pokemon
  Cotton_Puff_Pokemon
  Windveiled_Pokemon
  Bulb_Pokemon
  Flowering_Pokemon
  Hostile_Pokemon
  Desert_Croc_Pokemon
  Intimidation_Pokemon
  Zen_Charm_Pokemon
  Blazing_Pokemon
  Rock_Inn_Pokemon
  Stone_Home_Pokemon
  Shedding_Pokemon
  Hoodlum_Pokemon
  Avianoid_Pokemon
  Spirit_Pokemon
  Coffin_Pokemon
  Prototurtle_Pokemon
  First_Bird_Pokemon
  Trash_Bag_Pokemon
  Trash_Heap_Pokemon
  Tricky_Fox_Pokemon
  Illusion_Fox_Pokemon
  Chinchilla_Pokemon
  Scarf_Pokemon
  Fixation_Pokemon
  Astral_Body_Pokemon
  Cell_Pokemon
  Mitosis_Pokemon
  Multiplying_Pokemon
  White_Bird_Pokemon
  Icy_Snow_Pokemon
  Snowstorm_Pokemon
  Season_Pokemon
  Sky_Squirrel_Pokemon
  Clamping_Pokemon
  Cavalry_Pokemon
  Floating_Pokemon
  Caring_Pokemon
  Attaching_Pokemon
  EleSpider_Pokemon
  Thorn_Seed_Pokemon
  Thorn_Pod_Pokemon
  Gear_Pokemon
  EleFish_Pokemon
  Cerebral_Pokemon
  Candle_Pokemon
  Lamp_Pokemon
  Luring_Pokemon
  Tusk_Pokemon
  Axe_Jaw_Pokemon
  Chill_Pokemon
  Freezing_Pokemon
  Crystallizing_Pokemon
  Snail_Pokemon
  Shell_Out_Pokemon
  Trap_Pokemon
  Martial_Arts_Pokemon
  Automaton_Pokemon
  Sharp_Blade_Pokemon
  Sword_Blade_Pokemon
  Bash_Buffalo_Pokemon
  Eaglet_Pokemon
  Valiant_Pokemon
  Diapered_Pokemon
  Bone_Vulture_Pokemon
  Anteater_Pokemon
  Iron_Ant_Pokemon
  Irate_Pokemon
  Torch_Pokemon
  Iron_Will_Pokemon
  Cavern_Pokemon
  Grassland_Pokemon
  Cyclone_Pokemon
  Bolt_Strike_Pokemon
  Vast_White_Pokemon
  Deep_Black_Pokemon
  Abundance_Pokemon
  Boundary_Pokemon
  Colt_Pokemon
  Melody_Pokemon
  Paleozoic_Pokemon
  Spiky_Nut_Pokemon
  Spiny_Armor_Pokemon
  Bubble_Frog_Pokemon
  Digging_Pokemon
  Tiny_Robin_Pokemon
  Scorching_Pokemon
  Scatterdust_Pokemon
  Scale_Pokemon
  Lion_Cub_Pokemon
  Single_Bloom_Pokemon
  Garden_Pokemon
  Mount_Pokemon
  Daunting_Pokemon
  Poodle_Pokemon
  Restraint_Pokemon
  Constraint_Pokemon
  Sword_Pokemon
  Royal_Sword_Pokemon
  Perfume_Pokemon
  Fragrance_Pokemon
  Cotton_Candy_Pokemon
  Meringue_Pokemon
  Revolving_Pokemon
  Overturning_Pokemon
  TwoHanded_Pokemon
  Collective_Pokemon
  Mock_Kelp_Pokemon
  Water_Gun_Pokemon
  Howitzer_Pokemon
  Generator_Pokemon
  Royal_Heir_Pokemon
  Despot_Pokemon
  Tundra_Pokemon
  Intertwining_Pokemon
  Wrestling_Pokemon
  Antenna_Pokemon
  Jewel_Pokemon
  Soft_Tissue_Pokemon
  Key_Ring_Pokemon
  Stump_Pokemon
  Elder_Tree_Pokemon
  Pumpkin_Pokemon
  Ice_Chunk_Pokemon
  Sound_Wave_Pokemon
  Life_Pokemon
  Destruction_Pokemon
  Order_Pokemon
  Mischief_Pokemon
  Steam_Pokemon
  Grass_Quill_Pokemon
  Blade_Quill_Pokemon
  Arrow_Quill_Pokemon
  Fire_Cat_Pokemon
  Heel_Pokemon
  Pop_Star_Pokemon
  Soloist_Pokemon
  Woodpecker_Pokemon
  Bugle_Beak_Pokemon
  Cannon_Pokemon
  Loitering_Pokemon
  Stakeout_Pokemon
  Larva_Pokemon
  Battery_Pokemon
  Stag_Beetle_Pokemon
  Boxing_Pokemon
  Woolly_Crab_Pokemon
  Dancing_Pokemon
  Bee_Fly_Pokemon
  Wolf_Pokemon
  Small_Fry_Pokemon
  Brutal_Star_Pokemon
  Donkey_Pokemon
  Draft_Horse_Pokemon
  Water_Bubble_Pokemon
  Sickle_Grass_Pokemon
  Bloom_Sickle_Pokemon
  Illuminating_Pokemon
  Toxic_Lizard_Pokemon
  Flailing_Pokemon
  Strong_Arm_Pokemon
  Posy_Picker_Pokemon
  Sage_Pokemon
  Teamwork_Pokemon
  Turn_Tail_Pokemon
  Hard_Scale_Pokemon
  Sand_Heap_Pokemon
  Sand_Castle_Pokemon
  Sea_Cucumber_Pokemon
  Synthetic_Pokemon
  Meteor_Pokemon
  Blast_Turtle_Pokemon
  RolyPoly_Pokemon
  Disguise_Pokemon
  Gnash_Teeth_Pokemon
  Placid_Pokemon
  Sea_Creeper_Pokemon
  Scaly_Pokemon
  Land_Spirit_Pokemon
  Nebula_Pokemon
  Protostar_Pokemon
  Sunne_Pokemon
  Moone_Pokemon
  Parasite_Pokemon
  Swollen_Pokemon
  Lissome_Pokemon
  Glowing_Pokemon
  Launch_Pokemon
  Drawn_Sword_Pokemon
  Junkivore_Pokemon
  Prism_Pokemon
  Artificial_Pokemon
}

enum Types {
  grass
  fire
  water
  bug
  normal
  poison
  electric
  ground
  fairy
  fighting
  psychic
  rock
  ghost
  ice
  dragon
  dark
  steel
  flying
}
```

</details>

<details>
<summary>Setup ESLint and Prettier</summary>

Install Prettier

```
yarn add --dev --exact prettier
```

Add a `.prettierrc.json` file

```
{
 "semi": true,
 "tabWidth": 2,
 "printWidth": 100,
 "singleQuote": true
}
```

Add a `.prettier.ignore` file

```
package.json
package-lock.json
```

Install Prettier Code Formatter

Install ESLint

```
yarn add --dev eslint
```

Initialise ESLint

```
yarn create @eslint/config
```

Select the following options:

- To check syntax, find problems, and enforce code style
- Javascript modules (import/export)
- None of these
- No (Typescript)
- Node
- Yes
- Airbnb
- Javascript

Get ESLint and Prettier working together

Install the Prettier plugins for ESLint

```
yarn add --dev eslint-config-prettier eslint-plugin-prettier

```

Update your `.eslintrc.js` file

```
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
  },
};
```

</details>

<details>
<summary>Seed the database</summary>
Prisma has a fantastic seed command build in which will pickup a `api/prisma/seed.ts` file. You can read more about this method here: https://www.prisma.io/docs/guides/database/seed-database

To get started add this command to your package.json:

```
"seed": "ts-node prisma/seed.ts",
```

Add extra dependencies:

```
yarn add csv-parser
yarn add fs
```

And create your seed file at `api/prisma.seed.ts`

```
import { PrismaClient } from "@prisma/client";
import csv from "csv-parser";
import fs from "fs";

const getPokemon = async (): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const results: any = [];
    fs.createReadStream("../data/pokemon.csv")
      .pipe(csv())
      .on("data", (data: any) => results.push(data))
      .on("error", (error: any) => reject(error))
      .on("end", () => {
        resolve(
          results.map((result: any) => ({
            ...result,
            abilities: JSON.parse(result.abilities.replace(/\'/g, '"')),
            against_bug: Number(result.against_bug),
            against_dark: Number(result.against_dark),
            against_dragon: Number(result.against_dragon),
            against_electric: Number(result.against_electric),
            against_fairy: Number(result.against_fairy),
            against_fight: Number(result.against_fight),
            against_fire: Number(result.against_fire),
            against_flying: Number(result.against_flying),
            against_ghost: Number(result.against_ghost),
            against_grass: Number(result.against_grass),
            against_ground: Number(result.against_ground),
            against_ice: Number(result.against_ice),
            against_normal: Number(result.against_normal),
            against_poison: Number(result.against_poison),
            against_psychic: Number(result.against_psychic),
            against_rock: Number(result.against_rock),
            against_steel: Number(result.against_steel),
            against_water: Number(result.against_water),
            attack: Number(result.attack),
            base_egg_steps: Number(result.base_egg_steps),
            base_happiness: Number(result.base_happiness),
            base_total: Number(result.base_total),
            capture_rate: Number(result.capture_rate),
            defense: Number(result.defense),
            experience_growth: Number(result.experience_growth),
            height_m: Number(result.height_m),
            hp: Number(result.hp),
            percentage_male: Number(result.percentage_male),
            pokedex_number: Number(result.pokedex_number),
            sp_attack: Number(result.sp_attack),
            sp_defense: Number(result.sp_defense),
            speed: Number(result.speed),
            types: result.type2 ? [result.type1, result.type2] : [result.type1],
            weight_kg: Number(result.weight_kg),
            generation: Number(result.generation),
            is_legendary: result.is_legendary === "1" ? true : false,
          }))
        );
      });
  });
};

const prisma = new PrismaClient();

async function main() {
  const pokemon = await getPokemon();
  // Create the abilities, classifications, generations and types in the db
  const abilities = Array.from(new Set(pokemon.map((p) => p.abilities).flat()));
  await prisma.ability.createMany({
    data: abilities.map((value) => ({ ability: value })),
  });
  const classifications = Array.from(
    new Set(pokemon.map((p) => p.classification))
  );
  await prisma.classification.createMany({
    data: classifications.map((value) => ({ classification: value })),
  });
  const generations = Array.from(new Set(pokemon.map((p) => p.generation)));
  await prisma.generation.createMany({
    data: generations.map((value) => ({ generation: value })),
  });
  const types = Array.from(new Set(pokemon.map((p) => p.types).flat()));
  await prisma.type.createMany({
    data: types.map((value) => ({ type: value })),
  });

  // Get the ids for abilities, classifications, generations and types from the db
  const abilityIds = await prisma.ability.findMany();
  const classificationIds = await prisma.classification.findMany();
  const generationIds = await prisma.generation.findMany();
  const typeIds = await prisma.type.findMany();

  // Add the classificationId and generationId to each pokemon for inserting
  const pokemon2 = pokemon.map((p) => {
    const classificationIndex = classificationIds.findIndex(
      (id) => id.classification === p.classification
    );
    const generationIndex = generationIds.findIndex(
      (id) => id.generation === p.generation
    );
    return {
      ...p,
      generationId: generationIds[generationIndex].id,
      classificationId: classificationIds[classificationIndex].id,
    };
  });

  // Create the pokemon in the db
  await prisma.pokemon.createMany({
    data: pokemon2.map((p) => ({
      name: p.name,
      japanese_name: p.japanese_name,
      percentage_male: p.percentage_male,
      generationId: p.generationId,
      sp_attack: p.sp_attack,
      sp_defense: p.sp_defense,
      speed: p.speed,
      weight_kg: p.weight_kg,
      is_legendary: p.is_legendary,
      against_bug: p.against_bug,
      against_dark: p.against_dark,
      against_dragon: p.against_dragon,
      against_electric: p.against_electric,
      against_fairy: p.against_fairy,
      against_fight: p.against_fight,
      against_fire: p.against_fire,
      against_flying: p.against_flying,
      against_ghost: p.against_ghost,
      against_grass: p.against_grass,
      against_ground: p.against_ground,
      against_ice: p.against_ice,
      against_normal: p.against_normal,
      against_poison: p.against_poison,
      against_psychic: p.against_psychic,
      against_rock: p.against_rock,
      against_steel: p.against_steel,
      against_water: p.against_water,
      attack: p.attack,
      base_egg_steps: p.base_egg_steps,
      base_happiness: p.base_happiness,
      base_total: p.base_total,
      capture_rate: p.capture_rate,
      classificationId: p.classificationId,
      defense: p.defense,
      experience_growth: p.experience_growth,
      height_m: p.height_m,
      hp: p.hp,
    })),
  });
  // Get the pokemon ids from the db
  const pokemonIds = await prisma.pokemon.findMany();

  // Map each pokemon id to its pokedex_number, type ids and ability ids
  const pokemon3 = pokemon2.map((p) => {
    const pokemonIndex = pokemonIds.findIndex((name) => name.name === p.name);
    const pokemonTypeIds = typeIds
      .filter((type) => p.types.includes(type.type))
      .map((type) => type.id);
    const pokemonAbilityIds = abilityIds
      .filter((ability) => p.abilities.includes(ability.ability))
      .map((ability) => ability.id);
    return {
      ...p,
      pokemonId: pokemonIds[pokemonIndex].id,
      typeIds: pokemonTypeIds,
      abilityIds: pokemonAbilityIds,
    };
  });

  // Insert the pokedex_entries into the db
  await prisma.pokedex.createMany({
    data: pokemon3.map((p) => ({
      id: p.pokedex_number,
      pokemonId: p.pokemonId,
    })),
  });

  // Flatten pokemon abilities and pokemon types for insertion
  const pokemonAbilities = pokemon3.flatMap((p) =>
    p.abilityIds.map((q: any) => ({ abilityId: q, pokemonId: p.pokemonId }))
  );
  const pokemonTypes = pokemon3.flatMap((p) =>
    p.typeIds.map((q: any) => ({ typeId: q, pokemonId: p.pokemonId }))
  );

  // Insert the pokemonAbilities and pokemonTypes into the db
  await prisma.pokemonAbilities.createMany({
    data: pokemonAbilities,
  });
  await prisma.pokemonTypes.createMany({
    data: pokemonTypes,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

</details>

<details>
<summary>Setup Github Actions</summary>
Github actions can automatically deploy your application to AWS on new commits. This is known as CI/CD and is incredibly improtant when it comes to moving fast in projects.

You can get setup automatically by creating a file `.github/workflows/deploy.yml` and commiting/pushing to your branch

```
on: [push]

jobs:
  aws_cdk:
    runs-on: ubuntu-latest
    steps:
      - name: cdk synth
        uses: youyo/aws-cdk-github-actions@v2
        with:
          cdk_subcommand: "synth"
          working_dir: "infrastructure"
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_DEFAULT_REGION: "eu-west-2"
      - name: cdk deploy
        uses: youyo/aws-cdk-github-actions@v2
        with:
          cdk_subcommand: "deploy"
          cdk_stack: "<YOUR_NAME>InfrastructureStack"
          cdk_args: "--require-approval never"
          actions_comment: false
          working_dir: "infrastructure"
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_DEFAULT_REGION: "eu-west-2"

```

</details>

<details>
<summary>Setup GraphQL</summary>

Add a new generator to your schema.graphql:

```
generator typegraphql {
  provider = "typegraphql-prisma"
}
```

Update your `api/package.json` to include new packages:

```
{
  "name": "api",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc",
    "dev": "tsnd --respawn index.ts",
    "generate": "prisma generate",
    "prestart": "prisma migrate deploy",
    "seed": "ts-node prisma/seed.ts",
    "start": "node ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/node": "^17.0.18",
    "prisma": "^3.10.0",
    "ts-node": "^10.5.0",
    "ts-node-dev": "^1.1.8",
    "typescript": "^4.5.5"
  },
  "dependencies": {
    "@prisma/client": "^3.10.0",
    "@types/graphql-fields": "^1.3.4",
    "apollo-server": "^3.6.3",
    "class-validator": "^0.13.2",
    "csv-parser": "^3.0.0",
    "express": "^4.17.3",
    "graphql": "^15.3.0",
    "graphql-fields": "^2.0.3",
    "graphql-scalars": "^1.15.0",
    "reflect-metadata": "^0.1.13",
    "tslib": "^2.3.1",
    "type-graphql": "^1.1.1",
    "typegraphql-prisma": "^0.19.1"
  }
}
```

Change your `api/index.ts` file:

```
import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { resolvers } from "@generated/type-graphql";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const PORT = process.env.PORT ?? 80;

async function bootstrap() {
  const schema = await buildSchema({
    resolvers,
    emitSchemaFile: true,
    validate: false,
  });
  // Create the GraphQL server
  const server = new ApolloServer({
    schema,
    context: () => ({ prisma }),
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();
```

Generate your api and run the server:

```
yarn generate
yarn dev
```

</details>

<details>
<summary>Setup APP code generation</summary>

Update your package.json:

```
{
  "name": "app",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "generate": "graphql-codegen --config codegen.yml",
    "component": "HYGEN_TMPLS=scripts/_templates yarn hygen component with-prompt",
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook"
  },
  "dependencies": {
    "graphql": "^16.3.0",
    "next": "12.1.0",
    "react": "17.0.2",
    "react-dom": "17.0.2",
    "react-query": "^3.34.16"
  },
  "devDependencies": {
    "@babel/core": "^7.17.5",
    "@graphql-codegen/cli": "2.6.2",
    "@graphql-codegen/introspection": "2.1.1",
    "@graphql-codegen/typescript": "2.4.5",
    "@graphql-codegen/typescript-operations": "^2.3.2",
    "@graphql-codegen/typescript-react-query": "^3.5.5",
    "@storybook/addon-actions": "^6.4.19",
    "@storybook/addon-essentials": "^6.4.19",
    "@storybook/addon-interactions": "^6.4.19",
    "@storybook/addon-links": "^6.4.19",
    "@storybook/react": "^6.4.19",
    "@storybook/testing-library": "^0.0.9",
    "@types/node": "17.0.18",
    "@types/react": "17.0.39",
    "babel-loader": "^8.2.3",
    "eslint": "8.9.0",
    "eslint-config-next": "12.1.0",
    "eslint-plugin-storybook": "^0.5.7",
    "hygen": "^6.0.4",
    "typescript": "4.5.5"
  }
}
```

Setup Hygen - Component generation in an atomic-design format:
`app/scripts/_templates/component/with-prompt/core_index.ejs.t`

```
---
inject: true
append: true
to: src/components/<%=atomic%>s/index.ts
---
export * from './<%=name%>';
```

`app/scripts/_templates/component/with-prompt/core.ejs.t`

```
---
to: src/components/<%=atomic%>s/<%=name%>/<%=name%>.tsx
---
import React, { FC } from 'react';

type Props = {}

export const <%= name %>: FC<Props> = (props) => <div {...props} />;
```

`app/scripts/_templates/component/with-prompt/index.ejs.t`

```
---
to: src/components/<%=atomic%>s/<%=name%>/index.ts
---
export * from './<%=name%>';
```

`app/scripts/_templates/component/with-prompt/prompt.js`

```
// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'input',
    name: 'atomic',
    message: "What type of component? (atom, molecule, organism, template, screen)"
  },
  {
    type: 'input',
    name: 'name',
    message: "What's the name of your component?"
  },
]
```

`app/scripts/_templates/component/with-prompt/story.ejs.t`

```
---
to: src/components/<%=atomic%>s/<%=name%>/<%=name%>.stories.tsx
---
import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react/types-6-0';

import { <%=name%> } from './<%=name%>';

const Template: Story<ComponentProps<typeof <%=name%>>> = (args) => (
  <<%=name%> {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};

export default {
  component: <%=name%>,
  title: '<%=h.changeCase.sentence(atomic)%>s/<%=name%>',
};

```

`app/scripts/_templates/component/with-prompt/test.ejs.t`

```
---
to: src/components/<%=atomic%>s/<%=name%>/<%=name%>.test.tsx
---
import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { <%=name%> } from './<%=name%>';

describe('<%=name%>', () => {
  it('should render', () => {
    render(<<%=name%> />);
  });
  it('should match a snapshot', () => {
    const tree = renderer.create(<<%=name%> />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```

You can test the above file by running:

```
yarn component Test
```

Setup Codegeneration:

`app/codegen.yml`

```
schema: http://localhost:80/graphql
documents: "./src/**/*.tsx"
generates:
  ./src/graphql/generated.ts:
    plugins:
      - typescript
      - typescript-operations
      - typescript-react-query
    config:
      fetcher:
        func: "./utils/fetcher#useFetchData"
        isReactHook: false
```

`src/utils/fetcher.ts`

```
import React from "react"

export const useFetchData = <TData, TVariables>(
    query: string,
    options?: RequestInit['headers']
  ): ((variables?: TVariables) => Promise<TData>) => {

    return async (variables?: TVariables) => {
      const res = await fetch('${process.env.NEXT_PUBLIC_API}/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(options ?? {})
        },
        body: JSON.stringify({
          query,
          variables
        })
      })

      const json = await res.json()

      if (json.errors) {
        const { message } = json.errors[0] || 'Error..'
        throw new Error(message)
      }

      return json.data
    }
  }
```

Setup storybook by running the following command:

```
npx storybook init
```

</details>

### Customise your project

Well done on setting up a 3 stage process following the information above! Now's the time to work with a PO and come up with features!
