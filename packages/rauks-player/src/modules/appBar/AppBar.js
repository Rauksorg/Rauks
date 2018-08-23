import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const GET_GAME = gql`
  {
    getGame {
      title
      mode
    }
  }
`

const styles = {}

const Books = ({ classes }) => (
  <Query query={GET_GAME}>
    {({ loading, error, data }) => {
      return (
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              {(() => {
                if (loading) return 'Loading...'
                if (error) return `Error! ${error.message}`
                return data.getGame.title
              })()}
            </Typography>
          </Toolbar>
        </AppBar>
      )
    }}
  </Query>
)

export default withStyles(styles)(Books)
