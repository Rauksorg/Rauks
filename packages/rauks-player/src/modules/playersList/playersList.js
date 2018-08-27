import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import mods from '../../mods/index'

const styles = theme => ({})
const GET_PLAYERS = gql`
  {
    getPlayers {
      name
      diceResult {
        result
        selectedDice
      }
    }
    getGame {
      mod
    }
  }
`

const randomArrayElement = (myArray, seed) => {
  return myArray[Math.floor(seed * myArray.length)]
}
const getMod = data => {
  return data.getGame.mod
}
const getPlayer = (data, playerIndex) => {
  return data.getPlayers[playerIndex]
}
const getPlayerDice = (mods, selectedMod, player) => {
  const selectedDice = player.diceResult.selectedDice
  const PlayerDice = mods[selectedMod].dices[selectedDice]
  return PlayerDice
}
const getDiceResult = (PlayerDice, result) => {
  return randomArrayElement(PlayerDice.faces, result)
}

const PlayerList = ({ classes }) => (
  <List>
    <Query query={GET_PLAYERS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
        const selectedMod = getMod(data)
        return data.getPlayers.map((value, playerIndex) => {
          const player = getPlayer(data, playerIndex)
          const playerDice = getPlayerDice(mods, selectedMod, player)
          const playerDiceResult = getDiceResult(
            playerDice,
            player.diceResult.result
          )
          return (
            <ListItem key={playerIndex} button>
              <Avatar>I</Avatar>
              <ListItemText primary={`${player.name}`} />
              <ListItemSecondaryAction>
                <Avatar
                  src={playerDiceResult.image}
                  style={{ backgroundColor: playerDice.backgroundColor }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          )
        })
      }}
    </Query>
  </List>
)

export default withStyles(styles)(PlayerList)
