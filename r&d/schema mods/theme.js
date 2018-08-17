const theme = gql`
  type theme {
    name: String
    description: String
    system: String
    language: String
    primaryColor:String
    secondaryColor:String
  }
`
export default theme
