const { gql } = require('apollo-server')
const casual = require('casual').fr_FR

exports.Player = gql`
  type Player {
    name: String
    result: Float
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
exports.playerMocks = {
  Player: () => ({
    name: casual.full_name,
    result: casual.random
  })
}
