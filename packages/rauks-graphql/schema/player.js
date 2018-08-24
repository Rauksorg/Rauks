const { gql } = require('apollo-server')
const casual = require('casual').fr_FR

exports.Player = gql`
  type Player {
    name: String
    diceResult: DiceResult
    reroll: Int
    ammo: Int
    money: [Banknote]
  }
  type Banknote {
    name: Int
    number: Int
  }
  type DiceResult {
    result: Float
    selectedDice: Int
    timestamp: Int
  }
  extend type Query {
    getPlayers: [Player]
  }
`
exports.playerMocks = {
  Player: () => ({
    name: casual.full_name
  }),
  DiceResult: () => ({
    result: casual.random,
    selectedDice: 0,
    timestamp: casual.unix_time
  })
}
