import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

import theme from '../theme'




const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',

  },
  margin: {
    margin: theme.spacing(1),
        width: '30%',
    [`& fieldset`]: {
      borderRadius: 40,
},
  },
}));


function Subscribe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.margin}
          placeholder='Your e-mail here'
          variant="outlined"
          id="mui-theme-provider-outlined-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src='static/email.svg' alt='email' />
              </InputAdornment>
            ),
          }}

        />
      </ThemeProvider>
    </div>
  );
}

export default Subscribe
