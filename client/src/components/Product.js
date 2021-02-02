import React, { Component } from 'react';

class Product extends Component {
 

  render() {
    console.log(this.props.name)
    return (
      <div className="Product">
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default Product;