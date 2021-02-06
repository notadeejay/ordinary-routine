import React, { Component } from 'react';
import moon from "./white_moon.svg"

class Routine extends Component {

  render() {
    return (
        <div className="routine__evening">
            <div className="routine__icon"><img src={moon}></img></div>
        </div>
     
    );
  }
}

export default Routine;