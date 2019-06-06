import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import { fetchRequest, fetchRequestWithoutResponse } from '../src/utils/request'
import { getUserDetails, getCartId, getServerUser } from '../src/utils/auth'

const user = { user: getUserDetails(), cartId: getCartId() }

class MyApp extends App {
  state = {
    newCartItems: null,
    newtotalItems: null,
    newAmount: null,
    orderStatus: null,
    quantity: 1
  }
  async placeOrder() {
    const orderStatus = await fetchRequest('orders', {
      method: 'POST',
      body: JSON.stringify({ cart_id: user.cartId, shipping_id: 4, tax_id: 2 })
    })
    this.setState({
      orderStatus,
      newTotalItems: null,
      newAmount: null,
      newCartItems: null
    })
    //console.log(orderStatus)
    removeCartId()
  }

  async createCartId() {
    const newCartId = await fetchRequest('shoppingcart/generateUniqueId', {
      method: 'GET'
    })
    saveCartId(newCartId.cart_id)
    this.setState({ cartId: newCartId.cart_id })
    return newCartId.cart_id
  }

  async getCartItems(cartId) {
    const cartItems = await fetchRequest(`shoppingcart/${user.cartId}`, {
      method: 'GET'
    })
    let totalItems = 0
    const letIterate = await cartItems.forEach(item => {
      totalItems = totalItems + item.quantity
    })
    this.setState({ newTotalItems: totalItems, newCartItems: cartItems })
  }

  async addToCart(productId) {
    let addToCartResult = null
    //if there's a cartId stored in cookies
    if (user.cartId) {
      const addToCartResult = await fetchRequest('shoppingcart/add', {
        method: 'POST',
        body: JSON.stringify({
          cart_id: user.cartId,
          product_id: productId,
          attributes: 'none'
        })
      })
      // calculate total items in cart and total amount
      if (addToCartResult.length > 0) {
        let totalItems = 0
        let amount = 0
        addToCartResult.forEach(item => {
          totalItems = totalItems + item.quantity
          amount = amount + item.quantity * item.price
        })
        this.setState({
          newTotalItems: totalItems,
          newCartItems: addToCartResult,
          newAmount: amount
        })
      }
    } else {
      //create a cart id and store to cookies
      const newCartId = await this.createCartId()
      saveCartId(newCartId)
      const addToCartResult = await fetchRequest('shoppingcart/add', {
        method: 'POST',
        body: JSON.stringify({
          cart_id: newCartId,
          product_id: productId,
          attributes: 'none'
        })
      })
      if (addToCartResult.length > 0) {
        let totalItems = 0
        let amount = 0
        addToCartResult.forEach(item => {
          totalItems = totalItems + item.quantity
          amount = amount + item.quantity * item.price
        })
        this.setState({
          newTotalItems: totalItems,
          newCartItems: addToCartResult,
          newAmount: amount
        })
      }
    }
  }
  async removeFromCart(itemId) {
    //if there's a cartId stored in cookies
    const removeFromCartResult = await fetchRequestWithoutResponse(
      `shoppingcart/removeProduct/${itemId}`,
      {
        method: 'DELETE'
      }
    )
    if (removeFromCartResult.status === 200) {
      this.getCartItems(user.cartId)
    }
  }

  async noOfItemToCart(productId) {
    let i = 1
    while (this.state.quantity >= i) {
      await this.addToCart(productId)
      i++
    }
    this.setState({ quantity: 1 })
  }

  adjustQuantity(number) {
    this.setState({ quantity: this.state.quantity + number })
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>My page</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component
            addToCart={productId => this.addToCart(productId)}
            adjustQuantity={number => this.adjustQuantity(number)}
            noOfItemToCart={productId => this.noOfItemToCart(productId)}
            getCartItems={cartId => this.getCartItems(cartId)}
            placeOrder={cartId => this.placeOrder(cartId)}
            removeFromCart={itemId => this.removeFromCart(itemId)}
            {...this.state}
            {...pageProps}
          />
        </ThemeProvider>
      </Container>
    )
  }
}

export default MyApp
