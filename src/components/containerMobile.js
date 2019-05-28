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

const SimpleContainerMobile = props => {
  const { image, text, caption, classes, buttonText } = props
  return (
    <div>
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

export default withStyles(styles)(SimpleContainerMobile)