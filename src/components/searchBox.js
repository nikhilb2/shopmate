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
    backgroundColor:'gray',
    borderRadius: 40,
  },
  margin: {
    [`& fieldset`]: {
      borderRadius: 40,
    },
    [`& input`]: {
      padding: '.5rem',
      color:'white'  }
  }
}))

function Subscribe() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          color='primary'
          placeholder="Search"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search color='primary'/>
              </InputAdornment>
            )
          }}
        />
      </ThemeProvider>
    </div>
  )
}

export default Subscribe
