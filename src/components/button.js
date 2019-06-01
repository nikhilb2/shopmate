import React from 'react'
import Fab from '@material-ui/core/Fab'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import theme from '../theme'

const styles = {
  buttonPrimary: {
    padding: '.7rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    borderRadius: '2.5rem',
    textTransform: 'none'
  },
  buttonSecondary: {
    padding: '.7rem',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderRadius: '2.5rem',
    textTransform: 'none'
  },
  text: {
    textAlign: 'center',
    fontSize: '1.2rem'
  }
}
const ButtonComp = props => {
  const {
    classes,
    text,
    margin,
    button,
    width,
    fontSize,
    padding,
    onClick
  } = props
  return (
    <div>
      {button === 1 ? (
        <Button
          className={classes.buttonSecondary}
          style={{
            width: width ? width : '13rem',
            padding: padding ? padding : '0.7rem',
            margin: margin ? margin : 0
          }}
          variant="contained"
          color="secondary"
          onClick={onClick}
        >
          <Typography
            className={classes.text}
            style={{ fontSize: fontSize ? fontSize : '1.2rem' }}
          >
            {text}
          </Typography>
        </Button>
      ) : (
        <Button
          className={classes.buttonPrimary}
          style={{
            width: width ? width : '13rem',
            padding: padding ? padding : '0.7rem'
          }}
          onClick={onClick}
        >
          <Typography
            className={classes.text}
            style={{ fontSize: fontSize ? fontSize : '1.2rem' }}
          >
            {text}
          </Typography>
        </Button>
      )}
    </div>
  )
}

export default withStyles(styles)(ButtonComp)
