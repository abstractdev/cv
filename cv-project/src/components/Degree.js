import React from "react";
import '../App.css'

const Degree = (props) => {
    const { degree, handleInput} = props;

    return (
      (props.saved) ?
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
export default Degree;