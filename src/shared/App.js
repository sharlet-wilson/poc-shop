import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ProductList from './containers/ProductList';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact>
            <ProductList />
          </Route>
          <Route path="/cart" exact>
            Cart Page
          </Route>
          <Route path="/">
            Not found
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App