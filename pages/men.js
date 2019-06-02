import React from 'react';
import MensPage from '../src/containers/men'
import { decoratedUrl } from '../src/utils/request'
import fetch from 'isomorphic-unfetch'
import { userDetails } from '../hocs/auth-hoc'

function Men(props) {
  const { categories, products, user } = props
  //console.log('Mens container');
  //console.log(props);
  return (
    <MensPage {...props} />
  );
}

Men.getInitialProps = async ({ req, query }) => {
  const cat = await fetch(decoratedUrl('categories'));
  const catJson = await cat.json();
  const prod = await fetch(decoratedUrl(query.catId ? `products/inCategory/${query.catId}`: 'products'))
  const prodJson = await prod.json();
  return { categories: catJson, products: prodJson };
};

export default userDetails(Men)
