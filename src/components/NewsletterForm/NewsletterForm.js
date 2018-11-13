import React from 'react'
import logo from '../../images/logo_1.png'
import './NewsletterForm.css'
import { appendBusinessFormSubmit } from '../../helpers/spreadsheet'
import ReactModal from 'react-modal'

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      first_name: "",
      last_name: "",
      email: "",
      hdyh: "",
      message: ""
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  thankYou = () => {
    document.querySelector(".NewsletterForm-form").innerHTML =
      "Thanks for subscribing! ";
  };
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
    e.preventDefault();
    document.querySelector(".NewsletterForm-form").innerHTML =
      "<p>Thanks for subscribing!</p>";
    document
      .querySelector(".NewsletterForm-form")
      .setAttribute(
        "style",
        "color:rgb(100,100,100); font-size:1em; grid-template-columns:1fr; padding-top:60px;"
      );
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbw-9Y-RyMnK9oI6019d6xMAJvENTaRvIdFSXqP1gFM8u5OkAV6v/exec";
    const url = `${scriptUrl}?callback=ctrlq&first_name=${
      this.state.first_name
    }&last_name=${this.state.last_name}&email=${this.state.email}&company=${
      this.state.hdyh
    }&message=${this.state.message}`;
    fetch(url, { mode: "no-cors" }).then(
      res => {
        console.log("res", res);
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          hdyh: "",
          message: ""
        });
      },
      err => console.log("err", err)
    );
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className="NewsletterForm">
        <div className="navButton" onClick={this.handleOpenModal}>
          Subscribe to Newsletter
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
          <h3 style={{ textAlign: "center" }}>Subscribe to our newsletter!</h3>
          <form className="NewsletterForm-form" onSubmit={this.onFormSubmit}>
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
              value={this.state.email}
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
              <option value="event">Event or Hackathon</option>
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

export default NewsletterForm;
