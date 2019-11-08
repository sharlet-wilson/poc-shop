import React from 'react';
import { storiesOf } from '@storybook/react';

import QuantityBox from './index';
import '../../containers/home/home.css';

storiesOf('QuantityBox', module)
  .addDecorator(story => <div className="main-container">{story()}</div>)
  .add('primary button', () => <QuantityBox addedQuantity={0} />)
