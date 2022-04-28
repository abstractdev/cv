import React, { Component } from "react";
import "../styles/Education.css";
import School from "./School";
import Degree from "./Degree";
import Edates from "./eDates";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
    };
    this.handleSave = this.handleSave.bind(this);
  }
  handleSave(event) {
    event.target.className === "educationSaveButton"
      ? this.setState(
          {
            saved: true,
          },
          () => console.log(this.state.saved)
        )
      : this.setState(
          {
            saved: false,
          },
          () => console.log(this.state.saved)
        );
    this.props.checkIfSaved(event);
  }
  render() {
    const { school, degree, eDates, handleInput, handleSubmit } = this.props;
    return (
      <div>
        <div className="educationHeaderContainer">
          <div className="educationHeader">Education</div>
          <button
            className={this.state.saved ? "educationEditButton" : "hide"}
            type="submit"
            onClick={(event) => this.handleSave(event)}
          >
            Edit
          </button>
        </div>
        <div
          className={
            this.state.saved ? "removeBackground" : "educationContainer"
          }
        >
          <form
            className="educationForm"
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="schoolContainer">
              <label
                htmlFor="school"
                className={this.state.saved ? "hide" : ""}
              >
                School:
              </label>
              <School
                school={school}
                saved={this.state.saved}
                handleInput={handleInput}
              />
            </div>
            <div className="degreeContainer">
              <label
                htmlFor="degree"
                className={this.state.saved ? "hide" : ""}
              >
                Degree:
              </label>
              <Degree
                degree={degree}
                saved={this.state.saved}
                handleInput={handleInput}
              />
            </div>
            <div className="eDatesContainer">
              <label
                htmlFor="eDates"
                className={this.state.saved ? "hide" : ""}
              >
                Dates:
              </label>
              <Edates
                eDates={eDates}
                saved={this.state.saved}
                handleInput={handleInput}
              />
            </div>
            <button
              className={this.state.saved ? "hide" : "educationSaveButton"}
              type="submit"
              onClick={(event) => this.handleSave(event)}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Education;
