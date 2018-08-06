import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    flexGrow: 1
  }
}

const GET_BOOKS = gql`
  {
    getBooks {
      title
    }
  }
`

const Books = props => {
  const { classes } = props
  return (
    <Query query={GET_BOOKS}>
      {({ loading, error, data }) => {
        if (loading) return <p>{'Loading...'}</p>
        if (error) return <p>{`Error! ${error.message}`}</p>
        return (
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  {data.getBooks[0].title}
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
        )
      }}
    </Query>
  )
}

export default withStyles(styles)(Books)
