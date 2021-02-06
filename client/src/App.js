import React, { Component } from 'react';
import "./App.css"
import "./styles/layout.css"
import ProductList from "./components/ProductList"
import CategoryList from "./components/CategoryList"
import Routine from "./components/Routine"

class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="app__header">
        <h1>Build Your Skin Care Regime</h1>
        <img src="https://theordinary.deciem.com/Images/logo.svg"/>
        </div>
        <div className="main__wrapper">
          <CategoryList  />
          <Routine />
        </div>
      </div>
    );
  }
}

export default App;