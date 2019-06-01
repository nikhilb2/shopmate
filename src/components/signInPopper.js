import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import ButtonComp from './button'
import theme from '../theme'
import SignIn from './signIn'
import Register from './register'
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
  const { type, text, register, error, signin } = props
  return (
    <div>
      <Button
        style={{
          color: theme.palette.secondary.main,
          textTransform: 'none',
          padding: 1,
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
            <Register error={error} register={register} />
          ) : (
            <SignIn error={error} signin={signin} />
          )}
        </div>
      </Popover>
    </div>
  )
}

export default SignInPop
