const { gql } = require('apollo-server')

exports.Player = gql`
  type Player {
    name: String
    lastResult: String
  }
  extend type Query {
    getPlayers: [Player]
  }
`