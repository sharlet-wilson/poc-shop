import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FETCH_PRODUCTS } from '../store/actions';
import ProductListView from '../components/ProductList';

function ProductList() {
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCH_PRODUCTS });
  }, []);

  return (<ProductListView products={products} />)
}

export default ProductList;
