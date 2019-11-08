import React, { useEffect } from 'react';
import useStyles from 'isomorphic-style-loader/useStyles'
import { useSelector, useDispatch } from 'react-redux';

import Accordian from '../../components/accordian';
import Header from '../../components/header';
import ProductList from '../../components/ProductList';
import s from './home.css';
import { FETCH_PRODUCTS } from '../../store/actions';

export default () => {
  const data = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_PRODUCTS });
  }, []);

  useStyles(s);
  return (
    <div className="main-container">
      <Header />
      <div className="content-container">
        <div className="filters">
          <Accordian filters={data.filters || []} />
        </div>
        <div className="content">
          <ProductList products={data.products || []} />
        </div>
      </div>
    </div>
  )
}