import React from 'react'
import { getUserDetails, getCartId, getServerUser } from '../src/utils/auth'
import cookies from 'next-cookies'
import fetch from 'isomorphic-unfetch'
import { decoratedUrl } from '../src/utils/request'
//high order component for wrapping page to get user props
export const userDetails = Page => {
  const userDetails = props => <Page {...props} />
  userDetails.getInitialProps = async context => {
    const req = context.req
    const isServer = !!req

    const user = isServer
      ? getServerUser(cookies(context))
      : { user: getUserDetails(), cartId: getCartId() }

    const initProps = Page.getInitialProps
      ? await Page.getInitialProps(context)
      : {}
    if (user && user.cartId) {
      const cartItems = await fetch(decoratedUrl(`shoppingcart/${user.cartId}`))
      const cartItemJson = await cartItems.json()
      //console.log(cartItemJson)
      initProps.cartItems = cartItemJson
      if (cartItemJson.length > 0) {
        let totalItems = 0
        let amount = 0
        cartItemJson.forEach(item => {
          totalItems = totalItems + item.quantity
          amount = amount + item.quantity * item.price
        })
        initProps.totalItems = totalItems
        initProps.amount = amount
      }
    }
    initProps.user = user
    return {
      ...initProps
    }
  }

  return userDetails
}
