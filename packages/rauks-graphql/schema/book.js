const { gql, MockList } = require('apollo-server')
const casual = require('casual').fr_FR

exports.Book = gql`
  type Book {
    title: String
    author: Author
  }
  type Author {
    name: String
    books: [Book]
  }
  extend type Query {
    getBooks: [Book]
    getAuthors: [Author]
  }
`

exports.bookMocks = {
  Book: () => ({
    title: casual.title
  }),
  Author: () => ({
    name: casual.full_name,
    books: () => new MockList([2, 6])
  }),
  Query: () => ({
    getAuthors: () => new MockList([2, 6]),
    getBooks: () => new MockList([2, 6])
  })
}
