import React from 'react'
import './BusinessHeroForm.css'
import config from '../../config'
import axios from 'axios'
import { appendBusinessFormSubmit } from '../../helpers/spreadsheet'
import nyu_logo from './NYUlogo.jpg'
import google_logo from './google2.0.0.jpg'

class BusinessHeroForm extends React.Component {
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
    document.querySelector('.BusinessHeroForm-form').innerHTML="<p>Thank you for reaching out! We'll respond to your inquiry as soon as possible.</p>"
    document.querySelector('.BusinessHeroForm-form').setAttribute("style", "color:rgb(100,100,100); font-size:1em; grid-template-columns:1fr; padding-top:60px;")
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

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(this.state)
  //   // const appendCallback = () => {
  //   //   window.gapi.client
  //   //     .init({
  //   //       apiKey: config.apiKey,
  //   //       // Your API key will be automatically added to the Discovery Document URLs.
  //   //       discoveryDocs: config.discoveryDocs
  //   //     })
  //   //     .then(() => {
  //   //       // 3. Initialize and make the API request.
  //   //       appendBusinessFormSubmit(this.state, auth)
  //   //
  //   //     });
  //   // };
  //   // const callback = () =>  window.gapi.load('client', cb)
  //   //
  //   // window.gapi.auth.authorize({
  //   //   'client_id': config.clientId,
  //   //   'scope': "https://",
  //   //   'immediate': immediate
  //   // }, callback);
  //   // POST https://sheets.googleapis.com/v4/spreadsheets/spreadsheetId/values/Sheet1!A1:E1:append?valueInputOption=USER_ENTERED
  //
  //   // const url = `https://sheets.googleapis.com/v4/spreadsheets/1iAeqb3Em8XUgElx4K-SX_IsOH2GWNtzsSQWoCMl9RT0/values/Business_Form_Submissions!A1:E1:append?valueInputOption=USER_ENTERED&majorDimension=ROWS&key=AIzaSyAxuMCdKhVLZhaIaXk_8Isciq46LOUiS6k`
  //   // axios.post(url, {
  //   //   "range": "Sheet1!A1:E5",
  //   //   "majorDimension": "ROWS",
  //   //   "values": [[
  //   //     this.state.first_name,
  //   //     this.state.last_name,
  //   //     this.state.email,
  //   //     this.state.company,
  //   //     this.state.message,
  //   //   ]]
  //   // })
  //   // .then( res => console.log('res',res))
  //   // .catch( err => console.log('err',err))
  //   // window.gapi.load('client', cb)
  //   // submit information to Google Sheets
  //   // appendBusinessFormSubmit(this.state)
  //   // ideally triggers a success or failure toast/ui widget
  //   // clear form
  //   this.setState({
  //     first_name: '',
  //     last_name: '',
  //     email: '',
  //     company: '',
  //     message: ''
  //   })
  // }

  render(){
    return (
      <div
       className="BusinessHeroForm" id="form"
      >
        <div className="little-red-thing"></div>
        <div className="BusinessHeroForm-text">
          <h3>
            {`Let's work together`}
          </h3>
          <p>
            {
              `Transform your workforce and advance your computer science education
               initiatives with Upperline's business services.`
            }
            <br />
          </p>
          <p>
            {
              `Upperline works with industry leaders such as Google to lorem ipsum dolor sit amet. Consectectur edipicing elit, sed do elusmod tempur incididunt
              ut labore et dolore magna aliqua.`
            }
            <br />
          </p>
          <div>
            <img src={nyu_logo} /><img src={google_logo} id="google_logo" />
          </div>
        </div>
        <form className="BusinessHeroForm-form" onSubmit={this.onFormSubmit}>
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
            placeholder="Company"
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
//
// function BusinessHeroForm(props){
//   return (
//     <div
//      className="BusinessHeroForm"
//     >
//       <div className="little-red-thing"></div>
//       <div className="BusinessHeroForm-text">
//         <h2>
//           {`Let's work together`}
//           <br />
//         </h2>
//         <p>
//           {
//             `Transform your workforce and advance your computer science education
//              initiatives with Upperline's business services.`
//           }
//           <br />
//         </p>
//         <p>
//           {
//             `Upperline works with industry leaders such as Google to lorem ipsum dolor sit amet. Consectectur edipicing elit, sed do elusmod tempur incididunt
//             ut labore et dolore magna aliqua.`
//           }
//           <br />
//         </p>
//         <div><img src={nyu_logo} /><img src={google_logo} id="google_logo" /></div>
//       </div>
//       <div className="BusinessHeroForm-form">
//         <input className="half" placeholder="First Name" />
//         <input className="half" placeholder="Last Name" />
//         <input placeholder="Email Address" />
//         <input placeholder="Company" />
//         <textarea style={{resize:'none'}} className="big_input" placeholder="Message" />
//         <input style={{cursor:'pointer'}} className="button half" type="submit" value="Submit Inquiry" />
//       </div>
//     </div>
//   )
// }

export default BusinessHeroForm
