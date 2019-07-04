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
import ItemCardBig from '../components/itemCardBig'
import OrderStatus from './orderStatus'

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
      stripeChargeResponse,
      setStripe,
      selectColor,
      selectSize,
      selectedColor,
      selectedSize,
      selectDepartmentName,
      departments,
      getCategoriesByDepartment
    } = this.props
    //console.log('this.props on product page')
    //console.log(this.props)
    return (
      <div style={{ backgroundColor: '#F7F7F7' }}>
        <NavBarMen
          cartItems={newCartItems ? newCartItems : cartItems}
          totalItems={
            newTotalItems || newTotalItems === 0 ? newTotalItems : totalItems
          }
          amount={newAmount || newAmount === 0 ? newAmount : amount}
          bgcolor="#efefef"
          placeOrder={placeOrder}
          user={user}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          reduceQuantity={reduceQuantity}
          orderStatus={orderStatus}
          clearOrderStatus={clearOrderStatus}
        />
        <OrderStatus
          orderStatus={orderStatus}
          stripeChargeResponse={stripeChargeResponse}
          saveStripeToken={saveStripeToken}
          stripeCharge={stripeCharge}
          clearOrderStatus={clearOrderStatus}
          setStripe={setStripe}
        />
        <Hidden only={['sm', 'xs']} implementation="css">
          <NavigationBar
            categories={categories}
            clearProducts={clearProducts}
            selectDepartmentName={selectDepartmentName}
            departments={departments}
            getCategoriesByDepartment={getCategoriesByDepartment}
            selectDepartmentName={selectDepartmentName}
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
                  selectColor={selectColor}
                  selectSize={selectSize}
                  selectedColor={selectedColor}
                  selectedSize={selectedSize}
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
