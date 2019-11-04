import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FETCH_PRODUCTS } from '../store/actions';
import ProductListView from '../components/ProductList';

class ProductList extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (<ProductListView products={this.props.products} />)
  }

}

const mapStateToProps = (state) => ({ products: state.products });

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch({ type: FETCH_PRODUCTS }),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);