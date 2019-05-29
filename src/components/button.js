import React from 'react'
import Fab from '@material-ui/core/Fab'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import theme from '../theme'

const styles = {
  buttonPrimary: {
    padding: '.7rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    borderRadius: '2.5rem',
  },
  buttonSecondary: {
    padding: '.7rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderRadius: '2.5rem',
  },
  text: {
    textAlign: 'center',
    fontSize: '1.2rem'
  }
}
const ButtonComp = props => {
  const { classes, text, button, width, fontSize, padding } = props
  return (
    <div>
      {button === 1 ? (
        <div className={classes.buttonSecondary} style={{width: width ? width : '13rem', padding: padding ? padding : '0.7rem'}}>
          <Typography className={classes.text} style={{fontSize: fontSize ? fontSize : '1.2rem'}}>{text}</Typography>
        </div>
      ) : (
        <div className={classes.buttonPrimary} style={{width: width ? width : '13rem', padding: padding ? padding : '0.7rem'}}>
          <Typography className={classes.text} style={{fontSize: fontSize ? fontSize : '1.2rem'}}>{text}</Typography>
        </div>
      )}
    </div>
  )
}

export default withStyles(styles)(ButtonComp)
