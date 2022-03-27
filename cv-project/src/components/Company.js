import React, { Component } from "react";
import '/home/a/repos/cv/cv-project/src/App.css'

class Company extends Component {
  render() {
    const { company, handleInput} = this.props;

    return (
      (this.props.saved) ?
      <div className="contentContainer">
      <div className="leftContainer">
        <div className="leftDiv">Company:</div>
      </div>
      <div className="rightContainer">
        <div className='rightDiv'>{company}</div>
      </div> 
      </div>:
        <input
        name="company"
        className="company"
        type="text"
        value={company}
        onChange={(event) => handleInput(event)}
      ></input>
        
    );
  }
}
export default Company;