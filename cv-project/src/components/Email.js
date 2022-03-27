import React, { Component } from "react";
import '/home/a/repos/cv/cv-project/src/App.css'

class Email extends Component {
    render() {
        const { email, handleInput} = this.props;
    
        return (
            (this.props.saved) ?
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
}
export default Email;
