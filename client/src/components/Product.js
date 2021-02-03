import React, { Component } from 'react';
import "../styles/product.css"

class Product extends Component {
  state = {selected: false}
  

handleSelect() {
        const currentState = this.state.selected
        this.setState({ selected: !currentState });
    }

    render() {
    return (
      <div className={this.state.selected ? 'product selected': "product"} onClick={this.handleSelect}>
        <div className="product__category">
            <p>{this.props.category}</p>
        </div>
        <div className="product__name">
            <h3>{this.props.name}</h3>
        </div>
        <ul className="product__targets">
            {this.props.targets.map((target, index) => {
                return <li key={index}>{target}</li>
            })}
        </ul>
      </div>
    );
  }
  
}

export default Product;
