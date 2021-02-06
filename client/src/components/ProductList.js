import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {

  render() {
 
    return (
      <div className="product-list hide">
        {this.props.products.map(product =>
          <Product 
          key={product.id} 
          name={product.name} 
          category={product.category}
          targets={product.targets}
          description={product.description}
          when={product.am_pm}
          />
        )}
      </div>
    );
  }
}

export default ProductList;