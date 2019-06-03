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
    margin: '9rem',
    top: '3.6rem',
    left: 0,
    lineHeight: '6rem',
    width: '50%'
  },
  caption: {
    fontSize: '2rem',
    marginTop: '2rem'
  },
  button: {
    fontSize: '2rem',
    marginTop: '2rem'
  }
}

const Banner = props => {
  const { image, text, caption, classes, buttonText } = props
  return (
    <div>
      <div
        className={classes.imageContainer}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={classes.heading}>
          <Typography
            style={{ wordSpacing: '4rem', lineHeight: '6rem' }}
            variant="h2"
          >
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
    </div>
  )
}

export default withStyles(styles)(Banner)
