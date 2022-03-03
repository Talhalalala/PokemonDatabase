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

This repo is a template for a Pokemon Showcase application and admin managament console. The objective of this repo is to train new Contic starters to build high quality applications very quickly and to be able to maintain them with a wider team.

<p align="right">(<a href="#top">back to top</a>)</p>

### Necessary Technologies

**Frontend**

- [Next.js](https://nextjs.org/)
- [React.js](https://reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [React-Query](https://react-query.tanstack.com/)

**Backend**

- [Prisma](https://prisma.io)
- [GraphQL](https://graphql.org/)
- [Apollo Server](https://github.com/apollographql/apollo-server)

**Admin**

- [Forest Admin](https://www.forestadmin.com/)
- [Sequelize](https://sequelize.org/)

**DevTools**

- [Docker](https://www.docker.com/)
- [Yarn](https://yarnpkg.com/)
- [Storybook](https://storybook.js.org/)
- [Hygen](https://www.hygen.io/)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [Graphql Code Generator](https://www.graphql-code-generator.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

## Steps

### Set up a Basic API

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

### Set up Next.js

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

### Set up ForestAdmin

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

### Set up AWS

Configure AWS and enter your details. The region should be `eu-west-2`

```
aws configure
```

Enter the following to list your buckets to ensure AWS is working

```
aws s3 ls
```

Install the AWS CDK

```
npm install -g aws-cdk
```

Create a new folder called infrastructure and navigate into it

```
mkdir infrastructure
cd infrastructure
```

Initialise and deploy

```
cdk init
cdk bootstrap
cdk synth
cdk deploy
```

### Connect AWS and Forest Admin

On Forest Admin, navigate to your project and click on 'Deploy you admin backend', then 'Connect a datasource'. Enter the database details from earlier. We now need to copy the environment variables shown in Forst Admin into AWS.

![](public/forest-secret.png)

Login to AWS and search for AWS Secrets Manager. Click on 'Store a new secret'.

Select 'Other type of secret' and enter FOREST_ENV_SECRET, FOREST_AUTH_SECRET and APPLICATION_URL and fill in the details from forest admin.

![](public/amazon-secret.png)

### Create Models for Prisma

Now that Forest Admin and AWS are connected, we need to create our models for the database. You will need to edit the `schema.prisma` file in `api/prisma` to reflect the `pokemon.csv` file in the `data` folder.

Read about Primsa Models [here](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model).

### Set up Infrastructure for API & Next.js

### Set up Infrastucture ForestAdmin

### Set up ESLint and Prettier

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
