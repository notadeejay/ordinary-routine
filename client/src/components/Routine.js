import React, { Component } from "react";
import "../styles/routine.css";
import ProductList from "./ProductList";
import sun from "./sun.svg";
import moon from "./white_moon.svg";
import Product from "./Product";

class Routine extends Component {
  render() {
    const selectIcon = () => {
      if (this.props.className == "routine__morning") {
        return <img src={sun}></img>;
      } else {
        return <img src={moon}></img>;
      }
    };
    return (
      <div className={this.props.className}>
        <div className="routine__icon">{selectIcon()}</div>
        <div className="routine__products">
          {this.props.routine.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              category={product.category}
              targets={product.targets}
              description={product.description}
              when={product.am_pm}
              modal={this.props.modal}
              id={product.id}
              onRoutine={true}
            />
          ))}{" "}
        </div>
      </div>
    );
  }
}

export default Routine;
