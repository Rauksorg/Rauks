const { gql, MockList } = require('apollo-server')
const casual = require('casual').fr_FR

exports.Game = gql`
  type Game {
    title: String
    mod: String
  }
  extend type Query {
    getGame: Game
  }
`

exports.gameMocks = {
  Game: () => ({
    title: casual.title,
    mod: 'rauks'
  })
}
