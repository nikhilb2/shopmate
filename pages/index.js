import React from 'react'
import Homepage from '../src/containers/homepage'
import { userDetails } from '../hocs/auth-hoc'
import { decoratedUrl } from '../src/utils/request'
import fetch from 'isomorphic-unfetch'

const Index = props => {
  return <Homepage {...props} />
}
//category and product props to homepage component
Index.getInitialProps = async ({ req, query }) => {
  const cat = await fetch(decoratedUrl('categories'))
  const catJson = await cat.json()
  const dep = await fetch(decoratedUrl('departments'))
  const depJson = await dep.json()
  const prod = await fetch(
    decoratedUrl(
      query.catId ? `products/inCategory/${query.catId}` : 'products'
    )
  )
  const prodJson = await prod.json()
  return { categories: catJson, products: prodJson, departments: depJson }
}
export default userDetails(Index)
