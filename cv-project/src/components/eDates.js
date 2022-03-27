import React from "react";
import '../App.css'

const Edates = (props) => {
    const { eDates, handleInput} = props;

    return (
      (props.saved) ?
      <div className="contentContainer">
      <div className="leftContainer">
        <div className="leftDiv">Dates:</div>
      </div>
      <div className="rightContainer">
        <div className='rightDiv'>{eDates}</div>
      </div> 
      </div>:
        <input
        name="eDates"
        className="eDates"
        type="text"
        value={eDates}
        onChange={(event) => handleInput(event)}
      ></input>
        
    );
}
export default Edates;