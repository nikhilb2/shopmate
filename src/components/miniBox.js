import React from 'react'
import { withStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const styles = {
  box: {
    width: '18.75rem',
    height: '19.5rem',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: '2.5rem'
  }
}

const MiniBox = props => {
  const { bCol, style, classes, title, caption, color, colorCaption } = props
  return (
    <Box
      boxShadow={0}
      bgcolor={bCol}
      m={1}
      p={1}
      style={style}
      className={classes.box}
    >
      <Typography
        variant="body1"
        style={{ color: color ? color : 'black' }}
        className={classes.title}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        style={{
          color: colorCaption ? colorCaption : 'black',
          width: '6rem',
          marginRight: 'auto',
          marginLeft: 'auto'
        }}
      >
        {caption}
      </Typography>
    </Box>
  )
}

export default withStyles(styles)(MiniBox)
