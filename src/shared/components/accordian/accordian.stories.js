import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Accordian from './index';
import '../../containers/home/home.css';

export const filters = [{
  id: "f1238",
  name: "Category",
  types: ["Mobiles", "Laptops", "Clothing", "Footwear"]
}, {
  id: "f1233",
  name: "Price",
  types: ["0-100", "100-200", "200-300", "300-400"]
}]

storiesOf('Accordian', module)
  .addDecorator(story => <div className="main-container">{story()}</div>)
  .add('with options', () => <Accordian filters={filters} />)
  .add('without options', () => <Accordian filters={[...filters, {
    id: "f02",
    name: "Exclude Out of Stock"
  }]} />)