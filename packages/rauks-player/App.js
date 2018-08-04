import React from 'react';
import ApolloClient from "apollo-boost";
import Books from './Books';

const client = new ApolloClient({
  uri: "http://192.168.10.21:4000/"
});

import { ApolloProvider } from "react-apollo";

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Books />
      </ApolloProvider>
    );
  }
  }
