import React from 'react'
import CategoryPage from '../src/containers/categoryPage'
import { decoratedUrl } from '../src/utils/request'
import fetch from 'isomorphic-unfetch'
import { userDetails } from '../hocs/auth-hoc'

const Category = props => {
  const { categories, products, user } = props
  return <CategoryPage {...props} />
}
// category, departent and products props in Men page
Category.getInitialProps = async ({ req, query }) => {
  const cat = await fetch(decoratedUrl('categories'))
  const catJson = await cat.json()
  const dep = await fetch(decoratedUrl('departments'))
  const depJson = await dep.json()
  const prod = await fetch(
    decoratedUrl(
      query.catId
        ? `products/inCategory/${query.catId}?page=1&limit=9`
        : query.depId
        ? `products/inDepartment/${query.depId}?page=1&limit=9`
        : 'products?page=1&limit=9'
    )
  )
  const prodJson = await prod.json()
  return { categories: catJson, products: prodJson, departments: depJson }
}

export default userDetails(Category)
