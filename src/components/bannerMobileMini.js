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
    textAlign: 'center'
  }
}

const BannerMobileMini = props => {
  const { bgcolor, text, caption, classes, color } = props
  return (
    <div className={classes.root}>
      <div className={classes.container} style={{ backgroundColor: bgcolor }}>
        <Typography
          className={classes.heading}
          style={{ color: color ? color : 'white' }}
          variant="h2"
        >
          {text}
        </Typography>
        <Typography
          className={classes.caption}
          style={{ color: color ? color : 'white' }}
          variant="body1"
        >
          {caption}
        </Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(BannerMobileMini)
