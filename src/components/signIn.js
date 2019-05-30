import React from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ButtonComp from './button'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField';
import ButtomComp from './button'
const styles = {
  box: {
    display: 'flex',
    maxWidth:'40%',
    justifyContent:'center'

  }
}

const SignIn = (props) => {
  const { style, bgcolor, classes } = props
  return(
    <Box
      boxShadow={5}
      bgcolor={bgcolor ? bgcolor : '#FFFFFF'}
      m={1}
      p={1}
      style={style}
      className={classes.box}
    >
    <TextField
  id="outlined-email-input"
  label="Email"
  className={classes.textField}
  type="email"
  name="email"
  autoComplete="email"
  margin="normal"
  variant="outlined"
/>
<TextField
     id="outlined-password-input"
     label="Password"
     className={classes.textField}
     type="password"
     autoComplete="current-password"
     margin="normal"
     variant="outlined"
   />
   <ButtonComp button={1} style={{fontSize:'.5rem'}} text="Sign In"/>
    </Box>
  )
}

export default withStyles(styles)(SignIn)
