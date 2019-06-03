import React from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ButtonComp from './button'

const styles = {
  root: {
    padding: '1rem'
  },
  container: {
    width: '100%',
    height: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
  heading: {
    position: 'absolute',
    color: 'white',
    marginTop: '9rem',
    marginLeft: '2rem',
    width: '100%'
  },
  caption: {
    position: 'absolute',
    color: 'white',
    marginTop: '13rem',
    marginLeft: '2rem',
    width: '100%'
  },
  button: {
    position: 'absolute',
    color: 'white',
    margin: '2rem',
    marginTop: '28rem',
    fontSize: '2rem',
    left: 0
  }
}

const BannerMobileMini = props => {
  const { bgcolor, text, caption, classes, buttonText } = props
  return (
    <div className={classes.root}>
      <div
        className={classes.container}
        style={{ backgroundColor: bgcolor }}
      >
        <Typography className={classes.heading} variant="h2">
          {text}
        </Typography>
        <Typography className={classes.caption} variant="body1">
          {caption}
        </Typography>
        <div className={classes.button}>
          <ButtonComp text={buttonText} />
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(BannerMobileMini)
