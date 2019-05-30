import React from 'react';
import ProductPage from '../src/containers/productPage'
import Link from 'next/link'
import { decoratedUrl } from '../src/utils/request'
import fetch from 'isomorphic-unfetch'

export default function Index( props ) {
  console.log(props);
  return (
    <div>
    <ProductPage productDetails={props.productDetails}/>
    </div>
  );
}

Index.getInitialProps = async ({req, query}) => {
  const product = await fetch(decoratedUrl(`products/${query.prodId}`));
  const prodJson = await product.json();
  return {productDetails: prodJson}
}
