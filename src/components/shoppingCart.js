import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ButtonComp from './button'
import { decoratedImageUrl } from '../utils/request'
import ItemCardBig from './itemCardBig'
import ProductReivews from './productReviews'
import AddReview from './addReview'
import CartItems from './shoppingCartItems.js'
import Button from '@material-ui/core/Button'
import Close from '@material-ui/icons/Close'
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
    newProductReviews: null
  }

  render() {
    const { classes, bgcolor, cartItems, closePopover, countItems } = this.props

    const { newProductReviews } = this.state
    //console.log('productDetails')
    //console.log(productReviews)
    return (
      <Box
        boxShadow={0}
        bgcolor={bgcolor ? bgcolor : '#FFFFFF'}
        m={0}
        p={1}
        className={classes.box}
      >
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
          <CartItems cartItems={cartItems} />
        </div>
        <div className={classes.bottomButtons}>
          <ButtonComp text="Back to Shop" />
          <ButtonComp text="Checkout" button={1} />
        </div>
      </Box>
    )
  }
}

export default withStyles(styles)(ShoppingCart)
