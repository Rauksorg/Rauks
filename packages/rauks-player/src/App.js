import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './config/muiTheme'

import Books from './Books'

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
})

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={theme}>
        <Books />
      </MuiThemeProvider>
    </ApolloProvider>
  </React.Fragment>
)

export default App
