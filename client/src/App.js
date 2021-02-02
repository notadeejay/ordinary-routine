import React, { Component } from 'react';
import "./components/ProductList"
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductList/>
      </div>
    );
  }
}

export default App;