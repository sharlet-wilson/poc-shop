import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ProductCard from './index';
import '../../containers/home/home.css';

const product = {
  id: "i203",
  thumbnail: "https://source.unsplash.com/random/241x200",
  name: "Google Pixel",
  description: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  rating: 4,
  noOfRatings: 10,
  price: 333.33,
  itmesInStock: 10,
}

export const actions = {
  onQtyChange: action('onQtyChange'),
};

storiesOf('ProductCard', module)
  .addDecorator(story => <div className="main-container">{story()}</div>)
  .add('default', () => <ProductCard product={product} {...actions} />)
  .add('long product name', () => <ProductCard product={{ ...product, name: "This is Quite a Long Name" }} {...actions} />)
  .add('long product description', () => <ProductCard product={{ ...product, description: `${product.description} ${product.description}` }} {...actions} />)
  .add('discount', () => <ProductCard product={{ ...product, discount: '10%' }} {...actions} />)
  .add('product not rated', () => <ProductCard product={{ ...product, noOfRatings: 0 }} {...actions} />)
  .add('product not in cart', () => <ProductCard product={product} qtyInCart={0} {...actions} />)
  .add('product in cart', () => <ProductCard product={product} qtyInCart={2} availableQuantity={5} {...actions} />)
