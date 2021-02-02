import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  state = {products: []}

  componentDidMount() {
    fetch('/products')
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }

  render() {
    return (
      <div className="ProductList">
        <h1>Products</h1>
        {this.state.products.map(product =>
          <Product key={product.id} name={product.name} />
        )}
      </div>
    );
  }
}

export default ProductList;