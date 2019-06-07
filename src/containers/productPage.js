import React, { Component } from 'react'
import NavBarMen from '../components/navBarMen'
import NavigationBar from '../components/navBar'
import NavBarMobile from '../components/navBarMobile'
import SocialIcons from '../components/socialIcons'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Footer2 from '../components/footer2'
import ItemDetailCard from '../components/itemDetailCard'
import Grid from '@material-ui/core/Grid'
import { fetchRequest } from '../utils/request'
import { saveCartId, removeCartId } from '../utils/auth'
import Hidden from '@material-ui/core/Hidden'
import Box from '@material-ui/core/Box'
import ButtonComp from '../components/button'
import ItemCardBig from '../components/itemCardBig'
import PaymentForm from '../components/paymentForm'

const styles = {
  center: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}
class ProductPage extends Component {
  render() {
    const {
      classes,
      productDetails,
      productReviews,
      totalItems,
      amount,
      cartItems,
      user,
      categories,
      newTotalItems,
      newCartItems,
      newAmount,
      orderStatus,
      quantity,
      addToCart,
      adjustQuantity,
      getCartItems,
      noOfItemToCart,
      placeOrder,
      removeFromCart,
      reduceQuantity,
      clearProducts,
      clearOrderStatus,
      stripeToken,
      saveStripeToken,
      stripeCharge,
      stripeChargeResponse
    } = this.props
    //console.log(this.props)
    return (
      <div style={{ backgroundColor: '#F7F7F7' }}>
        <NavBarMen
          cartItems={newCartItems ? newCartItems : cartItems}
          totalItems={
            newTotalItems || newTotalItems === 0 ? newTotalItems : totalItems
          }
          amount={newAmount ? newAmount : amount}
          bgcolor="#efefef"
          placeOrder={placeOrder}
          user={user}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          reduceQuantity={reduceQuantity}
          orderStatus={orderStatus}
          clearOrderStatus={clearOrderStatus}
        />
        {orderStatus ? (
          stripeChargeResponse ? (
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
                {stripeChargeResponse.status}
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                Amount: £{stripeChargeResponse.amount / 100}
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'center' }}>
                Reciept:{' '}
                <a
                  href={stripeChargeResponse.receipt_url}
                  alt="Reciept"
                  target="_blank"
                >
                  click to open
                </a>
              </Typography>
              <div>
                <ButtonComp
                  fontSize="1rem"
                  width="3rem"
                  text="Ok"
                  onClick={clearOrderStatus}
                  button={1}
                />
              </div>
            </Box>
          ) : (
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
                Payment details
              </Typography>
              <PaymentForm
                saveStripeToken={saveStripeToken}
                stripeCharge={stripeCharge}
              />
              <ButtonComp
                fontSize="1rem"
                width="3rem"
                text="Cancel"
                onClick={clearOrderStatus}
                button={1}
              />
            </Box>
          )
        ) : null}
        <Hidden only={['sm', 'xs']} implementation="css">
          <NavigationBar
            categories={categories}
            clearProducts={clearProducts}
          />
        </Hidden>
        <Hidden only={['lg', 'md']} implementation="css">
          <NavBarMobile back={true} />
          <ItemCardBig
            showProducts={true}
            productDetails={productDetails}
            productReviews={productReviews}
            addToCart={productId => noOfItemToCart(productId)}
            user={user}
            mobile={true}
            quantity={quantity}
            adjustQuantity={number => adjustQuantity(number)}
          />
        </Hidden>
        <Hidden only={['xs']} implementation="css">
          <div className={classes.center}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <ItemDetailCard
                  showProducts={true}
                  productDetails={productDetails}
                  productReviews={productReviews}
                  addToCart={productId => noOfItemToCart(productId)}
                  user={user}
                  quantity={quantity}
                  adjustQuantity={number => adjustQuantity(number)}
                />
              </Grid>
              <Grid item xs={12}>
                <ItemDetailCard
                  productDetails={productDetails}
                  productReviews={productReviews}
                  user={user}
                />
              </Grid>
            </Grid>
          </div>
          <Footer2 />
        </Hidden>
        <Hidden only={['xl', 'sm', 'md', 'lg']} implementation="css" />
      </div>
    )
  }
}

export default withStyles(styles)(ProductPage)
