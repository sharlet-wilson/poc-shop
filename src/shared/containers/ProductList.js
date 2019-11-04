import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FETCH_PRODUCTS } from '../store/actions';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (<div>
      Product Listing Page
      {this.props.products.map((product) => <li key={product.id}>{product.name}</li>)}
    </div>)
  }

}

const mapStateToProps = (state) => ({ products: state.products });

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch({ type: FETCH_PRODUCTS }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);