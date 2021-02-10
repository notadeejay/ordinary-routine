import React, { Component } from 'react';
import "../styles/product.css"
import sun from "./sun.svg"
import moon from "./moon.svg"


class Product extends Component {

  
  render() {
    const whenToUse = () => {
      let when = this.props.when
      if (when.length === 2) {
        return <React.Fragment><img className="sun" src={sun}></img>
          <img classname="moon" src={moon}></img>
        </React.Fragment>
      } else if (this.props.when.includes("AM")) {
        return <img className="sun"  src={sun}></img>
      } else  {
        return <img className="moon" src={moon}></img>
      }
    }
   
    return (
      <div className="product" data-id={this.props.id}>
      <div className="product__details" >
         <span className="product__category">{this.props.category}</span>
        <h3 className="product__name">{this.props.name}</h3>
          <ul className="product__targets">{this.props.targets.map((target) => {
            return <li>{target}</li>})}
            </ul>
            <div className="product__ampm">
                {whenToUse()}
            </div>
            </div>
            <div className="product__learn-more">
               <button onClick={this.props.modal} className="button__plus"><svg height="426.66667pt" viewBox="0 0 426.66667 426.66667" width="426.66667pt" xmlns="http://www.w3.org/2000/svg"><path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/></svg></button>
            </div>
        </div>
    );
  }
  
}

export default Product;
