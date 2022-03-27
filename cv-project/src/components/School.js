import React, { Component } from "react";
import '/home/a/repos/cv/cv-project/src/App.css'

class School extends Component {
  render() {
    const { school, handleInput} = this.props;

    return (
      (this.props.saved) ?
      <div className="contentContainer">
      <div className="leftContainer">
        <div className="leftDiv">School:</div>
      </div>
      <div className="rightContainer">
        <div className='rightDiv'>{school}</div>
      </div> 
      </div>:
        <input
        name="school"
        className="school"
        type="text"
        value={school}
        onChange={(event) => handleInput(event)}
      ></input>
        
    );
  }
}
export default School;