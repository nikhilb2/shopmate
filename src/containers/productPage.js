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
import { saveCartId } from '../utils/auth'
import Hidden from '@material-ui/core/Hidden'
const styles = {
  center: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}
class ProductPage extends Component {
  state = {
    newCartItems:null,
    newtotalItems:null
  }


  async createCartId() {
    const newCartId = await fetchRequest('shoppingcart/generateUniqueId',{
      method: 'GET'
    })
    saveCartId(newCartId.cart_id)
    this.setState({cartId:newCartId.cart_id})
    return newCartId.cart_id
  }

  async getCartItems(cartId) {
    const cartItems = await fetchRequest(decoratedUrl(`shoppingcart/${user.cartId}`))
    if (cartItems.length > 0 ) {
      let totalItems = 0
      cartItems.forEach(item=>{
        totalItems = totalItems + item.quantity
      })
      this.setState({newTotalItems: totalItems, newCartItems:cartItems})
    }
  }

  async addToCart(productId) {
    const { user } = this.props
    console.log(this.props);
    let addToCartResult = null
    console.log(productId);
    if ( user.cartId ) {
      const addToCartResult = await fetchRequest('shoppingcart/add', {
        method: 'POST',
        body: JSON.stringify({cart_id: user.cartId, product_id: productId, attributes:'none'})
      })
      if ( addToCartResult.length > 0 ) {
        let totalItems = 0
        addToCartResult.forEach(item=>{
          totalItems = totalItems + item.quantity
        })
        this.setState({newTotalItems: totalItems, newCartItems:addToCartResult})
      }
    } else {
      const newCartId = await this.createCartId()
      const addToCartResult = await fetchRequest('shoppingcart/add', {
        method: 'POST',
        body: JSON.stringify({cart_id: newCartId, product_id: productId, attributes:'none'})
      })
      if ( addToCartResult.length > 0 ) {
        let totalItems = 0
        addToCartResult.forEach(item=>{
          totalItems = totalItems + item.quantity
        })
        this.setState({newTotalItems: totalItems, newCartItems:addToCartResult})
      }

    }

  }

  render() {
    const { classes, productDetails, productReviews, totalItems } = this.props
    const { newTotalItems, newCartItems } = this.state
    console.log(this.props);
    return (
      <div style={{ backgroundColor: '#F7F7F7' }}>
        <Hidden only={['sm', 'xs']} implementation="css">
          <NavBarMen totalItems={newTotalItems ? newTotalItems : totalItems} bgcolor="#efefef" />
          <NavigationBar />
        </Hidden>
        <Hidden only={['lg', 'md']} implementation="css">
          <NavBarMobile />
        </Hidden>
        <Hidden only={['xs']} implementation="css">
          <div className={classes.center}>
            <Grid container spacing={0}>
              <Grid item xs={12}>
                <ItemDetailCard
                  showProducts={true}
                  productDetails={productDetails}
                  productReviews={productReviews}
                  addToCart={(productId) => this.addToCart(productId)}
                />
              </Grid>
              <Grid item xs={12}>
                <ItemDetailCard productDetails={productDetails} productReviews={productReviews} />
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
