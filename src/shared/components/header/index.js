import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles'

import s from './header.css';

export default () => {
  useStyles(s);
  return (<header className="main-header">
    <a className="logo" href="#">Poc Shop</a>
    <div className="header-right">
      <input className="search-bar" type="search" />
      <a className="cart-btn" href="#">
        <img src="/public/icons/MaterialIcon.svg" alt="Cart"></img>
        <span>(0)</span>
      </a>
    </div>
  </header>)
}