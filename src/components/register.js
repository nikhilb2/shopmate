import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import ButtonComp from './button'
import theme from '../theme'
import { withStyles } from '@material-ui/styles'
import { decoratedUrl, decoratedOptions } from '../utils/request'
import { saveAuth, saveUserDetails, getUserDetails } from '../utils/auth'
const styles = {}
class Register extends Component {
  state = {
    name: null,
    email: null,
    password: null
  }

  render() {
    const { style, bgcolor, classes, register, error } = this.props
    const { result } = this.state
    //console.log(this.props)
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
            label="Name"
            className={classes.textField}
            type="text"
            name="name"
            margin="normal"
            variant="outlined"
            onChange={e => this.setState({ name: e.target.value })}
          />
        </div>
        <div>
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
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
            text="Register"
            onClick={() => register(this.state)}
          />
        </div>
        <div>{error ? error.error.message : null}</div>
      </Box>
    )
  }
}

export default withStyles(styles)(Register)
