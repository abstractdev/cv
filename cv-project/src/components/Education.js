import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  render() {
    const { school, degree, eDates, handleInput, handleSubmit } = this.props;
    return (
        <div>
          <div className="educationHeaderContainer">
            <div className="educationHeader">Education</div>
            <button className="educationEditButton" type="submit">Edit</button>
          </div>
          <div className="educationContainer">
            <form className="educationForm" onSubmit={(event) => handleSubmit(event)}>
              <div className="schoolContainer">
                <label htmlFor="school">School</label>
                <input
                  name="school"
                  className="school"
                  type="text"
                  value={school}
                  onChange={(event) => handleInput(event)}
                ></input>
              </div>
              <div className="degreeContainer">
                <label htmlFor="degree">Degree</label>
                <input
                  name="degree"
                  className="degree"
                  type="text"
                  value={degree}
                  onChange={(event) => handleInput(event)}
                ></input>
              </div>
              <div className="eDatesContainer">
                <label htmlFor="eDates">Dates</label>
                <input
                  name="eDates"
                  className="eDates"
                  type="text"
                  value={eDates}
                  onChange={(event) => handleInput(event)}
                ></input>
              </div>
              <button className="educationSubmitButton" type="submit">Save</button>
            </form>
          </div>
        </div>
    );
  }
}

export default Education;
