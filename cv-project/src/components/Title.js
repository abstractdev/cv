import React from "react";
import '../App.css'

const Title = (props) => {
    const { title, handleInput} = props;

    return (
      (props.saved) ?
      <div className="contentContainer">
      <div className="leftContainer">
        <div className="leftDiv">Title:</div>
      </div>
      <div className="rightContainer">
        <div className='rightDiv'>{title}</div>
      </div> 
      </div>:
        <input
        name="title"
        className="title"
        type="text"
        value={title}
        onChange={(event) => handleInput(event)}
      ></input>
        
    );
}
export default Title;