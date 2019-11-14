import React, { useState, useEffect } from 'react';
import useStyles from 'isomorphic-style-loader/useStyles'
import { useSelector, useDispatch } from 'react-redux';

import Accordian from '../../components/accordian';
import Header from '../../components/header';
import ProductList from '../../components/productList';
import s from './home.css';
import { FETCH_PRODUCTS } from '../../store/actions';

export default () => {
  const [filtersClass, setFiltersClass] = useState("");
  const data = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: FETCH_PRODUCTS });
  }, []);

  useStyles(s);

  const toggleFilter = () => {
    if (filtersClass) {
      setFiltersClass("");
    } else {
      setFiltersClass("show");
    }
  }

  return (
    <div style={{ "position": "relative" }} className="main-container">
      <Header />
      <button onClick={toggleFilter} className="filter-toggle">{filtersClass ? "Hide" : "Show"} Filters</button>
      <div className="content-container">
        <div className={`filters ${filtersClass}`}>
          <Accordian filters={data.filters || []} />
        </div>
        <div className="content">
          <ProductList products={data.products || []} />
        </div>
      </div>
    </div>
  )
}