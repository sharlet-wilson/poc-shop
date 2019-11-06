import React from 'react';
import ProductList, { loadData } from './containers/ProductList';

export default [{
  path: '/',
  component: ProductList,
  exact: true,
  loadData,
}, {
  path: '/cart',
  component: () => (<div>Cart Page</div>)
}];
