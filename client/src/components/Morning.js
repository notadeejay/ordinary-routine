import React, { Component } from 'react';
import sun from "./sun.svg"

class Morning extends Component {

  render() {
    return (
        <div className="routine__morning">
            <div className="routine__icon"><img src={sun}></img></div>

        </div>
     
    );
  }
}

export default Morning;