import React, { Component } from "react";
import "../styles/Work.css";

class Work extends Component {
  render() {
    const { company, title, resp, wDates, handleCompanyInput, handleTitleInput, handleRespInput, handleWdatesInput } = this.props;
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
                  value={company || ''}
                  onChange={(event) => handleCompanyInput(event)}
                ></input>
              </div>
              <div className="titleContainer">
                <label htmlFor="title">Title</label>
                <input
                  name="title"
                  className="title"
                  type="text"
                  value={title || ''}
                  onChange={(event) => handleTitleInput(event)}
                ></input>
              </div>
              <div className="respContainer">
                <label htmlFor="resp">Responsibilities</label>
                <input
                  name="resp"
                  className="resp"
                  type="text"
                  value={resp || ''}
                  onChange={(event) => handleRespInput(event)}
                ></input>
              </div>
              <div className="wDatesContainer">
                <label htmlFor="wDates">Dates</label>
                <input
                  name="wDates"
                  className="wDates"
                  type="text"
                  value={wDates || ''}
                  onChange={(event) => handleWdatesInput(event)}
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
