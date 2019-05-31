import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import theme from '../theme'
import SearchBox from './searchBox'
import Work from '@material-ui/icons/WorkOutlineRounded'
import SignIn from './signIn'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    shodow: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  navRightButtons: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '1rem'
  }
}))

const NavBarMen = props => {
  const classes = useStyles()
  const { bgcolor, color, searchBox } = props
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundColor: bgcolor ? bgcolor : theme.palette.primary.main,
          color: color ? color : 'black',
          height: '50px'
        }}
        elevation={0}
      >
        <Toolbar>
          <Typography style={{ display: 'flex' }}>
            <Typography>Hi</Typography>
            <SignIn text="Sign In" />
            <Typography>or</Typography>

            <SignIn text="Register" type="register" />
          </Typography>
          <div className={classes.menu}>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              className={classes.title}
            >
              Daily Deals
            </Typography>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              className={classes.title}
            >
              Sell
            </Typography>
            <Typography
              variant="subtitle1"
              display="block"
              gutterBottom
              className={classes.title}
            >
              Help & Contact
            </Typography>

            <div style={{ display: 'flex' }}>
              <img src="static/gbr.svg" alt="gb" />
              <Typography style={{ marginTop: '5px', margin: '0.5rem' }}>
                £ GBP
              </Typography>
            </div>
          </div>
          <Work style={{ margin: '1rem' }} />
          <Typography>Your Bag: £0</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBarMen
