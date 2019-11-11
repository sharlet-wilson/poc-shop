import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import RatingBox from './index';
import '../../containers/home/home.css';

export const actions = {
  onQuantityChange: action('onQuantityChange'),
};

storiesOf('RatingBox', module)
  .addDecorator(story => <div className="main-container">{story()}</div>)
  .add('product not rated', () => <RatingBox noOfRatings={0} />)
  .add('1 rating', () => <RatingBox noOfRatings={5} rating={1} />)
  .add('5 ratings', () => <RatingBox noOfRatings={10} rating={5} />)
