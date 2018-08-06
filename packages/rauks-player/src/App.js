import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import CssBaseline from '@material-ui/core/CssBaseline';

import Books from './Books';

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <ApolloProvider client={client}>
      <Books />
    </ApolloProvider>
  </React.Fragment>

)

export default App;
