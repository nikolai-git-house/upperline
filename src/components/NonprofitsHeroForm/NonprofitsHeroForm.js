import React from 'react'
import './NonprofitsHeroForm.css'
import config from '../../config'
import axios from 'axios'
import { appendBusinessFormSubmit } from '../../helpers/spreadsheet'
import scripted_logo from './scriptedLogo.png'
import seo_logo from './SEOLogo.svg'

class NonprofitsHeroForm extends React.Component {
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
       className="NonprofitsHeroForm" id="form"
      >
        <div className="little-red-thing"></div>
        <div className="NonprofitsHeroForm-text">
          <h3>
            {`Let's work together`}
          </h3>
          <p>
            {
              `Create transformative experiences that connect young people to the world of code
              by running one of Upperline's pre-configured summer camps, or work with the team
              to design custom experiences that best fit your mission.`
            }
            <br />
          </p>
          <p>
            {
              `Upperline partnered with organizations including ScriptEd NYC and SEO to design and execute
              immersive programming for over 100 students in 2018.`
            }
            <br />
          </p>
          <div className="image-container">
            <img src={scripted_logo} />
            <img src={seo_logo} id="seoLogo" />
          </div>
        </div>
        <form className="NonprofitsHeroForm-form" onSubmit={this.onFormSubmit}>
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

export default NonprofitsHeroForm
