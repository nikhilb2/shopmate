import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import ButtonComp from './button'
import theme from '../theme'
import { withStyles } from '@material-ui/styles'

const styles = {}

class SignIn extends Component {
  state = {
    email: null,
    password: null
  }
  render() {
    const { style, bgcolor, classes, signin, error } = this.props
    return (
      <Box
        boxShadow={5}
        bgcolor={bgcolor ? bgcolor : '#FFFFFF'}
        m={1}
        p={1}
        style={style}
        className={classes.box}
      >
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="static/SHOPMATE.svg" alt="shopmate" />
        </div>
        <div>
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            onChange={e => this.setState({ email: e.target.value })}
          />
        </div>
        <div>
          <TextField
            id="outlined-password-input"
            label="Password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            margin="normal"
            variant="outlined"
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ButtonComp
            button={1}
            fontSize=".8rem"
            width="7rem"
            padding="0.5rem"
            text="Sign In"
            onClick={() => signin(this.state)}
          />
        </div>
        {error ? error.error.message : null}
      </Box>
    )
  }
}

export default withStyles(styles)(SignIn)
