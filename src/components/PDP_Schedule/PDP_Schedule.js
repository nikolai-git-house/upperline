import React from 'react'
import './PDP_Schedule.css'
import config from '../../config'
import { load } from '../../helpers/spreadsheet'

class PDP_Schedule extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    courses: [],
    monthsDisplayed:[],
    filters:["iOS Development with Swift"],
    error: null,
    today: new Date(),
    displayedCourses:5
  }
}

  componentWillReceiveProps(nextProps){
    if(this.props.filters!==nextProps.course){
      this.setState(prevState => ({
        filters:[nextProps.course],
      }))
    }
  }

  onLoad = (data, error) => {
    if (data) {
      const courses = data.courses;
      this.setState(prevState => ({
        courses : courses,
        filters:[this.props.course],
        monthsDisplayed:courses.map(course=>{
          return(course.month)
        }).slice(0,4)
      }))
    }
    else {
      this.setState({ error });
    }
  }

  // updateHeight = () => {
  //   const coursesLength=this.state.courses.length
  //   const coursesObj = this.state.courses
  //   const {displayedCourses, monthsDisplayed}=this.state
  //   let coursesToAdd=[]
  //   let i
  //   let numberToAdd
  //   if ((coursesLength-displayedCourses)>2){
  //     numberToAdd=3
  //     for (i=displayedCourses; i<(numberToAdd+displayedCourses);i++){
  //       coursesToAdd.push(coursesObj[i].month)
  //     }
  //     console.log(monthsDisplayed.concat(coursesToAdd))
  //   }
  //   else if ((coursesLength-displayedCourses)>1){
  //     numberToAdd=coursesLength-displayedCourses
  //     for (i=(displayedCourses); i<(numberToAdd+displayedCourses);i++){
  //       coursesToAdd.push(coursesObj[i].month)
  //     }
  //     console.log(monthsDisplayed.concat(coursesToAdd))
  //   }
  //   this.setState(prevState => ({
  //     displayedCourses: prevState.displayedCourses+numberToAdd,
  //     monthsDisplayed: monthsDisplayed.concat(coursesToAdd)
  //   }))
  //
  // }


  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load('client', this.start);
  }

  start = () => {
    // 2. Initialize the JavaScript client library.

    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        load(this.onLoad)

      });
  };


  filterOptions = (value, id) => {
    console.log("functionRan")
    let result=[]
    console.log(id)
    document.getElementById(id).classList.toggle("purple")
    const {filters} = this.state
    if (filters.includes(value)){
      result=filters.filter(word => word != value)
      this.setState(prevState => ({
        filters:result
      }))
    }
    else {
      filters.push(value)
      result = filters
      this.setState(prevState => ({
        filters:result
      }))
    }

  }

  activeFilter = (id) => {
    document.getElementById(id).classList.toggle("hidden")
  }


  render() {
    const displayMonths=['Jan', 'Feb', 'Mar', "Apr", 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    // const { courses, error, today } = this.state
    const {courses,error,today,displayedCourses,filters,height} = this.state
    const day= today.getDate()
    const month= today.getMonth()
    const year=today.getFullYear()
    let coursesToDisplay=[]
    console.log(filters)
    courses.forEach((course,idx) =>{
      if (filters.includes(course.name)){
        coursesToDisplay.push(course)
      }
    })
    const displayed = coursesToDisplay.slice(0,displayedCourses)
    const containerHeight={
      height: `${displayed.length*200+240}px`
    }
    let nextMonthCourses=[]
    let monthsDisplayed=this.state.monthsDisplayed


    if (error) {
      return (<div className="PDP_Schedule">{this.state.error}</div>)
    }

    else if(displayed.length < 1){
      return(
        <div className="PDP_Schedule pdp_detail" id="PDPSchedule" style={containerHeight}>
          <div className="title">
            <h3>Upcoming classes</h3>
          </div>
          <div className="schedule-holder">
            <div className="Schedule_content" >
              <div className="course-holder">
                <p style={{textAlign:'center'}}>There are no upcoming sections of this course at this time. Please check back later!</p>
              </div>
            </div>
          </div>
      </div>
      )
    }

    return (
      <div className="PDP_Schedule pdp_detail" id="PDPSchedule" style={containerHeight}>
        <div className="title">
          <h3>Upcoming classes</h3>
        </div>
        <div className="schedule-holder">
          <div className="Schedule_content" >

            <div className="course-holder">
              {displayed.map((course, i) => (
                <div className="course" key={i}>
                  <div className="icon-holder">
                          <i
                            className={course.icon}
                            style={{
                              background: course.background
                            }}
                          ></i>
                  </div>

                  <div className="course-content">
                    <p className="muted_text">{course.duration} {course.type}</p>
                    <h3 style={{textDecoration:'none'}}>{course.name}</h3>
                    <div className="address">
                      <p className="description">{course.locationName}</p>
                      <p className="description" id="address">{course.address}</p>
                      <br/>
                      <br/>
                    </div>
                    <a><p><i className="fas fa-map-marker-alt highlight-text"></i>Get Directions</p></a>
                  </div>

                  <div className="course-info">
                    <p className="course-dates"><i className="fas fa-calendar-alt"></i>{course.startdate} {(course.enddate) ? `- ${course.enddate}` : ""}, {course.year}</p>
                    <p className="level"><i className="far fa-user"></i>Age {course.age}</p>
                    <p className="price"><i className="fas fa-dollar-sign"></i>{course.price}</p>
                    <a target ="blank()" href="https://upperlinecode.campbrainregistration.com"><div className="button">Register</div></a>
                  </div>
                </div>
                    ))}
              </div>
            </div>
      </div>
    </div>
    );

  }
}
export default PDP_Schedule
