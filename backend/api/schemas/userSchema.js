import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from '../resolvers/userResolver'

const typeDefs = `
    type User {
        _id: ID!
        name: String!
        username: String!
        password: String!
    }

    type Query {
        all: [User]
        find(username: String!): User
    }
`

export default makeExecutableSchema({typeDefs, resolvers})