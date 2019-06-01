import React from 'react'
import { getUserDetails, getCartId, getServerUser } from '../src/utils/auth'
import cookies from 'next-cookies'
import fetch from 'isomorphic-unfetch'
import { decoratedUrl } from '../src/utils/request'

export const userDetails = Page => {
  const userDetails = props => <Page {...props} />
  userDetails.getInitialProps = async context => {
    const req = context.req
    const isServer = !!req
    //console.log('context');
    //console.log(context);

    const  user  = isServer ? getServerUser(cookies(context)) : {user:getUserDetails(), cartId:getCartId()}

    //console.log('user.cartId');
    //console.log(user.cartId);


    const initProps = Page.getInitialProps ? await Page.getInitialProps(context) : {}
    if (user && user.cartId) {
      const cartItems = await fetch(decoratedUrl(`shoppingcart/${user.cartId}`))
      const cartItemJson = await cartItems.json()
      //console.log('cartItemJson');
      //console.log(cartItemJson);
      initProps.cartItems = cartItemJson
      if (cartItemJson.length > 0 ) {
        let totalItems = 0
        cartItemJson.forEach(item=>{
          totalItems = totalItems + item.quantity
        })
        initProps.totalItems = totalItems
      }
    }
    initProps.user = user
    return {
      ...(initProps)
    }
  }

  return userDetails
}


/*
Index.getInitialProps = async ({ req, query }) => {
  const cat = await fetch(decoratedUrl('categories'));
  const catJson = await cat.json();
  const prod = await fetch(decoratedUrl(query.catId ? `products/inCategory/${query.catId}`: 'products'))
  const prodJson = await prod.json();
  return { categories: catJson, products: prodJson };
};
*/
