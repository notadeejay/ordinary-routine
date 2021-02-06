import React, { Component } from 'react';
import Morning from "./Morning"
import Evening from "./Evening"
import "../styles/routine.css"

class Routine extends Component {

  render() {
    return (
     <div className = "routine">
         <Morning />
         <Evening />
     </div>
    );
  }
}

export default Routine;