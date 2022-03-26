import React, { Component } from "react";
import "./App.css";
import General from "./components/General";
import Education from "./components/Education";
import Work from "./components/Work";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        name: "John Doe",
        email: "johndoe@johndoe.com",
        phone: "1234567890",
      },
      education: {
        school: "A",
        degree: "B",
        dates: "2000",
      },
      work: {
        company: "X",
        title: "Y",
        resp: "Z",
        dates: "3000",
      },
    };
    this.handleNameInput = this.handleNameInput.bind(this)
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handlePhoneInput = this.handlePhoneInput.bind(this)
  }
  
  handleNameInput(event) {
    event.preventDefault();
    this.setState({ 
      general: {
        name: event.target.value
      },
    }, () => console.log(this.state.general.name));
  }
  handleEmailInput(event) {
    event.preventDefault();
    this.setState({ 
      general: {
        email: event.target.value
      },
    }, () => console.log(this.state.general.email));
  }
  handlePhoneInput(event) {
    event.preventDefault();
    this.setState({ 
      general: {
        phone: event.target.value
      },
    }, () => console.log(this.state.general.phone));
  }

  render() {
    const { general, education, work} = this.state
    return (
      <div>
        <div className="headerContainer">
          <Header /> 
        </div>
      <div className="app">
        <General name={general.name} email={general.name} phone={general.phone} handleNameInput={this.handleNameInput} handleEmailInput={this.handleEmailInput} handlePhoneInput = {this.handlePhoneInput}/>
        <Education school={education.school} degree={education.degree} eDates={education.dates} />
        <Work company={work.company} title={work.title} resp={work.resp} wDates={work.dates}  />
        <button className="createCVButton" type="submit">Create CV</button>
      </div>
      </div>
    );
  }
}
export default App;
