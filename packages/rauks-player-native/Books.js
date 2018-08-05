import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_BOOKS = gql`
  {
    getBooks {
      title
    }
  }
`;

const Books = () => (
  <Query query={GET_BOOKS}>
    {({ loading, error, data }) => {
      if (loading) return <Text> {'Loading...'} </Text>
      if (error) return <Text> {`Error! ${error.message}`} </Text>
      return (
        <View style={styles.container}>
          <Text> {data.getBooks[0].title} </Text>
        </View>
      )
    }}
  </Query>
)

const styles = StyleSheet.create({
  outer: { paddingTop: 32, paddingLeft: 10, paddingRight: 10 },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Books;
