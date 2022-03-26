import React, { Component } from "react";
import "../styles/Education.css";

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { school, degree, eDates } = this.props;
    return (
        <div>
          <div className="educationHeaderContainer">
            <div className="educationHeader">Education</div>
            <button className="educationEditButton" type="submit">Edit</button>
          </div>
          <div className="educationContainer">
            <form className="educationForm" onSubmit={this.handleFormSubmit}>
              <div className="schoolContainer">
                <label htmlFor="school">School</label>
                <input
                  name="school"
                  className="school"
                  type="text"
                ></input>
              </div>
              <div className="degreeContainer">
                <label htmlFor="degree">Degree</label>
                <input
                  name="degree"
                  className="degree"
                  type="text"
                ></input>
              </div>
              <div className="eDatesContainer">
                <label htmlFor="eDates">Dates</label>
                <input
                  name="eDates"
                  className="eDates"
                  type="text"
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
