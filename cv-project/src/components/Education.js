import React, { useState } from "react";
import "../styles/Education.css";
import School from "./School";
import Degree from "./Degree";
import Edates from "./eDates";

const Education = (props) => {
    const [state, setState] = useState({saved: false});

  const handleSave = (event) => {
    event.target.className === 'educationSaveButton' ?
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
    const { school, degree, eDates, handleInput, handleSubmit } = props;
    return (
        <div>
          <div className="educationHeaderContainer">
            <div className="educationHeader">Education</div>
            <button className={state.saved ? "educationEditButton" : "hide"} type="submit" onClick={(event) => handleSave(event)}>Edit</button>
          </div>
          <div className={state.saved ? "removeBackground" : "educationContainer"}>
            <form className="educationForm" onSubmit={(event) => handleSubmit(event)}>
              <div className="schoolContainer">
                <label htmlFor="school" className={state.saved ? "hide" : ""}>School:</label>
                <School school={school} saved={state.saved} handleInput={handleInput}/>
              </div>
              <div className="degreeContainer">
                <label htmlFor="degree" className={state.saved ? "hide" : ""}>Degree:</label>
                <Degree degree={degree} saved={state.saved} handleInput={handleInput}/>
              </div>
              <div className="eDatesContainer">
                <label htmlFor="eDates" className={state.saved ? "hide" : ""}>Dates</label>
                <Edates eDates={eDates} saved={state.saved} handleInput={handleInput}/>
              </div>
              <button className={state.saved ? "hide" : "educationSaveButton"}  type="submit" onClick={(event) => handleSave(event)}>Save</button>
            </form>
          </div>
        </div>
    );
}

export default Education;
