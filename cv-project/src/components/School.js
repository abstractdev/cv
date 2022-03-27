import React from "react";
import '../App.css'

const School = (props) => {
    const { school, handleInput} = props;

    return (
      (props.saved) ?
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
export default School;