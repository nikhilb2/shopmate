import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import ButtonComp from './button'
import theme from '../theme'
const SignIn = props => {
  const { style, bgcolor, classes } = props
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
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonComp
          button={1}
          fontSize=".8rem"
          width="7rem"
          padding="0.5rem"
          text="Sign In"
        />
      </div>
    </Box>
  )
}
const Register = props => {
  const { style, bgcolor, classes } = props
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
          type="text"
          name="name"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-email-input"
          label="name"
          className={classes.textField}
          type="text"
          name="name"
          autoComplete="email"
          margin="normal"
          variant="outlined"
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
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ButtonComp
          button={1}
          fontSize=".8rem"
          width="7rem"
          padding="0.5rem"
          text="Sign In"
        />
      </div>
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}))

const SignInPop = props => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : null
  const { type, text } = props
  return (
    <div>
      <Button
        style={{
          color: theme.palette.secondary.main,
          textTransform: 'none',
          padding: 0,
          margin: 0
        }}
        onClick={handleClick}
      >
        {text}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <div>
          {type === 'register' ? (
            <Register classes={classes} />
          ) : (
            <SignIn classes={classes} />
          )}
        </div>
      </Popover>
    </div>
  )
}

export default SignInPop
