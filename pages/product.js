import React from 'react';
import ProductPage from '../src/containers/productPage'
import Link from 'next/link'
import { decoratedUrl } from '../src/utils/request'
import fetch from 'isomorphic-unfetch'
import { userDetails } from '../hocs/auth-hoc'

function Index( props ) {
  //console.log('props');
  //console.log(props);
  return (
    <div>
    <ProductPage {...props} />
    <style jsx>
    {`
      .star {
        background: linear-gradient(to right, blue 50%, yellow 50%);
      }
      `}
    </style>
    </div>
  );
}

Index.getInitialProps = async ({req, query}) => {
  const product = await fetch(decoratedUrl(`products/${query.prodId}`));
  const prodJson = await product.json();
  const productReviews = await fetch(decoratedUrl(`products/${query.prodId}/reviews`));
  const prodRevJson = await productReviews.json();
  return {productDetails: prodJson, productReviews:prodRevJson}
}

export default userDetails(Index)
