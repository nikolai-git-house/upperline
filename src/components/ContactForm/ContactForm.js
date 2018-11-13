import React from 'react'
import logo from '../../images/logo_1.png'
import './ContactForm.css'
import{HashLink as Link} from 'react-router-hash-link'
import ReactModal from 'react-modal'


class ContactForm extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      showModal: false,
      first_name: '',
      last_name: '',
      email: '',
      hdyh: '',
      message: '',
      iama:'',
      phone:''
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  thankYou = ()=>{
    document.querySelector(".ContactForm-form").innerHTML="Thank you for contacting us! We'll respond to you as soon as possible. "
  }
  handleInputChange = ({ target: { name, value }}) => this.setState(state => ({ [name]:value }))



  handleOpenModal = ()=>{
    this.setState({ showModal: true });
  }
  handleCloseModal = ()=>{
    console.log("closed")
    this.setState({ showModal: false })
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    document.querySelector('.ContactForm-form').innerHTML="<p>Thank you for reaching out! We'll respond to your inquiry as soon as possible.</p>"
    document.querySelector('.ContactForm-form').setAttribute("style", "color:rgb(100,100,100); font-size:1em; grid-template-columns:1fr; padding-top:60px;")
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbw-9Y-RyMnK9oI6019d6xMAJvENTaRvIdFSXqP1gFM8u5OkAV6v/exec';
    const url = `${scriptUrl}?callback=ctrlq&first_name=${this.state.first_name}&last_name=${this.state.last_name}&email=${this.state.email}&hdyh=${this.state.hdyh}&message=${this.state.message}`;
    fetch(url, {mode: 'no-cors'}).then(
      res => {
        console.log('res',res)
        this.setState({
          first_name: '',
          last_name: '',
          email: '',
          hdyh: '',
          message: ''
        })
      },
      err => console.log('err',err)
    );
  }

  render(){
    const {showModal} = this.state
    console.log(showModal)
    return (
      <div className="ContactForm">
        <div className="navButton" onClick={this.handleOpenModal}>
            <h4> Contact Us</h4>
        </div>
        <ReactModal
           isOpen={showModal}
           contentLabel="Minimal Modal Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={true}
        >
            <button onClick={this.handleCloseModal} className="close-button">X</button>
            <h3>Contact Us</h3>
            <form className="ContactForm-form" onSubmit={this.onFormSubmit}>
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
                name="phone"
                placeholder="Phone (please only fill out if you'd like a call from us)"
                value={this.state.phone}
                className="half"
                onChange={this.handleInputChange}
              />
              <textarea
                style={{resize:'none'}}
                name="message"
                className="big_input"
                placeholder="Message"
                value={this.state.message}
                onChange={this.handleInputChange}
              />
              <select
                name="hdyh"
                placeholder="How did you hear about us?"
                className="half"
                onChange={this.handleInputChange}
              >

                <option disabled selected>How did you hear about us?</option>
                <option value="friend">Friend</option>
                <option value="google search">Google</option>
                <option value="school">School</option>
                <option value="Event">Event or Hackathon</option>
              </select>
              <select
                name="iama"
                placeholder="I am a"
                className="half"
                onChange={this.handleInputChange}

              >
                <option disabled selected>I am a </option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
                <option value="educator">Educator</option>
                <option value="organization leader">Organization leader</option>
                <option value="other">Other</option>
              </select>

              <div className="button_box">
                <input
                  style={{cursor:'pointer'}}
                  className="button half"
                  type="submit"
                  value="Submit Inquiry"
                />
              </div>
            </form>
        </ReactModal>
      </div>
    )
  }
}

export default ContactForm
