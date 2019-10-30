import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact>
            Product Listing Page
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