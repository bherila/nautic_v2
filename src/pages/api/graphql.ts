import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
import { buildSchema } from "type-graphql";
import initMiddleware from "../../lib/initMiddleware";
import { GraphQLSchema } from "graphql";
import { RegistrationResolver } from "../../lib/graphql/registrationResolver";
import { withSentry } from "@sentry/nextjs";

// NOTE: Needed for vercel, don't remove!!
// noinspection JSUnusedGlobalSymbols
export const config = {
  api: {
    bodyParser: false,
  },
};

const createSchema = async (shouldEmitSchemaFile = true) => {
  // build the schema as always
  const schema = await buildSchema({
    resolvers: [RegistrationResolver],
    // authChecker: authorize,
    // register the IOC container
    // container: ({ context }: ResolverData<ApolloServerContext>) =>
    //   context.container,
    emitSchemaFile: shouldEmitSchemaFile,
  });

  if (shouldEmitSchemaFile) {
    console.info("🗺️ GraphQL schema created");
  }

  return schema;
};

let apolloServerHandler: (req: any, res: any) => Promise<void>;
let schema: GraphQLSchema | null = null;

async function getApolloServerHandler() {
  if (!schema) {
    schema = await createSchema();
  }
  if (!apolloServerHandler) {
    const server = new ApolloServer({ schema });
    await server.start();
    apolloServerHandler = server.createHandler({
      path: "/api/graphql",
    });
  }
  return apolloServerHandler;
}

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  await cors(req, res);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  const apolloServerHandler = await getApolloServerHandler();
  return apolloServerHandler(req, res);
}

// noinspection JSUnusedGlobalSymbols
export default withSentry(handler);
