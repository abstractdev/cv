import React from "react";
import '../App.css'

const Phone = (props) => {
        const { phone, handleInput} = props;
    
        return (
            (props.saved) ?
        <div className="contentContainer">
        <div className="leftContainer">
          <div className="leftDiv">Phone:</div>
        </div>
        <div className="rightContainer">
          <div className='rightDiv'>{phone}</div>
        </div> 
        </div>:
            <input
            name="phone"
            className="phone"
            type="text"
            value={phone}
            onChange={(event) => handleInput(event)}
            ></input>
            
        );
}
export default Phone;
