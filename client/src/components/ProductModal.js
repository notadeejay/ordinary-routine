import React, { Component } from 'react';
import sun from "./sun.svg"

class ProductModal extends Component {
state = { products: [], currentProduct: 0}

componentDidMount(){
  fetch(`/products`)
  .then(res => res.json())
  .then(products => this.setState({ products }))
}
handleClick = (e) => {
  e.preventDefault()
  let routine = e.target.getAttribute("routine-id");
  let productId = parseInt(e.target.getAttribute("product-id"));
  
  let productDetails = this.state.products.find(product => product.id === productId)
 
  this.props.addToRoutine(routine, productDetails)
}
  render() {
  

    return (
      <div className="product-modal__backdrop" onClick={this.props.close}>
      <div className="product-modal">
        {this.state.products.map((product) => {
           if (product.id == this.props.productId) {
            return <div  className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="routine-controls">
                <button onClick={this.handleClick} routine-id="AM" product-id={product.id} className="add__morning">Add to AM Routine</button>
                <button onClick={this.handleClick} routine-id="PM" product-id={product.id} className="add__evening">Add to PM Routine</button>
              </div>
            </div>
           }
        })}
        

      </div>
      </div>
     
    );
  }
}

export default ProductModal;