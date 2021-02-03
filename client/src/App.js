import React, { Component } from 'react';
import "./App.css"
import "./components/ProductList"
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
        <h1>Build Your Skin Care Regime</h1>
        <img src="https://theordinary.deciem.com/Images/logo.svg"/>
        </div>
        <ProductList/>
      </div>
    );
  }
}

export default App;