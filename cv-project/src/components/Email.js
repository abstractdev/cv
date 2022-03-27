import React from "react";
import '../App.css'

const Email = (props) => {
        const { email, handleInput} = props;
    
        return (
            (props.saved) ?
        <div className="contentContainer">
        <div className="leftContainer">
          <div className="leftDiv">Email:</div>
        </div>
        <div className="rightContainer">
          <div className='rightDiv'>{email}</div>
        </div> 
        </div>:
            <input
            name="email"
            className="email"
            type="text"
            value={email}
            onChange={(event) => handleInput(event)}
            ></input>
        );
}
export default Email;
