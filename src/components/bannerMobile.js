import React from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ButtonComp from './button'

const styles = {
  root: {},
  imageContainer: {
    width: '100%',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  },
  heading: {
    position: 'absolute',
    color: 'white',
    margin: '2rem',
    top: '6rem',
    left: 0
  },
  caption: {
    position: 'absolute',
    color: 'white',
    margin: '2rem',
    top: '10rem',
    left: 0
  },
  button: {
    position: 'absolute',
    color: 'white',
    marginBottom: '-2rem',
    margin: '2rem',
    bottom: '0',
    fontSize: '2rem',
    left: 0
  }
}

const BannerMobile = props => {
  const { image, text, caption, classes, buttonText } = props
  return (
    <div style={{ padding: '1rem' }}>
      <div
        className={classes.imageContainer}
        style={{ backgroundImage: `url(${image})` }}
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

export default withStyles(styles)(BannerMobile)
