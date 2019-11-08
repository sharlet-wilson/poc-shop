import React from 'react';
import Home from './containers/home';

export default [{
  path: '/',
  component: Home,
  exact: true,
}, {
  path: '/cart',
  component: () => (<div>Cart Page</div>)
}];
