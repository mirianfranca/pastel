import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from '../resolvers/userResolver'

const typeDefs = `
    type User {
        _id: ID!
        name: String!
        username: String!
        password: String!
    }

    type Game {
        _id: ID!
        name: String!
        category: String!
    }

    type Query {
        all: [User]
        find(username: String!): User
        allGames:[Game]
    }
`

export default makeExecutableSchema({typeDefs, resolvers})