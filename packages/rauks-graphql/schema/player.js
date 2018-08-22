const { gql } = require('apollo-server')

exports.Player = gql`
  type Player {
    name: String
    result: String
    reroll: Int
    ammo: Int
    money: [Banknote]
  }
  type Banknote {
    name: Int
    number: Int
  }
  extend type Query {
    getPlayers: [Player]
  }
`
