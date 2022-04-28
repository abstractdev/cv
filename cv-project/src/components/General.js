import React, { Component } from "react";
import "../styles/General.css";
import Name from "./Name";
import Email from "./Email";
import Phone from "./Phone";

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
    };
    this.handleSave = this.handleSave.bind(this);
  }
  handleSave(event) {
    event.target.className === "generalSaveButton"
      ? this.setState(
          {
            saved: true,
          },
          () => console.log(this.state.saved)
        )
      : this.setState(
          {
            saved: false,
          },
          () => console.log(this.state.saved)
        );
    this.props.checkIfSaved(event);
  }

  render() {
    const { name, email, phone, handleInput, handleSubmit } = this.props;

    return (
      <div>
        <div className="generalHeaderContainer">
          <div className="generalHeader">General</div>
          <button
            className={this.state.saved ? "generalEditButton" : "hide"}
            type="submit"
            onClick={(event) => this.handleSave(event)}
          >
            Edit
          </button>
        </div>
        <div
          className={this.state.saved ? "removeBackground" : "generalContainer"}
        >
          <form
            className="generalForm"
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="nameContainer">
              <label htmlFor="name" className={this.state.saved ? "hide" : ""}>
                Name:
              </label>
              <Name
                name={name}
                saved={this.state.saved}
                handleInput={handleInput}
              />
            </div>
            <div className="emailContainer">
              <label htmlFor="email" className={this.state.saved ? "hide" : ""}>
                Email:
              </label>
              <Email
                email={email}
                saved={this.state.saved}
                handleInput={handleInput}
              />
            </div>
            <div className="phoneContainer">
              <label htmlFor="phone" className={this.state.saved ? "hide" : ""}>
                Phone Number:
              </label>
              <Phone
                phone={phone}
                saved={this.state.saved}
                handleInput={handleInput}
              />
            </div>
            <button
              className={this.state.saved ? "hide" : "generalSaveButton"}
              type="submit"
              onClick={(event) => this.handleSave(event)}
            >
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default General;
