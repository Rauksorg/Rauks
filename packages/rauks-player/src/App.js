import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './config/muiTheme'

import { AppliBar, PlayersList } from './modules'

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
})

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <AppliBar />
        <PlayersList />
      </MuiThemeProvider>
    </ApolloProvider>
  </React.Fragment>
)

export default App
