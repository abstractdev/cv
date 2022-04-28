import React, { Component } from "react";
import "../App.css";

class Resp extends Component {
  render() {
    const { resp, handleInput } = this.props;

    return this.props.saved ? (
      <div className="contentContainer">
        <div className="leftContainer">
          <div className="leftDiv">Responsibilities:</div>
        </div>
        <div className="rightContainer">
          <div className="rightDiv">{resp}</div>
        </div>
      </div>
    ) : (
      <input
        name="resp"
        className="resp"
        type="text"
        value={resp}
        onChange={(event) => handleInput(event)}
      ></input>
    );
  }
}
export default Resp;
