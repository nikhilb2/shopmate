import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    height: '15rem'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '4rem'
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '1rem'
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography className={classes.title}>QUESTIONS?</Typography>
        <Typography>Help</Typography>
        <Typography>Track Orders</Typography>
        <Typography>Returns</Typography>
      </div>
      <div className={classes.content}>
        <Typography className={classes.title}>WHAT'S IN STORE</Typography>
        <Typography>Women</Typography>
        <Typography>Men</Typography>
        <Typography>Product A-Z</Typography>
        <Typography>Buy Gift Vouchers</Typography>
      </div>
      <div className={classes.content}>
        <Typography className={classes.title}>FOLLOW US</Typography>
        <Typography>Facebook</Typography>
        <Typography>Twitter</Typography>
        <Typography>YouTube</Typography>
      </div>
      <div className={classes.content}>
        <Typography>©2019 shopmate Ltd</Typography>
      </div>
    </div>
  )
}

export default Footer
