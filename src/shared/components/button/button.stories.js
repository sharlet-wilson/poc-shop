import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index';
import '../../containers/home/home.css';

storiesOf('Button', module)
  .addDecorator(story => <div className="main-container">{story()}</div>)
  .add('primary button', () => <Button text="Add to Cart" type="primary" />)
  .add('danger button', () => <Button text="Remove from Cart" type="danger" />)
