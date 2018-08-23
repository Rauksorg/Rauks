import { createMuiTheme } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import lightBlue from '@material-ui/core/colors/lightBlue'

const theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: grey[900]
    },
    secondary: {
      main: lightBlue[900]
    }
  }
})

export default theme
