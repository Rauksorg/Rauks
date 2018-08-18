const { ApolloServer, gql } = require('apollo-server')
const { merge } = require('lodash')

const { Player } = require('./schema/player')
const { Book, bookMocks } = require('./schema/book')

const Query = gql`
  type Query {
    _empty: String
  }
`

const mocks = merge(bookMocks)
const typeDefs = [Query, Book, Player]

const server = new ApolloServer({ typeDefs, mocks })
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
