import React, { Component } from 'react';
import sun from "./sun.svg"

class ProductModal extends Component {
state = { products: []}

componentDidMount(){
  fetch(`/products`)
  .then(res => res.json())
  .then(products => this.setState({ products }))
}

  render() {
  

    return (
      <div className="product-modal__backdrop" onClick={this.props.close}>
      <div className="product-modal">
        {this.state.products.map((product) => {
           if (product.id == this.props.productId) {
            return <div className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
            </div>
           }
        })}
        

      </div>
      </div>
     
    );
  }
}

export default ProductModal;