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

    this.state = {
      modalOpen: false, 
      currentProduct: 0,
      am_routine: [],
      pm_routine: []
    }

    this.modalPopup = this.modalPopup.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.getProductDetails = this.getProductDetails.bind(this);
    this.addToRoutine = this.addToRoutine.bind(this);
}
  


addToRoutine (routine, product) {
  console.log(product)
  if (routine == "AM") {
  this.setState(state => {
    const am_routine = [...this.state.am_routine, product]
    return {
      am_routine
    };
  });
} else {
  this.setState(state => {
    const pm_routine = [...this.state.pm_routine, product]
    return {
      pm_routine
    };
  });
}
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
          <div className="routine">
          <Routine className="routine__morning" routine={this.state.am_routine}/>
          <Routine className="routine__evening" routine={this.state.pm_routine}/>
          </div>
          {this.state.modalOpen &&
          <ProductModal 
            productId={this.state.currentProduct} 
            open={this.state.modalOpen} 
            close={this.closeModal}
            addToRoutine={this.addToRoutine}/>}
        </div>
      </div>
    );
  }
}

export default App;