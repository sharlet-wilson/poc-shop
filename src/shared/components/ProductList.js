import React from 'react';

export default (props) => (
  <div>Product Listing Page
  {props.products.map((product) => <li key={product.id}>{product.name}</li>)}</div>
);
