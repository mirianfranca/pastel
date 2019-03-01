import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './api/resolvers/userResolver'

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
        allGames:[Game]
    }
`

export default makeExecutableSchema({typeDefs, resolvers})