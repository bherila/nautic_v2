import "reflect-metadata";
import { ApolloServer, gql } from "apollo-server-micro";
import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";
import RegistrationState, {
  defaultRegistrationState,
} from "../../lib/RegistrationState";
import {
  buildSchema,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";
import initMiddleware from "../../lib/initMiddleware";
import { GraphQLSchema } from "graphql";

const nonnull = { nullable: false };

@ObjectType({ isAbstract: true })
class RegistrationStateGraphType implements RegistrationState {
  @Field(() => [String], nonnull)
  selectedPlan!: string[];

  @Field(() => Boolean, nonnull) broadbandVideo!: boolean;
  @Field(() => String, nonnull) installDate!: string;
  @Field(() => String, nonnull) imei!: string;
  @Field(() => String, nonnull) ownerFname!: string;
  @Field(() => String, nonnull) ownerLname!: string;
  @Field(() => String, nonnull) ownerMi!: string;
  @Field(() => String, nonnull) vesselName!: string;
  @Field(() => String, nonnull) cellNumber!: string;
  @Field(() => String, nonnull) vesselType!: string;
  @Field(() => String, nonnull) dealerName!: string;
  @Field(() => String, nonnull) dealerCompany!: string;
  @Field(() => Boolean, nonnull) showImeiModal!: boolean;
  @Field(() => Boolean, nonnull) agreed!: boolean;
  @Field(() => String, nonnull) iccId!: string;
}

@Resolver(RegistrationStateGraphType)
class RegistrationResolver {
  @Query((returns) => RegistrationStateGraphType, {
    name: "defaultRegistration",
  })
  defaultRegistration() {
    return defaultRegistrationState;
  }

  @Mutation((returns) => RegistrationStateGraphType, {
    name: "submitRegistration",
    description: "Creates the subscription and registers the subscriber.",
  })
  submitRegistration(
    submitRegistrationData: RegistrationStateGraphType
  ): RegistrationStateGraphType {
    // TODO: Create the Stripe customer and Subscription using the tokenized payment.
    return submitRegistrationData;
  }
}

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
const getApolloServerHandler = async () => {
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
};

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  const apolloServerHandler = await getApolloServerHandler();
  return apolloServerHandler(req, res);
};
