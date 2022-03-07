#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { InfrastructureStack } from '../lib/infrastructure-stack';

const app = new cdk.App();

new InfrastructureStack(app, 'talhaInfrastructureStack', {
  env: { region: 'eu-west-2', account: '242580904937' },
  hostedZoneId: 'Z0163067XMEL30Z94G74',
  zoneName: 'contic.tech',
  username: 'talha',
  forestSecretCompleteArn: 'arn:aws:secretsmanager:eu-west-2:242580904937:secret:PokemonTrainer-K1lUyt',
});