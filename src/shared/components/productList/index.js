import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles'

import s from './productList.css';
import ProductCard from '../productCard';

export default (props) => {
  useStyles(s);

  const handleQtyChange = () => {
    console.log("**********handleQtyChange called in ProductList component************")
  }

  return (<>
    {props.products.map((category) => <div key={category.categoryId}>
      <h2 className="title">{category.categoryName || 'Special Offers'}</h2>
      <div className="product-list">
        {category.items.map(item => (<ProductCard key={item.id} product={item} onQtyChange={handleQtyChange} />))}
      </div>
    </div>)}
  </>)
};
