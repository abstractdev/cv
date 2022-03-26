import React, { Component } from "react";
import "../styles/Work.css";

class Work extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { company, title, resp, wDates } = this.props;
    return (
          <div>
            <div className="workHeaderContainer">
            <div className="workHeader">Work Experience</div>
            <button className="workEditButton" type="submit">Edit</button>
                    </div>
                  <div className="workContainer">
            <form className="workForm" onSubmit={this.handleFormSubmit}>
              <div className="companyContainer">
                <label htmlFor="company">Company</label>
                <input
                  name="company"
                  className="company"
                  type="text"
                ></input>
              </div>
              <div className="titleContainer">
                <label htmlFor="title">Title</label>
                <input
                  name="title"
                  className="title"
                  type="text"
                ></input>
              </div>
              <div className="respContainer">
                <label htmlFor="resp">Responsibilities</label>
                <input
                  name="resp"
                  className="resp"
                  type="text"
                ></input>
              </div>
              <div className="wDatesContainer">
                <label htmlFor="wDates">Dates</label>
                <input
                  name="wDates"
                  className="wDates"
                  type="text"
                ></input>
              </div>
              <button className="workSubmitButton" type="submit">Save</button>
            </form>
                    </div>
          </div>
    );
  }
}

export default Work;
