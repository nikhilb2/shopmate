import React from 'react'
import { withStyles } from '@material-ui/styles'
import Subscribe from '../components/subscribe'
import Typography from '@material-ui/core/Typography'
import theme from '../theme'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#eeefef',
    height: '20rem'
  },
  content: {
    margin: 'auto',
    width: '50%'
  },
  typo: {
    textAlign: 'center',
    color: theme.palette.secondary.main,
    marginBottom: '0.5rem'
  }
}

const SubsContainer = props => {
  const { classes } = props
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Typography className={classes.typo} style={{ fontSize: '1.2rem' }}>
          10% discount on your subscription
        </Typography>
        <Typography className={classes.typo} style={{ color: 'black' }}>
          Carry the day in style with this extra large tote crafted in our chic
          B.B. Collection textured PVC. Featuring colorful faux leather trim,
          this tote offers a roomy interior plus just enough perfectly placed.
        </Typography>
        <Subscribe />
      </div>
    </div>
  )
}

export default withStyles(styles)(SubsContainer)
