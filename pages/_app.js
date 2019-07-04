import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import {
  fetchRequest,
  fetchRequestWithoutResponse,
  decoratedUrl
} from '../src/utils/request'
import {
  getUserDetails,
  getCartId,
  getServerUser,
  removeCartId,
  saveCartId
} from '../src/utils/auth'
import { StripeProvider, Elements } from 'react-stripe-elements'
import * as Sentry from '@sentry/browser'
import Router from 'next/router'
import withGA from 'next-ga'

Sentry.init({
  dsn: 'https://63f01d00663f40be8678bf3a4dd03cbc@sentry.io/1478089'
})

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
    searchSkip: 2,
    searchLimit: 9,
    keyword: '',
    stripe: null,
    stripeToken: null,
    stripeChargeResponse: null,
    searchInitiated: false,
    loadingProducts: false,
    loadingMoreProducts: false,
    categoriesInSelectedDept: [],
    selectedCategory: null,
    selectedDepartmentName: null,
    loadingCategories: false
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
    //console.log(orderStatus)
    removeCartId()
  }

  async getCategoriesByDepartment(depId) {
    this.setState({ loadingCategories: true })
    const cats = await fetchRequest(`categories/inDepartment/${depId}`, {
      method: 'GET'
    })
    this.setState({ categoriesInSelectedDept: cats, loadingCategories: false })
  }

  async createCartId() {
    const newCartId = await fetchRequest('shoppingcart/generateUniqueId', {
      method: 'GET'
    })
    saveCartId(newCartId.cart_id)
    this.setState({ cartId: newCartId.cart_id })
    return newCartId.cart_id
  }

  selectColor(color) {
    this.setState({ selectedColor: color })
  }

  selectSize(size) {
    this.setState({ selectedSize: size })
  }

  selectDepartmentName(name) {
    this.setState({ selectedDepartmentName: name })
  }

  async getCartItems(cartId) {
    const { user } = this.props.pageProps
    const cartItems = await fetchRequest(`shoppingcart/${user.cartId}`, {
      method: 'GET'
    })
    let totalItems = 0
    let newAmount = 0
    const letIterate = await cartItems.forEach(item => {
      ;(totalItems = totalItems + item.quantity),
        (newAmount = newAmount + Number(item.subtotal))
    })
    //console.log(newAmount)
    this.setState({
      newTotalItems: totalItems,
      newCartItems: cartItems,
      newAmount
    })
  }

  async addToCart(productId) {
    const { user } = this.props.pageProps
    const { newCartId, selectedColor, selectedSize } = this.state
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
          attributes:
            selectedColor.attribute_value + ' ' + selectedSize.attribute_value
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
          attributes:
            selectedColor.attribute_value + ' ' + selectedSize.attribute_value
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
    const { user } = this.props.pageProps

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
    const { user } = this.props.pageProps
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
    const { query } = this.props.router
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }

    this.checkParam()
    if (query.depId) {
      this.setState({ selectedDepartment: query.depId })
    }
  }

  setStripe() {
    this.setState({
      stripe: window.Stripe('pk_test_NcwpaplBCuTL6I0THD44heRe')
    })
  }

  searchProducts(keyword, page, limit) {
    this.setState({ loadingSearch: true, searchInitiated: true, searchSkip: 2 })
    fetch(
      decoratedUrl(
        `products/search?query_string=${keyword}&page=${
          page ? page : 1
        }&limit=${limit ? limit : 9}`
      )
    )
      .then(response => response.json())
      .then(result => {
        this.setState({ newProducts: result, keyword, loadingSearch: false })
      })
  }
  searchMoreProducts() {
    const { searchSkip, searchLimit, newProducts, keyword } = this.state
    this.setState({ loadingProducts: true })
    fetch(
      decoratedUrl(
        `products/search?query_string=${keyword}&page=${searchSkip}&limit=${searchLimit}`
      )
    )
      .then(response => response.json())
      .then(result => {
        if (newProducts) {
          const addMoreProducts = newProducts
          addMoreProducts.rows.push(...result.rows)
          //console.log('addMoreProducts')
          //console.log(result)
          this.setState({
            newProducts: addMoreProducts,
            keyword,
            loadingProducts: false,
            searchSkip: searchSkip + 1
          })
        } else {
          this.setState({
            newProducts: result,
            keyword,
            loadingProducts: false,
            searchSkip: searchSkip + 1
          })
        }
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

  async getProducts(catId) {
    this.setState({ skip: 2, loadingProducts: true, selectedCategory: catId })
    const { newProducts, skip, limit } = this.state
    const products = await fetchRequest(
      `products/inCategory/${catId}?limit=9`,
      {
        method: 'GET'
      }
    )
    this.setState({ newProducts: products, loadingProducts: false })
    //console.log(products)
  }
  async getMoreProductsInCategory() {
    const { searchInitiated } = this.state
    if (searchInitiated) {
      this.searchMoreProducts()
    } else {
      const { pageProps } = this.props
      this.setState({ loadingProducts: true })
      const {
        newProducts,
        skip,
        limit,
        selectedCategory,
        selectedDepartment
      } = this.state
      const products = await fetchRequest(
        selectedCategory
          ? `products/inCategory/${selectedCategory}?page=${skip}&limit=${limit}`
          : `products/inDepartment/${selectedDepartment}?page=${skip}&limit=${limit}`,
        {
          method: 'GET'
        }
      )

      const prod = newProducts ? newProducts : pageProps.products
      prod.rows.push(...products.rows)
      this.setState({
        newProducts: prod,
        skip: skip + 1,
        loadingProducts: false
      })
    }
  }

  async getMoreProducts(search) {
    this.setState({ loadingProducts: true })
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
          skip: skip + 1,
          loadingProducts: false
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
          skip: skip + 1,
          loadingProducts: false
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
          skip: skip + 1,
          loadingProducts: false
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
          skip: skip + 1,
          loadingProducts: false
        })
      }
    }
  }

  clearProducts() {
    this.setState({
      newProducts: null,
      skip: 2,
      searchInitiated: false,
      param: { name: null },
      selectColor: null,
      selectedSize: null,
      searchSkip: 2,
      keyword: ''
    })
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
    //console.log('check attribute')
    //console.log(this.state)
    //console.log(pageProps)
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
                selectColor={color => this.selectColor(color)}
                selectSize={selectSize => this.selectSize(selectSize)}
                removeFromCart={itemId => this.removeFromCart(itemId)}
                reduceQuantity={(itemId, quantity) =>
                  this.reduceQuantity(itemId, quantity)
                }
                getMoreProducts={() => this.getMoreProducts()}
                searchProducts={keyword => this.searchProducts(keyword)}
                searchMoreProducts={keyword => this.searchMoreProducts(keyword)}
                clearProducts={() => this.clearProducts()}
                clearOrderStatus={() => this.clearOrderStatus()}
                saveStripeToken={token => this.saveStripeToken(token)}
                stripeCharge={() => this.stripeCharge()}
                setStripe={() => this.setStripe()}
                getCategoriesByDepartment={depId =>
                  this.getCategoriesByDepartment(depId)
                }
                getProducts={catId => this.getProducts(catId)}
                getMoreProductsInCategory={catId =>
                  this.getMoreProductsInCategory(catId)
                }
                selectDepartmentName={name => this.selectDepartmentName(name)}
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

export default withGA('UA-136014742-1', Router)(MyApp)
