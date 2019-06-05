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
    marginTop: '6rem',
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
    margin: '0'
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
        <div className={classes.heading}>
          <Typography variant="h2">{text}</Typography>
          <Typography variant="body1">{caption}</Typography>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '1rem', marginLeft: '1rem' }}>
        <ButtonComp text={buttonText} />
      </div>
    </div>
  )
}

export default withStyles(styles)(BannerMobile)
