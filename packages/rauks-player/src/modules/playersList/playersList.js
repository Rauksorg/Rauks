import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Avatar from '@material-ui/core/Avatar'

const styles = theme => ({})

const PlayerList = () => (
  <List>
    {[0, 1, 2, 3].map(value => (
      <ListItem key={value} dense button className={classes.listItem}>
        <Avatar alt="Remy Sharp" src="/static/images/remy.jpg" />
        <ListItemText primary={`Line item ${value + 1}`} />
        <ListItemSecondaryAction>
          <Checkbox
            onChange={this.handleToggle(value)}
            checked={this.state.checked.indexOf(value) !== -1}
          />
        </ListItemSecondaryAction>
      </ListItem>
    ))}
  </List>
)

export default withStyles(styles)(PlayerList)
