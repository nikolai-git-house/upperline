import React from 'react'
import './TwoWeekSchedule.css'

function TwoWeekSchedule(props){
  const color= props.color
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const week1=["Variables", "Functions", "Data Structures", "Loops and Iteration", "Object Orientation"]
  const week2=[{text:"Core of a supporting language or library", color:`${color}0.5)`},{text:"Advanced supporting language or library", color:`${color}0.5)`},{text:"Project Mode", color:`${color} 1)`},{text:"Project Mode", color:`${color} 1)`},{text:"Project Mode & Parent Demo Day", color:`${color} 1)`}]
    //color:"rgba(234, 186, 107, 0.5)"
  // const weekLayoutStyle={
  //   display:'grid',
  //   gridTemplateRows:``
  // }

  return (
    <div className="TwoWeekSchedule pdp_detail" id="TwoWeekSchedule">
      <div className="content">
        <div className="title">
          <h3>Two week schedule </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do elusmod tempor incididunt ut labore.</p>
        </div>
        <div className="schedule">
          <div className="weekdays muted_text">
            {weekdays.map(day => (
              <div className="outer"><div><p>{day}</p></div></div>
            ))}

          </div>
          <div className="week1">
            {week1.map(day => (
              <div className="outer"><div style={{background:`${color} 0.3)`}}><p>{day}</p></div></div>
            ))}
          </div>
          <div className="week2">
            {week2.map(day => (
              <div className="outer"><div style={{background: `${day.color}`}}><p>{day.text}</p></div></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoWeekSchedule
