import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles'

import ProductList from '../../containers/ProductList';
import Header from '../header';
import s from './home.css';

export default () => {
  useStyles(s);
  return (
    <div className="main-container">
      <Header />
      <ProductList />
    </div>
  )
}