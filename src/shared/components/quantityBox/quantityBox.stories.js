import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import QuantityBox from './index';
import '../../containers/home/home.css';

export const actions = {
  onQuantityChange: action('onQuantityChange'),
};

storiesOf('QuantityBox', module)
  .addDecorator(story => <div className="main-container">{story()}</div>)
  .add('addedQuantity is 0', () => <QuantityBox addedQuantity={0} availableQuantity={3} {...actions} />)
  .add('items are in stock', () => <QuantityBox addedQuantity={2} availableQuantity={3} {...actions} />)
  .add('no more items are in stock', () => <QuantityBox addedQuantity={3} availableQuantity={3} {...actions} />)
