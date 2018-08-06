const { ApolloServer, gql, MockList } = require('apollo-server')
const casual = require('casual')

const typeDefs = gql`
  type Book {
    title: String
    author: Author
  }
  type Author {
    name: String
    books: [Book]
  }
  type Query {
    getBooks: [Book]
    getAuthors: [Author]
  }
`
const mocks = {
  Book: () => ({
    title: casual.title
  }),
  Author: () => ({
    name: casual.name,
    books: () => new MockList([2, 6])
  }),
  Query: () => ({
    getAuthors: () => new MockList([2, 6]),
    getBooks: () => new MockList([2, 6])
  })
}
const server = new ApolloServer({ typeDefs, mocks })

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
