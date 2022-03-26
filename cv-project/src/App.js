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
        name: "John Doe",
        email: "johndoe@johndoe.com",
        phone: "1234567890",
        school: "A",
        degree: "B",
        eDates: "2000",
        company: "X",
        title: "Y",
        resp: "Z",
        wDates: "3000",
      };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, () => console.log(this.state));
  }

  handleSubmit (event) {
    event.preventDefault();
    switch (event.target.className) {
      case "generalForm":
        this.setState({
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
        }, () => console.log(this.state))
        break;
      case "educationForm":
        this.setState({
          school: this.state.school,
          degree: this.state.degree,
          eDates: this.state.eDates,
        }, () => console.log(this.state))
        break;
      case "workForm":
        this.setState({
          company: this.state.company,
          title: this.state.title,
          resp: this.state.phorespne,
          wDates: this.state.wDates,
        }, () => console.log(this.state))
        break;
      case "createCVButton":
        this.setState({ 
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
        }, () => console.log(this.state));
        break;
      }
    
    // }
  }


  render() {
    const { name, email, phone, school, degree, eDates, company, title, resp, wDates} = this.state
    return (
      <div>
        <div className="headerContainer">
          <Header /> 
        </div>
      <div className="app">
        <General name={name} email={email} phone={phone} handleInput={this.handleInput} handleSubmit={this.handleSubmit}/>
        <Education school={school} degree={degree} eDates={eDates} handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
        <Work company={company} title={title} resp={resp} wDates={wDates} handleInput={this.handleInput} handleSubmit={this.handleSubmit} />
        <button className="createCVButton" onClick={(event) => this.handleSubmit(event)}>Create CV</button>
      </div>
      </div>
    )
  }
}
export default App;
