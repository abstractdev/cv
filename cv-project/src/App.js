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
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleSchoolInput = this.handleSchoolInput.bind(this);
    this.handleDegreeInput = this.handleDegreeInput.bind(this);
    this.handleEdatesInput = this.handleEdatesInput.bind(this);
    this.handlePhoneInput = this.handlePhoneInput.bind(this);
    this.handleCompanyInput = this.handleCompanyInput.bind(this);
    this.handleTitleInput = this.handleTitleInput.bind(this);
    this.handleRespInput = this.handleRespInput.bind(this);
    this.handleWdatesInput = this.handleWdatesInput.bind(this);
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

  handleSchoolInput(event) {
    event.preventDefault();
    this.setState({ 
      education: {
        school: event.target.value
      },
    }, () => console.log(this.state.education.school));
  }
  handleDegreeInput(event) {
    event.preventDefault();
    this.setState({ 
      education: {
        degree: event.target.value
      },
    }, () => console.log(this.state.education.degree));
  }
  handleEdatesInput(event) {
    event.preventDefault();
    this.setState({ 
      education: {
        dates: event.target.value
      },
    }, () => console.log(this.state.education.dates));
  }
  handleCompanyInput(event) {
    event.preventDefault();
    this.setState({ 
      work: {
        company: event.target.value
      },
    }, () => console.log(this.state.work.company));
  }
  handleTitleInput(event) {
    event.preventDefault();
    this.setState({ 
      work: {
        title: event.target.value
      },
    }, () => console.log(this.state.work.title));
  }
  handleRespInput(event) {
    event.preventDefault();
    this.setState({ 
      work: {
        resp: event.target.value
      },
    }, () => console.log(this.state.work.resp));
  }
  handleWdatesInput(event) {
    event.preventDefault();
    this.setState({ 
      work: {
        dates: event.target.value
      },
    }, () => console.log(this.state.work.dates));
  }

  render() {
    const { general, education, work} = this.state
    return (
      <div>
        <div className="headerContainer">
          <Header /> 
        </div>
      <div className="app">
        <General name={general.name} email={general.email} phone={general.phone} handleNameInput={this.handleNameInput} handleEmailInput={this.handleEmailInput} handlePhoneInput={this.handlePhoneInput}/>
        <Education school={education.school} degree={education.degree} eDates={education.dates} handleSchoolInput={this.handleSchoolInput} handleDegreeInput={this.handleDegreeInput} handleEdatesInput={this.handleEdatesInput}/>
        <Work company={work.company} title={work.title} resp={work.resp} wDates={work.dates} handleCompanyInput={this.handleCompanyInput} handleTitleInput={this.handleTitleInput} handleRespInput={this.handleRespInput} handleWdatesInput={this.handleWdatesInput}/>
        <button className="createCVButton" type="submit">Create CV</button>
      </div>
      </div>
    );
  }
}
export default App;
