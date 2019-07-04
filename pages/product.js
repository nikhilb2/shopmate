import React from 'react'
import ProductPage from '../src/containers/productPage'
import Link from 'next/link'
import { decoratedUrl } from '../src/utils/request'
import fetch from 'isomorphic-unfetch'
import { userDetails } from '../hocs/auth-hoc'

const Product = props => {
  return (
    <div>
      <ProductPage {...props} />
    </div>
  )
}
//required props in product page
Product.getInitialProps = async ({ req, query }) => {
  const cat = await fetch(decoratedUrl('categories'))
  const catJson = await cat.json()
  const dep = await fetch(decoratedUrl('departments'))
  const depJson = await dep.json()
  const product = await fetch(decoratedUrl(`products/${query.prodId}`))
  const prodJson = await product.json()
  const productReviews = await fetch(
    decoratedUrl(`products/${query.prodId}/reviews`)
  )
  const prodRevJson = await productReviews.json()
  return {
    productDetails: prodJson,
    productReviews: prodRevJson,
    categories: catJson,
    departments: depJson
  }
}

export default userDetails(Product)
