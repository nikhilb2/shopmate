import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search'

import ButtonComp from './button'
import theme from '../theme'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '15rem'
  },
  margin: {
    margin: '.5rem'
  }
}))

const SocialIcons = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <img className={classes.margin} src="static/insta.svg" alt="insta" />
      <img className={classes.margin} src="static/pin.svg" alt="pin" />
      <img className={classes.margin} src="static/twit.svg" alt="twit" />
      <img className={classes.margin} src="static/fb.svg" alt="fb" />
    </div>
  )
}

export default SocialIcons
