import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
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
import UserLogin from './userLogin'
import ShoppingCartPopper from './shoppingCartPopper'
import {
  saveAuth,
  saveUserDetails,
  getUserDetails,
  logout
} from '../utils/auth'
import { decoratedUrl, decoratedOptions, fetchRequest } from '../utils/request'
import ButtonComp from './button'
const styles = {
  root: {
    flexGrow: 1
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
    marginRight: '1.1rem'
  }
}

class NavBarMen extends Component {
  state = {
    newUser: null,
    error: null
  }

  workIcon() {
    return <Work />
  }

  async registerUser(data) {
    const result = await fetchRequest('customers', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    //console.log('result')
    //console.log(result)
    if (!result.error) {
      this.setState({ newUser: result.customer })
      saveAuth(result.accessToken)
      saveUserDetails(result.customer)
    } else {
      this.setState({ error: result })
    }
  }

  async signInUser(data) {
    const result = await fetchRequest('customers/login', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    //console.log('result')
    //console.log(result)
    if (!result.error) {
      this.setState({ newUser: result.customer })
      saveAuth(result.accessToken)
      saveUserDetails(result.customer)
    } else {
      this.setState({ error: result })
    }
  }

  logOutUser() {
    logout()
    this.setState({ newUser: null })
    window.location.reload()
  }

  render() {
    const {
      bgcolor,
      color,
      searchBox,
      classes,
      totalItems,
      cartItems,
      amount,
      placeOrder,
      user
    } = this.props

    const { error, newUser } = this.state
    console.log(this.props)
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
            <UserLogin
              registerUser={data => this.registerUser(data)}
              signInUser={data => this.signInUser(data)}
              error={error}
              logOutUser={() => this.logOutUser()}
              user={newUser ? newUser : user && user.user ? user.user : null}
            />
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
            <ShoppingCartPopper
              cartItems={cartItems}
              text={this.workIcon()}
              countItems={totalItems}
              placeOrder={placeOrder}
              user={newUser ? newUser : user && user.user ? user && user.user : null}
            />
            <Typography>
              Your Bag: {amount ? `£${Math.round(amount * 100) / 100}` : 0}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(styles)(NavBarMen)
