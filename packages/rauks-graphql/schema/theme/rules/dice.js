const typeDefs2 = gql`
  type Dice {
    name: String
    description: String
    backgroundColor: String
    color: String
    faces: [Face]
    minNumber:Int
    maxNumber:Int
  }
  type Face {
    name: String
    description: String
    image: String
  }
`
