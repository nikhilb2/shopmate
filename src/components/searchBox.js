import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search'

import ButtonComp from './button'
import theme from '../theme'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderRadius: 40
  },
  margin: {
    [`& fieldset`]: {
      borderRadius: 40
    },
    [`& input`]: {
      padding: '.5rem',
      color: 'white'
    }
  }
}

class SearchBox extends Component {
  render() {
    const { classes, onChange } = this.props
    return (
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            color="primary"
            placeholder="Search"
            variant="outlined"
            onChange={e => onChange(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="primary" />
                </InputAdornment>
              )
            }}
          />
        </ThemeProvider>
      </div>
    )
  }
}

export default withStyles(styles)(SearchBox)
