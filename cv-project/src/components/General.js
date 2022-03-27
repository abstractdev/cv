import React, { useState } from "react";
import "../styles/General.css";
import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";

const General = (props) => {
  const [state, setState] = useState({saved: false});

  const handleSave = (event) => {
    event.target.className === 'generalSaveButton' ?
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
  
    const { name, email, phone, handleInput, handleSubmit } = props;

    return (
        <div>
          <div className="generalHeaderContainer">
            <div className="generalHeader">General</div>
            <button className={state.saved ? "generalEditButton" : "hide"}type="submit" onClick={(event) => handleSave(event)}>Edit</button>
          </div>
          <div className= {state.saved ? "removeBackground" : "generalContainer"}>
            <form className="generalForm" onSubmit={(event) => handleSubmit(event)}>
              <div className="nameContainer">
                <label htmlFor="name" className={state.saved ? "hide" : ""}>Name:</label>
                <Name name ={name} saved={state.saved} handleInput={handleInput}/>
              </div>
              <div className="emailContainer">
                <label htmlFor="email" className={state.saved ? "hide" : ""}>Email:</label>
                <Email email={email} saved={state.saved} handleInput={handleInput} />
              </div>
              <div className="phoneContainer">
                <label htmlFor="phone" className={state.saved ? "hide" : ""}>Phone Number:</label>
                <Phone phone={phone} saved={state.saved} handleInput={handleInput}/>
              </div>
              <button className={state.saved ? "hide" : "generalSaveButton"} type="submit" onClick={(event) => handleSave(event)}>Save</button>
            </form>
          </div>
        </div>
    );
}
export default General;
