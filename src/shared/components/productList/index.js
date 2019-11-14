import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles'

import s from './productList.css';
import SubList from './subList';

export default (props) => {
  useStyles(s);

  return (<>
    {props.products.map((category) => <div className="category-wrapper" key={category.categoryId}>
      <SubList category={category} />
    </div>)}
  </>)
};
