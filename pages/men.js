import React from 'react';
import MensPage from '../src/containers/men'
import { decoratedUrl } from '../src/utils/request'
import fetch from 'isomorphic-unfetch'



export default function Index({ categories, products }) {
  return (
    <MensPage categories={categories} products={products} />
  );
}

Index.getInitialProps = async ({ req }) => {
  const cat = await fetch(decoratedUrl('categories'));
  const catJson = await cat.json();
  const prod = await fetch(decoratedUrl('products'))
  const prodJson = await prod.json();
  return { categories: catJson, products: prodJson };
};
