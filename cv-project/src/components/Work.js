import React, { Component } from "react";
import "../styles/Work.css";
import Company from "./Company";
import Title from "./Title";
import Resp from "./Resp";
import Wdates from "./Wdates";

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false
    };
    this.handleSave = this.handleSave.bind(this)
  }
  handleSave(event) {
    event.target.className === 'workSaveButton' ?
    this.setState({ 
      saved: true 
    }, () => console.log(this.state.saved)):
    this.setState({ 
      saved: false 
    }, () => console.log(this.state.saved))
    this.props.checkIfSaved(event);
  }
  render() {
    const { company, title, resp, wDates, handleInput, handleSubmit } = this.props;
    return (
          <div>
            <div className="workHeaderContainer">
            <div className="workHeader">Work Experience</div>
            <button className={this.state.saved ? "workEditButton" : "hide"}  type="submit" onClick={(event) => this.handleSave(event)} type="submit">Edit</button>
                    </div>
                  <div className={this.state.saved ? "removeBackground" : "workContainer"}>
            <form className="workForm" onSubmit={(event) => handleSubmit(event)}>
              <div className="companyContainer">
                <label htmlFor="company" className={this.state.saved ? "hide" : ""}>Company</label>
                <Company company={company} saved={this.state.saved} handleInput={handleInput}/>
              </div>
              <div className="titleContainer">
                <label htmlFor="title" className={this.state.saved ? "hide" : ""}>Title</label>
                <Title title={title} saved={this.state.saved} handleInput={handleInput}/>
              </div>
              <div className="respContainer">
                <label htmlFor="resp" className={this.state.saved ? "hide" : ""}>Responsibilities</label>
                <Resp resp={resp} saved={this.state.saved} handleInput={handleInput}/>
              </div>
              <div className="wDatesContainer">
                <label htmlFor="wDates" className={this.state.saved ? "hide" : ""}>Dates</label>
                <Wdates wDates={wDates} saved={this.state.saved} handleInput={handleInput}/>
              </div>
              <button className={this.state.saved ? "hide" : "workSaveButton"} type="submit" onClick={(event) => this.handleSave(event)} type="submit">Save</button>
            </form>
            </div>
          </div>
    );
  }
}

export default Work;
