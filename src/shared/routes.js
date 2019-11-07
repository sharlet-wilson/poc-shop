import React from 'react';
import Home from './components/home';

export default [{
  path: '/',
  component: Home,
  exact: true,
}, {
  path: '/cart',
  component: () => (<div>Cart Page</div>)
}];
