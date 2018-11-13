import React from 'react'
import './PDPHeroInset.css'

function PDPHeroInset(props){
  //props: description, duration, level, price
  return (
    <div className="PDPHeroInset">
      <div className="content">
          <div className="course-content">
            <p className="muted_text">Description</p>
            <p className="description">{props.description}</p>
          </div>

          <div className="course-info">
            <p className="muted_text">Overview</p>
            <div className="listItems">
              <p className="duration"><i className="fas fa-calendar-alt"></i>{props.duration}</p>
              <p className="level"><i className="far fa-user"></i>{props.level}</p>
              <p className="price"><i className="fas fa-dollar-sign"></i>{props.price}</p>
              <a href="#PDPSchedule"><div className="button">Upcoming Courses</div></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PDPHeroInset
