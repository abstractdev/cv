import React, { useState } from "react";
import "../styles/Work.css";
import Company from "./Company";
import Title from "./Title";
import Resp from "./Resp";
import Wdates from "./Wdates";

const Work = (props) => {
  const [state, setState] = useState({saved: false});

  const handleSave = (event) => {
    event.target.className === 'workSaveButton' ?
    setState({
      ...state,
      saved: true 
    }):
    setState({
      ...state,
      saved: false 
    })
    props.checkIfSaved(event);
  }
    const { company, title, resp, wDates, handleInput, handleSubmit } = props;
    return (
          <div>
            <div className="workHeaderContainer">
            <div className="workHeader">Work Experience</div>
            <button className={state.saved ? "workEditButton" : "hide"}  type="submit" onClick={(event) => handleSave(event)} type="submit">Edit</button>
                    </div>
                  <div className={state.saved ? "removeBackground" : "workContainer"}>
            <form className="workForm" onSubmit={(event) => handleSubmit(event)}>
              <div className="companyContainer">
                <label htmlFor="company" className={state.saved ? "hide" : ""}>Company</label>
                <Company company={company} saved={state.saved} handleInput={handleInput}/>
              </div>
              <div className="titleContainer">
                <label htmlFor="title" className={state.saved ? "hide" : ""}>Title</label>
                <Title title={title} saved={state.saved} handleInput={handleInput}/>
              </div>
              <div className="respContainer">
                <label htmlFor="resp" className={state.saved ? "hide" : ""}>Responsibilities</label>
                <Resp resp={resp} saved={state.saved} handleInput={handleInput}/>
              </div>
              <div className="wDatesContainer">
                <label htmlFor="wDates" className={state.saved ? "hide" : ""}>Dates</label>
                <Wdates wDates={wDates} saved={state.saved} handleInput={handleInput}/>
              </div>
              <button className={state.saved ? "hide" : "workSaveButton"} type="submit" onClick={(event) => handleSave(event)} type="submit">Save</button>
            </form>
            </div>
          </div>
    );
}

export default Work;
