import React from 'react'
import './SplitInfo.css'
import nyu_logo from './NYUlogo.jpg'
import google_logo from './google2.0.0.jpg'
import SponsorshipForm from '../SponsorshipForm/SponsorshipForm'


function SplitInfo(props){
  return (
    <div className="SplitInfo">
      <div className="content">
        <div className="SplitInfo-left">
          <div className="little-red-thing"></div>
          <div className="left-content">
            <h2>
              {`Become a sponsor to create opportunities for all students to learn to code`}
              <br />
            </h2>
            <p>
              {
                `Our courses cost $2100 per student, but you can make a seat available for $1800 as an Upperline sponsor.`
              }
              <br />
            </p>
            <div className="images"><img src={nyu_logo} id="nyu_logo" /><img src={google_logo} id="google_logo" /></div>
          </div>
        </div>
        <div className="SplitInfo-right">
          <p>{`Upperline strives to recruit as diverse a student body as possible because we believe building amazing technology and creating rich learing experiences requires a cohort of students from different family situations. We reserve many of our seats for students requiring partial or complete scholarships, and we'd like your help to broaden this offering!`}</p>
          <p>{`When you contribute, you'll receive an email update from a student you sponsored at the end of the summer, as well as a link to their final project. Simply complete our form to sign up for our sponsorship program, and we will be in touch shortly. Our students, families, and our whole team at Upperline appreciate your help!`}</p>
          <div style={{cursor:'pointer'}} className="button"><SponsorshipForm/></div>
        </div>
      </div>
    </div>
  )
}

export default SplitInfo
