import React from "react";
import '../App.css'

const Resp = (props) => {
    const { resp, handleInput} = props;

    return (
      (props.saved) ?
      <div className="contentContainer">
      <div className="leftContainer">
        <div className="leftDiv">Responsibilities:</div>
      </div>
      <div className="rightContainer">
        <div className='rightDiv'>{resp}</div>
      </div> 
      </div>:
        <input
        name="resp"
        className="resp"
        type="text"
        value={resp}
        onChange={(event) => handleInput(event)}
      ></input>
        
    );
}
export default Resp;