import React from "react";
import '../App.css'

const Company = (props) => {
    const { company, handleInput} = props;

    return (
      (props.saved) ?
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
export default Company;