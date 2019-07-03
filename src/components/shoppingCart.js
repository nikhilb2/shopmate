import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ButtonComp from './button'
import { decoratedImageUrl, fetchRequest } from '../utils/request'
import { removeCartId } from '../utils/auth'
import ItemCardBig from './itemCardBig'
import ProductReivews from './productReviews'
import AddReview from './addReview'
import CartItems from './shoppingCartItems.js'
import Button from '@material-ui/core/Button'
import Close from '@material-ui/icons/Close'
import UserLogin from './userLogin'
const styles = {
  justifyCol: {
    display: 'flex',
    flexDirection: 'column'
  },
  justifyRow: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-between'
  },
  box: {
    maxWidth: '940px',
    maxHeight: '1000px',
    display: 'block',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 0
  },
  bottomButtons: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#EFEFEF',
    padding: '1rem'
  },
  textTop: {
    color: '#E5E5E5'
  },
  imageThumbHolder: {
    width: '96px',
    height: '96px'
  },
  nameAndImage: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-start'
  }
}

class ShoppingCart extends Component {
  state = {
    newProductReviews: null,
    checkOutWithoutUser: false
  }

  toggleCheckOutWithoutUser() {
    this.setState({ checkOutWithoutUser: false })
  }

  render() {
    const {
      classes,
      bgcolor,
      cartItems,
      closePopover,
      countItems,
      placeOrder,
      user,
      addToCart,
      removeFromCart,
      reduceQuantity,
      orderStatus,
      clearOrderStatus,
      registerUser,
      signInUser,
      toggleCheckOutWithoutUser,
      checkOutWithoutUser,
      amount
    } = this.props

    //console.log('user')
    //console.log(this.props)
    return (
      <Box
        boxShadow={0}
        bgcolor={bgcolor ? bgcolor : '#FFFFFF'}
        m={0}
        p={1}
        className={classes.box}
      >
        {checkOutWithoutUser ? (
          <Box
            bgcolor="#eeefef"
            color="text.primary"
            boxShadow={4}
            p={2}
            position="fixed"
            top={0}
            left="35%"
            zIndex="modal"
            style={{
              top: '30%',
              width: '50%'
            }}
          >
            <Typography variant="h5" style={{ textAlign: 'center' }}>
              Please Signin then checkout
            </Typography>
            <UserLogin registerUser={registerUser} signInUser={signInUser} />
          </Box>
        ) : null}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            size="medium"
            onClick={() => closePopover()}
            className={classes.margin}
          >
            <Close />
          </Button>
        </div>
        <div className={classes.justifyCol}>
          <div>
            <Typography
              variant="h5"
              style={{ textAlign: 'left', marginLeft: '1rem' }}
            >
              {countItems} Items In Your Cart
            </Typography>
          </div>
          {cartItems ? (
            <CartItems
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cartItems={cartItems}
              reduceQuantity={reduceQuantity}
            />
          ) : null}
          <Typography style={{ textAlign: 'right' }} variant="h5">
            Total: {amount}
          </Typography>
        </div>
        <div className={classes.bottomButtons}>
          <ButtonComp
            text="Back to Shop"
            width="fit-content"
            onClick={() => closePopover()}
          />
          <ButtonComp
            width="fit-content"
            text="Checkout"
            onClick={() => {
              if (user) {
                placeOrder()
                closePopover()
              } else {
                toggleCheckOutWithoutUser()
              }
            }}
            button={1}
          />
        </div>
      </Box>
    )
  }
}

export default withStyles(styles)(ShoppingCart)
