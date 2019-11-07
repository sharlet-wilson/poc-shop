import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles'

import ProductList from '../../containers/ProductList';
import Header from '../header';
import s from './home.css';
import Accordian from '../accordian';

export default () => {
  useStyles(s);
  return (
    <div className="main-container">
      <Header />
      <div className="content-container">
        <div className="filters">
          <Accordian />
        </div>
        <div className="content">
          <ProductList />
        </div>
      </div>
    </div>
  )
}