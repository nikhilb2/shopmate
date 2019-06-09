import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import { fetchRequest, fetchRequestWithoutResponse } from '../src/utils/request'
import {
  getUserDetails,
  getCartId,
  getServerUser,
  removeCartId,
  saveCartId
} from '../src/utils/auth'
import { StripeProvider, Elements } from 'react-stripe-elements'
import * as Sentry from '@sentry/browser';
Sentry.init({dsn: "https://63f01d00663f40be8678bf3a4dd03cbc@sentry.io/1478089"});

class MyApp extends App {
  state = {
    newCartItems: null,
    newtotalItems: null,
    newAmount: null,
    orderStatus: null,
    quantity: 1,
    cartItems: [],
    newProducts: null,
    param: { name: null },
    skip: 2,
    limit: 9,
    keyword: '',
    stripe: null,
    stripeToken: null,
    stripeChargeResponse: null
  }
  async placeOrder() {
    const { newCartId } = this.state
    const { user } = this.props.pageProps
    const orderStatus = await fetchRequest('orders', {
      method: 'POST',
      body: JSON.stringify({
        cart_id: newCartId ? newCartId : user.cartId,
        shipping_id: 4,
        tax_id: 2
      })
    })
    await this.setState({
      orderStatus
    })
    ////console.log(orderStatus)
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
    const { user } = this.props.pageProps
    const { newCartId } = this.state
    let addToCartResult = null
    //if there's a cartId stored in cookies
    //console.log(user.cartId);
    //console.log('user.cartId');
    if (newCartId || user.cartId) {
      const addToCartResult = await fetchRequest('shoppingcart/add', {
        method: 'POST',
        body: JSON.stringify({
          cart_id: newCartId ? newCartId : user.cartId,
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
          newAmount: amount,
          newCartId
        })
      }
    }
  }

  async reduceQuantity(itemId, quantity) {
    const removeFromCartResult = await fetchRequestWithoutResponse(
      `shoppingcart/update/${itemId}`,
      {
        method: 'PUT',
        body: JSON.stringify({ quantity: quantity })
      }
    )
    await this.getCartItems(user.cartId)
  }

  async removeFromCart(itemId) {
    //if there's a cartId stored in cookies
    const removeFromCartResult = await fetchRequestWithoutResponse(
      `shoppingcart/removeProduct/${itemId}`,
      {
        method: 'DELETE'
      }
    )
    await this.getCartItems(user.cartId)
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
    if (this.state.quantity + number > 0) {
      this.setState({ quantity: this.state.quantity + number })
    }
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }

    this.checkParam()
    this.setState({ stripe: window.Stripe('pk_test_NcwpaplBCuTL6I0THD44heRe') })
  }

  searchProducts(keyword) {
    fetch(decoratedUrl(`products/search?query_string=${keyword}`))
      .then(response => response.json())
      .then(result => {
        this.setState({ newProducts: result, keyword })
      })
  }

  checkParam() {
    const { query } = this.props.router

    if (query.catId) {
      this.setState({
        param: { name: 'inCategory', id: query.catId, ogName: 'catId' }
      })
    }
    if (query.depId) {
      this.setState({
        param: { name: 'inDepartment', id: query.deptId, ogName: 'depId' }
      })
    }
    //console.log(this.props)
  }

  async getMoreProducts() {
    const updateParams = await this.checkParam()
    const { newProducts, skip, limit, param } = this.state
    if (param.name === 'inCategory' || param.name === 'inDepartment') {
      const getMoreProducts = await fetchRequest(
        `products/${param.name}/${param.id}?page=${skip}&limit=${limit}`,
        {
          method: 'GET'
        }
      )
      if (newProducts) {
        let prod = newProducts.rows
        prod.push(...getMoreProducts.rows)
        this.setState({
          newProducts: {
            rows: prod,
            count: getMoreProducts.count
          },
          skip: skip + 1
        })
        //console.log('getMoreProducts')
        //console.log(getMoreProducts)
      } else {
        let prod = this.props.pageProps.products.rows
        prod.push(...getMoreProducts.rows)
        this.setState({
          newProducts: {
            rows: prod,
            count: getMoreProducts.count
          },
          skip: skip + 1
        })
      }
    } else {
      const getMoreProducts = await fetchRequest(
        `products?page=${skip}&limit=${limit}`,
        {
          method: 'GET'
        }
      )
      if (newProducts) {
        let prod = newProducts.rows
        prod.push(...getMoreProducts.rows)
        this.setState({
          newProducts: {
            rows: prod,
            count: getMoreProducts.count
          },
          skip: skip + 1
        })
        //console.log('getMoreProducts')
        //console.log(getMoreProducts)
      } else {
        let prod = this.props.pageProps.products.rows
        prod.push(...getMoreProducts.rows)
        this.setState({
          newProducts: {
            rows: prod,
            count: getMoreProducts.count
          },
          skip: skip + 1
        })
      }
    }
  }

  clearProducts() {
    this.setState({ newProducts: null, skip: 2 })
  }

  async clearOrderStatus() {
    await this.setState({ orderStatus: null, stripeChargeResponse: null })
    window.location.reload()
  }

  async saveStripeToken(token) {
    this.setState({ stripeToken: token })
    const { stripeToken, orderStatus, newAmount } = this.state

    if (token && token.token && token.token.id) {
      const pay = await fetchRequest('stripe/charge', {
        method: 'POST',
        body: JSON.stringify({
          stripeToken: token.token.id,
          order_id: orderStatus.orderId,
          description: 'test',
          amount: Math.round(newAmount * 100),
          currency: 'GBP'
        })
      })
      this.setState({
        stripeChargeResponse: pay,
        newTotalItems: null,
        newAmount: null,
        newCartItems: null
      })
    } else {
      alert('Please input all details')
    }
  }

  async stripeCharge() {
    const { stripeToken, orderStatus, newAmount } = this.state
    const { amount } = this.props.pageProps
    const pay = await fetchRequest('stripe/charge', {
      method: 'POST',
      body: JSON.stringify({
        stripeToken: stripeToken.token.id,
        order_id: orderStatus.orderId,
        description: 'test',
        amount: newAmount ? newAmount : amount,
        currency: 'GBP'
      })
    })
    this.setState({ stripeCharge: pay })
  }

  render() {
    const { Component, pageProps } = this.props
    //console.log(this.state);
    return (
      <StripeProvider stripe={this.state.stripe}>
        <Elements>
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
                reduceQuantity={(itemId, quantity) =>
                  this.reduceQuantity(itemId, quantity)
                }
                getMoreProducts={() => this.getMoreProducts()}
                searchProducts={keyword => this.searchProducts(keyword)}
                clearProducts={() => this.clearProducts()}
                clearOrderStatus={() => this.clearOrderStatus()}
                saveStripeToken={token => this.saveStripeToken(token)}
                stripeCharge={() => this.stripeCharge()}
                {...this.state}
                {...pageProps}
              />
            </ThemeProvider>
          </Container>
        </Elements>
      </StripeProvider>
    )
  }
}

export default MyApp
