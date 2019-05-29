import React from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import ButtonComp from './button'

const styles = {
  root: {},
  imageContainer: {
    maxWidth: '940px',
    marginLeft:'auto',
    marginRight: 'auto',
    margin:'2rem',
    height: '336px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  },
  heading: {
    position: 'absolute',
    margin: '4rem',
    marginTop: '3rem',
    width: '50%'
  },
}

const MenBanner = props => {
  const { image, text, caption, classes, buttonText } = props
  return (
    <div>
      <div
        className={classes.imageContainer}
        style={{ backgroundImage: `url(${image})` }}
      >
      <Typography className={classes.heading} variant="h4">
        {text}
      </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(MenBanner)
