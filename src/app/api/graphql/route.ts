import 'reflect-metadata'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { NextRequest } from 'next/server'
import { buildSchema } from 'type-graphql'
import path from 'path'
import { RegistrationResolver } from '@/lib/graphql/registrationResolver'

const rootPath = process.cwd()

const schema = await buildSchema({
  resolvers: [RegistrationResolver],
  emitSchemaFile: {
    path: path.resolve(rootPath, 'schema.gql'),
    sortedSchema: false,
  },
})

const server = new ApolloServer({
  schema,
})

const handler = startServerAndCreateNextHandler<NextRequest>(server)

export async function GET(request: NextRequest) {
  return handler(request)
}

export async function POST(request: NextRequest) {
  return handler(request)
}
