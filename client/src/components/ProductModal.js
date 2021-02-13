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
  
  const renderButtons = (product) => {
    let timeOfDay = product.am_pm
    if (timeOfDay.includes("AM") && timeOfDay.includes("PM")) {
      return <React.Fragment><button onClick={this.handleClick} routine-id="AM" product-id={product.id} className="add__morning">Add to AM Routine</button> 
      <button onClick={this.handleClick} routine-id="PM" product-id={product.id} className="add__evening">Add to PM Routine</button></React.Fragment>
    } else if (timeOfDay.includes("AM")) {
      return <button onClick={this.handleClick} routine-id="AM" product-id={product.id} className="add__morning">Add to AM Routine</button>
    } else {
      return <button onClick={this.handleClick} routine-id="PM" product-id={product.id} className="add__evening">Add to PM Routine</button>
    }
  }

    return (
      <div className="product-modal__backdrop" onClick={this.props.close}>
      <div className="product-modal">
        {this.state.products.map((product) => {
           if (product.id == this.props.productId) {
            return <div  className="product-details">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <span className="product__category">{product.category}</span>
              <div className="additional-details">
            <div className="targets">
               <p>Targets</p>
                <ul className="product__targets">{product.targets.map((target) => {
                  return <li>{target}</li>})}
                </ul>
            </div>
            <div>
              <p>When to Use</p>
              <ul className="product__use"><li>{product.when_to_use}</li></ul>
            </div>
          </div>
              <div className="routine-controls">
                {renderButtons(product)}
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