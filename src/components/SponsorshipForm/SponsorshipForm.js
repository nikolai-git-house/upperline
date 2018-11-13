import React from "react";
import logo from "../../images/logo_1.png";
import "./SponsorshipForm.css";
import { appendBusinessFormSubmit } from "../../helpers/spreadsheet";
import ReactModal from "react-modal";

class SponsorshipForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      first_name: "",
      last_name: "",
      email: "",
      hdyh: "",
      message: "",
      iama: ""
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleInputChange = ({ target: { name, value } }) =>
    this.setState(state => ({ [name]: value }));

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };
  handleCloseModal = () => {
    console.log("closed");
    this.setState({ showModal: false });
  };
  onFormSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    document.querySelector(".SponsorshipForm-form").innerHTML =
      "<p>Thanks for reaching out! We'll get back to you as soon as possible.</p>";
    document
      .querySelector(".SponsorshipForm-form")
      .setAttribute(
        "style",
        "color:rgb(100,100,100); font-size:1em; grid-template-columns:1fr; padding-top:60px;"
      );
    document.querySelectorAll(".sponsorship-title").forEach(item => {
      item.setAttribute("style", "visibility:hidden; display:none;");
    });
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbw-9Y-RyMnK9oI6019d6xMAJvENTaRvIdFSXqP1gFM8u5OkAV6v/exec";

    const url = `${scriptUrl}?callback=ctrlq&first_name=${
      this.state.first_name
    }&last_name=${this.state.last_name}&email=${this.state.email}&hdyh=${
      this.state.hdyh
    }&iama=${this.state.iama}&formSubmit=newsletter`;
    console.log(url);
    fetch(url, { mode: "no-cors" }).then(
      res => {
        console.log("res", res);
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          hdyh: "",
          message: "",
          iama: ""
        });
      },
      err => console.log("err", err)
    );
  };

  render() {
    const { showModal } = this.state;
    console.log(this.state);
    return (
      <div className="SponsorshipForm">
        <div className="navButton" onClick={this.handleOpenModal}>
          Become a Partner
        </div>
        <ReactModal
          isOpen={showModal}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end"
            }}
          >
            <button onClick={this.handleCloseModal} className="close-button">
              X
            </button>
          </div>
          <h3 className="sponsorship-title" style={{ textAlign: "center" }}>
            Become a Partner in Sponsoring Coding Scholarships
          </h3>
          <p
            className="sponsorship-title"
            style={{ textAlign: "center", marginBottom: "10px" }}
          >
            Leave us a note about your interest in sponsoring coding
            scholarships and we'll get back to you with more information.
          </p>
          <form className="SponsorshipForm-form" onSubmit={this.onFormSubmit}>
            <input
              name="first_name"
              className="half"
              placeholder="First Name"
              value={this.state.first_name}
              onChange={this.handleInputChange}
            />
            <input
              name="last_name"
              className="half"
              placeholder="Last Name"
              value={this.state.last_name}
              onChange={this.handleInputChange}
            />
            <input
              name="email"
              placeholder="Email Address"
              className="half"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <input
              name="company"
              className="half"
              placeholder="Company"
              value={this.state.company}
              onChange={this.handleInputChange}
            />
            <textarea
              style={{ resize: "none" }}
              name="message"
              className="big_input"
              placeholder="Message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
            <select
              name="hdyh"
              placeholder="How did you hear about us?"
              onChange={this.handleInputChange}
            >
              <option disabled selected>
                How did you hear about us?
              </option>
              <option value="friend">Friend</option>
              <option value="google search">Google</option>
              <option value="school">School</option>
              <option value="Event">Event or Hackathon</option>
            </select>

            <div className="button_box">
              <input
                style={{ cursor: "pointer" }}
                className="button half"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </ReactModal>
      </div>
    );
  }
}

export default SponsorshipForm;
