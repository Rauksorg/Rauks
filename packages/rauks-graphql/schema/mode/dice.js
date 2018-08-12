const dice = gql`
  type Dice {
    name: String
    description: String
    image: String
    backgroundColor: String
    color: String
    faces: [Face]
    min: Int
    max: Int
  }
  type Face {
    name: String
    description: String
    image: String
  }
`
export default dice
