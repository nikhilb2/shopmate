import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MainMenu from './menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import Router from 'next/router'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const NavBarMobile = props => {
  const classes = useStyles()
  const { back } = props
  const { categories } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div>
            {back ? (
              <Button onClick={() => Router.back()} color="primary">
                <img src="static/back.svg" alt="back" />{' '}
              </Button>
            ) : null}
          </div>
          <Link href="/">
            <div style={{ marginLeft: '2rem' }}>
              <img src="static/SHOPMATE.svg" alt="shopmate" />
            </div>
          </Link>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MainMenu color="secondary" menuItems={categories} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBarMobile
