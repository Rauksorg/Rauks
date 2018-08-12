const typeDefs = gql`
  type Character {
    stats: [Stat]
  }
  type Stat {
    name: String
    description: String
    skill: [Skills]
  }
  type Skills {
    baseName: String
    baseDescription: String
    advanceName: String
    advanceDescription: String
  }
`
