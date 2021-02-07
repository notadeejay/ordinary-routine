import React, { Component } from 'react';
import "./App.css"
import "./styles/layout.css"
import ProductList from "./components/ProductList"
import CategoryList from "./components/CategoryList"
import Routine from "./components/Routine"
import ProductModal from "./components/ProductModal"

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {modalOpen: false, currentProduct: 0}

    this.modalPopup = this.modalPopup.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getProductDetails = this.getProductDetails.bind(this);
}
  


  
  modalPopup(e) {
    let currentModalState = this.state.modalOpen
    this.setState({modalOpen: !currentModalState})

}

  closeModal(e) {
    let currentModalState = this.state.modalOpen
    if(currentModalState) {
      this.setState({modalOpen: !currentModalState, currentProduct: ''})
    } 
  }

  getProductDetails(e) {
    let productDiv = e.target.parentElement.parentElement
    // let productName = productDiv.firstElementChild.firstChild.innerText
    const productID = productDiv.getAttribute("data-id");
    this.setState({currentProduct: productID})
    this.modalPopup()
  }

  render() {
    console.log(this.state.currentProduct)
    return (
      <div className="app">
        <div className="app__header">
        <h1>Build Your Skin Care Regime</h1>
        <img src="https://theordinary.deciem.com/Images/logo.svg"/>
        </div>
        <div className="main__wrapper">
          <CategoryList modal={this.getProductDetails} />
          <Routine />
          {this.state.modalOpen &&
          <ProductModal productId={this.state.currentProduct} open={this.state.modalOpen} close={this.closeModal}/>}
        </div>
      </div>
    );
  }
}

export default App;