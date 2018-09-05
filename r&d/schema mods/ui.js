const ui = gql`
  type Ui {
    gm: Info
    player: Info
    playerList: Info
  }
  type Info {
    name: Int
    description: Int
    image: Int
  }
`
// TEST autofetch
