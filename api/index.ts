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
    healthCheckPath:'/health',
    schema,
    context: () => ({ prisma }),
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();