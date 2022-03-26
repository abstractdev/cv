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
    this.handleInput = this.handleInput.bind(this);
  }
  

  handleInput(event) {
    event.preventDefault();
    switch (event.target.className) {
      case 'name':
        this.setState({ 
          general: {
            name: event.target.value
          },
        }, () => console.log(this.state.general.name));
        break;
      case 'email':
        this.setState({ 
          general: {
            email: event.target.value
          },
        }, () => console.log(this.state.general.email));
        break;
      case 'phone':
        this.setState({ 
          general: {
            phone: event.target.value
          },
        }, () => console.log(this.state.general.phone));
        break;
      case 'school':
        this.setState({ 
          education: {
            school: event.target.value
          },
        }, () => console.log(this.state.education.school));
        break;
      case 'degree':
        this.setState({ 
          education: {
            degree: event.target.value
          },
        }, () => console.log(this.state.education.degree));
        break;
      case 'eDates':
        this.setState({ 
          education: {
            dates: event.target.value
          },
        }, () => console.log(this.state.education.dates));
        break;
      case 'company':
        this.setState({ 
          work: {
            company: event.target.value
          },
        }, () => console.log(this.state.work.company));
        break;
      case 'title':
        this.setState({ 
          work: {
            title: event.target.value
          },
        }, () => console.log(this.state.work.title));
        break;
      case 'resp':
        this.setState({ 
          work: {
            resp: event.target.value
          },
        }, () => console.log(this.state.work.resp));
        break;
      case 'wDates':
        this.setState({ 
          work: {
            dates: event.target.value
          },
        }, () => console.log(this.state.work.dates));
        break;
    }
  }


  render() {
    const { general, education, work} = this.state
    return (
      <div>
        <div className="headerContainer">
          <Header /> 
        </div>
      <div className="app">
        <General name={general.name} email={general.email} phone={general.phone} handleInput={this.handleInput}/>
        <Education school={education.school} degree={education.degree} eDates={education.dates} handleInput={this.handleInput} />
        <Work company={work.company} title={work.title} resp={work.resp} wDates={work.dates} handleInput={this.handleInput} />
        <button className="createCVButton" type="submit">Create CV</button>
      </div>
      </div>
    );
  }
}
export default App;
