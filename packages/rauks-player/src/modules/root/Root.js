import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { PlayerList } from '../'
import { AppBar } from '../'

const styles = {
  root: {
    flexGrow: 1
  }
}

const Root = ({ classes }) => (
  <div className={classes.root}>
    <AppBar />
    <PlayerList />
  </div>
)

export default withStyles(styles)(Root)
