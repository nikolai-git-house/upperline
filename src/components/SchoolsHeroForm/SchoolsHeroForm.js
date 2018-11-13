import React from 'react'
import './SchoolsHeroForm.css'
import config from '../../config'
import axios from 'axios'
import { appendBusinessFormSubmit } from '../../helpers/spreadsheet'
import success from './success.png'
import marymount from './marymount.png'
import dwight from './dwight.svg'


class SchoolsHeroForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      message: ''
    };
  }


  handleInputChange = ({ target: { name, value }}) => this.setState(state => ({ [name]:value }))

  onFormSubmit = (e) => {
    e.preventDefault();
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbw-9Y-RyMnK9oI6019d6xMAJvENTaRvIdFSXqP1gFM8u5OkAV6v/exec';
    const url = `${scriptUrl}?callback=ctrlq&first_name=${this.state.first_name}&last_name=${this.state.last_name}&email=${this.state.email}&company=${this.state.company}&message=${this.state.message}`;
    fetch(url, {mode: 'no-cors'}).then(
      res => {
        console.log('res',res)
        this.setState({
          first_name: '',
          last_name: '',
          email: '',
          company: '',
          message: ''
        })
      },
      err => console.log('err',err)
    );
  }

  render(){
    return (
      <div
       className="SchoolsHeroForm" id="form"
      >
        <div className="little-red-thing"></div>
        <div className="SchoolsHeroForm-text">
          <h3>
            {`Let's work together`}
          </h3>
          <p>
            {
              `Empower computer science teachers in your school by connecting them to CS education experts,
               and give teachers who are founding a CS program or department access to the expertise they need
               to launch your program.`
            }
            <br />
          </p>
          <p>
            {
              `Schools including Marymount, the Dwight School, and Success Academy
              have worked with Upperline to offer workshops or classes to their students, and personalized
              training for their CS teachers.`
            }
            <br />
          </p>
          <div className="image-container">
            <img src={success} id="successLogo" />
            <img src={marymount} id="marymountLogo" />
            <img src={dwight} id="dwightLogo" />
          </div>
        </div>
        <form className="SchoolsHeroForm-form" onSubmit={this.onFormSubmit}>
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
          <input
            name="company"
            placeholder="Organization"
            value={this.state.company}
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
          <div className="button_box">
            <input
              style={{cursor:'pointer'}}
              className="button half"
              type="submit"
              value="Submit Inquiry"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SchoolsHeroForm
