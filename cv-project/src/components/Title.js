import React, { Component } from "react";
import '/home/a/repos/cv/cv-project/src/App.css'

class Title extends Component {
  render() {
    const { title, handleInput} = this.props;

    return (
      (this.props.saved) ?
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
}
export default Title;