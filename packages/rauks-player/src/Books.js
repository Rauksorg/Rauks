import React from 'react';
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
      if (loading) return <p>{'Loading...'}</p>
      if (error) return <p>{`Error! ${error.message}`}</p>
      return <p>{data.getBooks[0].title}</p>
    }}
  </Query>
)

export default Books;
