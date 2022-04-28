import React, { Component } from "react";
import "../App.css";

class Phone extends Component {
  render() {
    const { phone, handleInput } = this.props;

    return this.props.saved ? (
      <div className="contentContainer">
        <div className="leftContainer">
          <div className="leftDiv">Phone:</div>
        </div>
        <div className="rightContainer">
          <div className="rightDiv">{phone}</div>
        </div>
      </div>
    ) : (
      <input
        name="phone"
        className="phone"
        type="text"
        value={phone}
        onChange={(event) => handleInput(event)}
      ></input>
    );
  }
}
export default Phone;
