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
  }
}

const MenBanner = props => {
  const { image, text, caption, classes, buttonText } = props
  return (
    <div>
      <div
        className={classes.imageContainer}
        style={{ backgroundImage: `url(${image})` }}
      >
      </div>
    </div>
  )
}

export default withStyles(styles)(MenBanner)
