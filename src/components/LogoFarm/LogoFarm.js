import React from 'react'
import './LogoFarm.css'
import google_logo from './google.png'
import calhoun_logo from './calhoun.png'
import prep_logo from './prepforprep.png'
import sa_logo from './sa.png'
import scripted_logo from './scripted.png'

const imageStyle = {
  width: '60%',
}

function LogoFarm(props){
  return (
    <div className="LogoFarm">
      <div className="LogoHolder">
        <div className="Logo"><img src={google_logo} /></div>
        <div className="Logo"><img src={calhoun_logo} /></div>
        <div className="Logo" id="SA"><img src={sa_logo} /></div>
        <div className="Logo" id="ScriptEd"><img src={scripted_logo} /></div>
        <div className="Logo" id="Prep"><img  src={prep_logo} /></div>
      </div>
    </div>

  )
}

export default LogoFarm
