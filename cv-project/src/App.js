import React, {useState} from "react";
import "./App.css";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
import Header from "./components/Header";

const App = () => {
    const [state, setState] = useState({
      name: "Odin McOdinson",
      email: "Odin@OdinProject.com",
      phone: "1234567890",
      school: "Lorem Ipsum",
      degree: "Lorem Ipsum",
      eDates: "1/1/1",
      company: "Lorem Ipsum",
      title: "Lorem Ipsum",
      resp: "Lorem Ipsum",
      wDates: "9/9/9",
      isSubmitted: false,
      generalSaved: false,
      educationSaved: false,
      workSaved: false
    });

  const handleInput = (event) => {
    setState({...state,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit  = (event) => {
    event.preventDefault();
    switch (event.target.className) {
      case "generalForm":
        setState({
          ...state,
          name: state.name,
          email: state.email,
          phone: state.phone,
        })
        break;
      case "educationForm":
        setState({
          ...state,
          school: state.school,
          degree: state.degree,
          eDates: state.eDates,
        })
        break;
      case "workForm":
        setState({
          ...state,
          company: state.company,
          title: state.title,
          resp: state.resp,
          wDates: state.wDates,
        })
        break;
      case "createCVButton":
        setState({
          ...state,
          name: state.name,
          email: state.email,
          phone: state.phone,
          school: state.school,
          degree: state.degree,
          eDates: state.eDates,
          company: state.company,
          title: state.title,
          resp: state.resp,
          wDates: state.wDates,
          isSubmitted: !state.isSubmitted
        });
        break;
      }
  }

  const checkIfSaved = (event) => {
    switch (event.target.className) {
      case "generalSaveButton":
        setState({
          ...state,
          generalSaved: true
        })
        break;
      case "educationSaveButton":
        setState({
          ...state,
          educationSaved: true
        })
        break;
      case "workSaveButton":
        setState({
          ...state,
          workSaved: true
        })
        break;
    }
  }
  
    const { name, email, phone, school, degree, eDates, company, title, resp, wDates, isSubmitted, generalSaved, educationSaved, workSaved} = state
    return (
        (!state.isSubmitted) ?
      <div>
        <div className="headerContainer">
          <Header /> 
        </div>
      <div className="app">
        <General name={name} email={email} phone={phone} handleInput={handleInput} handleSubmit={handleSubmit} isSubmitted={isSubmitted} checkIfSaved={checkIfSaved} generalSaved={generalSaved} educationSaved={educationSaved} workSaved={workSaved}/>
        <Education school={school} degree={degree} eDates={eDates} handleInput={handleInput} handleSubmit={handleSubmit} isSubmitted={isSubmitted} checkIfSaved={checkIfSaved} generalSaved={generalSaved} educationSaved={educationSaved} workSaved={workSaved}/>
        <Work company={company} title={title} resp={resp} wDates={wDates} handleInput={handleInput} handleSubmit={handleSubmit} isSubmitted={isSubmitted} checkIfSaved={checkIfSaved} generalSaved={generalSaved} educationSaved={educationSaved} workSaved={workSaved}/>
        <button className={(generalSaved && educationSaved && workSaved) ? "createCVButton" : "hide"} onClick={(event) => handleSubmit(event)}>Create CV</button>
      </div>
      </div> :
        <div class="parent">
          <div class="div1">General </div>
          <div class="div2">Name: </div>
          <div class="div3">{name} </div>
          <div class="div4">Email: </div>
          <div class="div5">{email} </div>
          <div class="div6">Phone </div>
          <div class="div7">{phone} </div>
          <div class="div8">Education </div>
          <div class="div9">School: </div>
          <div class="div10">{school} </div>
          <div class="div11">Degree: </div>
          <div class="div12">{degree} </div>
          <div class="div13">Dates Attended: </div>
          <div class="div14">{eDates} </div>
          <div class="div15">Work Experience </div>
          <div class="div16">Company: </div>
          <div class="div17">{company} </div>
          <div class="div18">Title: </div>
          <div class="div19">{title} </div>
          <div class="div20">Responsibilities: </div>
          <div class="div21">{resp} </div>
          <div class="div22">Dates Worked: </div>
          <div class="div23">{wDates} </div>
      </div>
    )
}
export default App;
