import React, { Component } from "react";
import '/home/a/repos/cv/cv-project/src/App.css'

class Degree extends Component {
  render() {
    const { degree, handleInput} = this.props;

    return (
      (this.props.saved) ?
      <div className="contentContainer">
      <div className="leftContainer">
        <div className="leftDiv">Degree:</div>
      </div>
      <div className="rightContainer">
        <div className='rightDiv'>{degree}</div>
      </div> 
      </div>:
        <input
        name="degree"
        className="degree"
        type="text"
        value={degree}
        onChange={(event) => handleInput(event)}
      ></input>
        
    );
  }
}
export default Degree;