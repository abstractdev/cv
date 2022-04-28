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
      name: "Odin McOdinson",
      email: "Odin@TheOdinProject.com",
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
      workSaved: false,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkIfSaved = this.checkIfSaved.bind(this);
  }

  handleInput(event) {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => console.log(this.state)
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    switch (event.target.className) {
      case "generalForm":
        this.setState(
          {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
          },
          () => console.log(this.state)
        );
        break;
      case "educationForm":
        this.setState(
          {
            school: this.state.school,
            degree: this.state.degree,
            eDates: this.state.eDates,
          },
          () => console.log(this.state)
        );
        break;
      case "workForm":
        this.setState(
          {
            company: this.state.company,
            title: this.state.title,
            resp: this.state.resp,
            wDates: this.state.wDates,
          },
          () => console.log(this.state)
        );
        break;
      case "createCVButton":
        this.setState(
          {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            school: this.state.school,
            degree: this.state.degree,
            eDates: this.state.eDates,
            company: this.state.company,
            title: this.state.title,
            resp: this.state.resp,
            wDates: this.state.wDates,
            isSubmitted: !this.state.isSubmitted,
          },
          () => console.log(this.state)
        );
        break;
      default:
        break;
    }
  }

  checkIfSaved(event) {
    switch (event.target.className) {
      case "generalSaveButton":
        this.setState(
          {
            generalSaved: true,
          },
          () => console.log(this.state.generalSaved)
        );
        break;
      case "educationSaveButton":
        this.setState({
          educationSaved: true,
        });
        break;
      case "workSaveButton":
        this.setState({
          workSaved: true,
        });
        break;
      default:
        break;
    }
  }

  render() {
    const {
      name,
      email,
      phone,
      school,
      degree,
      eDates,
      company,
      title,
      resp,
      wDates,
      isSubmitted,
      generalSaved,
      educationSaved,
      workSaved,
    } = this.state;
    return !this.state.isSubmitted ? (
      <div>
        <div className="headerContainer">
          <Header />
        </div>
        <div className="app">
          <General
            name={name}
            email={email}
            phone={phone}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            isSubmitted={isSubmitted}
            checkIfSaved={this.checkIfSaved}
            generalSaved={generalSaved}
            educationSaved={educationSaved}
            workSaved={workSaved}
          />
          <Education
            school={school}
            degree={degree}
            eDates={eDates}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            isSubmitted={isSubmitted}
            checkIfSaved={this.checkIfSaved}
            generalSaved={generalSaved}
            educationSaved={educationSaved}
            workSaved={workSaved}
          />
          <Work
            company={company}
            title={title}
            resp={resp}
            wDates={wDates}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            isSubmitted={isSubmitted}
            checkIfSaved={this.checkIfSaved}
            generalSaved={generalSaved}
            educationSaved={educationSaved}
            workSaved={workSaved}
          />
          <button
            className={
              generalSaved && educationSaved && workSaved
                ? "createCVButton"
                : "hide"
            }
            onClick={(event) => this.handleSubmit(event)}
          >
            Create CV
          </button>
        </div>
      </div>
    ) : (
      <div class="parent">
        <div class="div1">General </div>
        <div class="div2">Name: </div>
        <div class="div3">{name} </div>
        <div class="div4">Email: </div>
        <div class="div5">{email} </div>
        <div class="div6">Phone: </div>
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
    );
  }
}
export default App;
