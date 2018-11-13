import React from 'react'
import logo from '../../images/logo_1.png'
import './DownloadForm.css'
import { appendBusinessFormSubmit } from '../../helpers/spreadsheet'
import ReactModal from 'react-modal'


class DownloadForm extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      showModal: false,
      first_name: '',
      last_name: '',
      email: '',
      phone:'',
      hdyh: '',
      message: '',
      iama:'',
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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
    console.log(this.state)
    e.preventDefault();
    document.querySelector('.DownloadForm-form').innerHTML="<p>Thanks for subscribing!</p>"
    document.querySelector('.DownloadForm-form').setAttribute("style", "color:rgb(100,100,100); font-size:1em; grid-template-columns:1fr; padding-top:60px;")
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbw-9Y-RyMnK9oI6019d6xMAJvENTaRvIdFSXqP1gFM8u5OkAV6v/exec';

    const url = `${scriptUrl}?callback=ctrlq&first_name=${this.state.first_name}&last_name=${this.state.last_name}&email=${this.state.email}&hdyh=${this.state.hdyh}&iama=${this.state.iama}&formSubmit=newsletter`;
    fetch(url, {mode: 'no-cors'}).then(
      res => {
        console.log('res',res)
        this.setState({
          first_name: '',
          last_name: '',
          email: '',
          hdyh: '',
          message: '',
          iama:''
        })
      },
      err => console.log('err',err)
    );
    window.open('https://drive.google.com/file/d/1waaB6jkJbp-DeYfvxPtgWJGqjBXnat7N/view?usp=sharing','_blank')
  }

  render(){
    const {showModal} = this.state
    console.log(this.state)
    return (
      <div className="DownloadForm">
        <div className="navButton button" onClick={this.handleOpenModal}>
            {this.props.title}
        </div>
        <ReactModal
           isOpen={showModal}
           contentLabel="Minimal Modal Example"
           onRequestClose={this.handleCloseModal}
           shouldCloseOnOverlayClick={true}
        >
            <button onClick={this.handleCloseModal} className="close-button">X</button>
            <h3 style={{textAlign:'center'}}>{this.props.title}</h3>
            <form className="DownloadForm-form" onSubmit={this.onFormSubmit} >
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
              <input
                name="phone"
                placeholder="Phone (if you'd like us to give you a call)"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
                <div className="button_box" >
                  <input
                    style={{cursor:'pointer'}}
                    className="button half"
                    type="submit"
                    value="Submit"
                  />
                </div>
            </form>
        </ReactModal>
      </div>
    )
  }
}

export default DownloadForm
