const { ApolloServer, gql } = require('apollo-server')
const { merge } = require('lodash')

const { Player, playerMocks } = require('./schema/player')
const { Book, bookMocks } = require('./schema/book')
const { Game, gameMocks } = require('./schema/game')

const Query = gql`
  type Query {
    _empty: String
  }
`

const mocks = merge(bookMocks, playerMocks, gameMocks)
const typeDefs = [Query, Book, Player, Game]

const server = new ApolloServer({ typeDefs, mocks })
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
