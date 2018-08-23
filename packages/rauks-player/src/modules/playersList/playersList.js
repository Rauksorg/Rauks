import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const styles = theme => ({})

const GET_PLAYERS = gql`
  {
    getPlayers {
      name
      diceResult {
        result
      }
    }
  }
`
// const rand = myArray[Math.floor(Math.random() * myArray.length)]

const PlayerList = ({ classes }) => (
  <List>
    <Query query={GET_PLAYERS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
        return data.getPlayers.map((value, index) => (
          <ListItem key={index} button>
            <Avatar>I</Avatar>
            <ListItemText
              primary={`${data.getPlayers[index].name} ${
                data.getPlayers[index].diceResult.result
              }`}
            />
            <ListItemSecondaryAction>
              <Avatar>I</Avatar>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      }}
    </Query>
  </List>
)

export default withStyles(styles)(PlayerList)
