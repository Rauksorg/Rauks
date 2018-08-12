const character = gql`
  type Character {
    stats: [Stat]
    derivedStats: [DerivedStat]
  }
  type Stat {
    name: String
    description: String
    skill: [Skills]
    min:Int
    max:Int
  }
  type Skills {
    baseName: String
    baseDescription: String
    advanceName: String
    advanceDescription: String
  }
  type DerivedStat {
    name: String
    description: String
    formula: String
  }
`
export default character