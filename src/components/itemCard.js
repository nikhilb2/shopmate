import React from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'

import ButtonComp from './button'

const styles = {
  box: {
    width: '220px',
    height: '336px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: '2.5rem'
  }
}

const ItemCard = props => {
  const { classes, title } = props
  return (
    <Box
      boxShadow={0}
      bgcolor='primary'
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
      <ButtonComp
        fontSize=".8rem"
        width="7rem"
        padding="0.5rem"
        text="Buy now"
        button={1}
      />
    </Box>
  )
}

export default withStyles(styles)(ItemCard)
