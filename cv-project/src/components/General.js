import React, { Component } from "react";
import "../styles/General.css";

class General extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, email, phone, handleNameInput, handleEmailInput, handlePhoneInput } = this.props;
    return (
        <div>
          <div className="generalHeaderContainer">
            <div className="generalHeader">General</div>
            <button className="generalEditButton" type="submit">Edit</button>
          </div>
          <div className="generalContainer">
            <form className="generalForm">
              <div className="nameContainer">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  className="name"
                  type="text"
                  value={name || ''}
                  onChange={(event) => handleNameInput(event)}
                ></input>
              </div>
              <div className="emailContainer">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  className="email"
                  type="text"
                  value={email || ''}
                  onChange={(event) => handleEmailInput(event)}
                ></input>
              </div>
              <div className="phoneContainer">
                <label htmlFor="phone">Phone Number</label>
                <input
                  name="phone"
                  className="phone"
                  type="text"
                  value={phone || ''}
                  onChange={(event) => handlePhoneInput(event)}
                ></input>
              </div>
              <button className="generalSubmitButton" type="submit">Save</button>
            </form>
          </div>
        </div>
    );
  }
}

export default General;
