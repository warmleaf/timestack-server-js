import * as path from 'path'
import { mergeResolvers, mergeTypes, fileLoader } from 'merge-graphql-schemas'
import { GraphQLServer, PubSub } from 'graphql-yoga'

const resolversArray = fileLoader(path.join(__dirname, "./resolvers/*"))
const typesArray = fileLoader(path.join(__dirname, "./schema/*"))
const resolvers = mergeResolvers(resolversArray)
const typeDefs = mergeTypes(typesArray)
const server = new GraphQLServer({ typeDefs, resolvers, context: { ps: new PubSub() } })

server.start(() => console.log('Server is running on localhost:4000'))