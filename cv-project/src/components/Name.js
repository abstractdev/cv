import React from "react";
import '../App.css'

const Name = (props) => {
    const { name, handleInput } = props;

    return (
        (props.saved) ?
        <div className="contentContainer">
        <div className="leftContainer">
          <div className="leftDiv">Name:</div>
        </div>
        <div className="rightContainer">
          <div className='rightDiv'>{name}</div>
        </div> 
        </div>:
        <input
        name="name"
        className="name"
        type="text"
        value={name}
        onChange={(event) => handleInput(event)}
        ></input>
        
    );
}
export default Name;
