import React, { Component } from "react";
import "../App.css";

class Wdates extends Component {
  render() {
    const { wDates, handleInput } = this.props;

    return this.props.saved ? (
      <div className="contentContainer">
        <div className="leftContainer">
          <div className="leftDiv">Dates:</div>
        </div>
        <div className="rightContainer">
          <div className="rightDiv">{wDates}</div>
        </div>
      </div>
    ) : (
      <input
        name="wDates"
        className="wDates"
        type="text"
        value={wDates}
        onChange={(event) => handleInput(event)}
      ></input>
    );
  }
}
export default Wdates;
