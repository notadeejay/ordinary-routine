import React, { Component } from 'react';
import ProductList from './ProductList';


class CategoryListItem extends Component {
 state = {products: [], active: false}
  
  

  componentDidMount() {
    fetch('/products')
      .then(res => res.json())
      .then(products => this.setState({ products }));
  }
   handleClick(e) {
      const productList = e.target.nextSibling
      productList.classList.toggle('hide')
   }

  render() {
    
    return ( 
        <div className="category-item">
              {this.props.categories.map((category) => {
                        const products = this.state.products.filter(prod => prod.category === category);
                        return (
                          <div>
                          <h2 onClick={this.handleClick}>{category}</h2>
                            <ProductList
                                products={products}
                            />
                          </div>
                        )
                  })
              }
        </div>
    );
  }
}

export default CategoryListItem;