require('dotenv').config()
const jwt = require('jsonwebtoken')
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

// graphQL schema and resolvers
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

// test database and handle disconnection
require('./startup/initDb')()

// define apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError(formattedError, error) {
        return formattedError
    }
})

// initialize server
startStandaloneServer(server, {
    listen: {
        port: 4000
    },
    context: async ({ req, res }) => {
        const bearer = req.headers.authorization
        // if a logged in user is present, decode the user's jwt and insert the decoded value into the context
        if (bearer) {
            const token = bearer.split(' ')[1]
            return { user: jwt.verify(token, process.env.JWT_SECRET) }
        }
    }
}).then(({ url }) => console.log(url))
