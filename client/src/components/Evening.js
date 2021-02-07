import React, { Component } from 'react';
import moon from "./white_moon.svg"

class Evening extends Component {

  render() {
    return (
        <div className="routine__evening">
            <div className="routine__icon"><img src={moon}></img></div>
        </div>
     
    );
  }
}

export default Evening;