import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SocialIcons from '../components/socialIcons'

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

const Footer2 = () => {
  const classes = useStyles()

  return (
    <div
      style={{
        backgroundColor: '#2E2E2E',
        height: '241px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Typography style={{ marginRight: '4rem' }} color="primary">
          Home
        </Typography>
        <Typography style={{ marginRight: '4rem' }} color="primary">
          Categories
        </Typography>
        <Typography style={{ marginRight: '4rem' }} color="primary">
          Kids
        </Typography>
        <Typography style={{ marginRight: '4rem' }} color="primary">
          Shoes
        </Typography>
        <Typography style={{ marginRight: '4rem' }} color="primary">
          Brands
        </Typography>
      </div>
      <div
        style={{
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: '1rem'
        }}
      >
        <SocialIcons />
      </div>
      <div
        style={{
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: '1rem'
        }}
      >
        <Typography style={{ fontSize: '0.9rem', color: '#6C6C6C' }}>
          ©2019 shopmate Ltd • Contact • Privacy Policy
        </Typography>
      </div>
    </div>
  )
}

export default Footer2
