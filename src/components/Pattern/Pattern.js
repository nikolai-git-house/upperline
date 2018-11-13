import React from 'react'
import pattern from '../../images/uc_pattern_linedot.png'
import './Pattern.css'

function Pattern(props){
  return (
    <div style={props.height} className={`Pattern ${props.pattern}`}></div>
  )
}

export default Pattern
