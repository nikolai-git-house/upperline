import React from 'react'
import './Schedule.css'
import config from '../../config'
import { load } from '../../helpers/spreadsheet'

class Schedule extends React.Component {
  state = {
    courses: [],
    monthsDisplayed:[],
    filters:[],
    error: null,
    today: new Date(),
    height:165,
    displayedCourses:5
  };

  onLoad = (data, error) => {
    if (data) {
      const { courses } = data
      this.setState(prevState => ({
        courses : courses,
        monthsDisplayed:[courses[0].month, courses[1].month, courses[2].month, courses[3].month,courses[4].month]
      }))
    }
    else {
      this.setState({ error });
    }
  }

  updateHeight = () => {
    const coursesLength=this.state.courses.length
    const coursesObj = this.state.courses
    const {displayedCourses, monthsDisplayed}=this.state
    let coursesToAdd=[]
    let i
    let numberToAdd
    if ((coursesLength-displayedCourses)>2){
      numberToAdd=3
      for (i=displayedCourses; i<(numberToAdd+displayedCourses);i++){
        coursesToAdd.push(coursesObj[i].month)
      }
      console.log(monthsDisplayed.concat(coursesToAdd))
    }
    else if ((coursesLength-displayedCourses)>1){
      numberToAdd=coursesLength-displayedCourses
      for (i=(displayedCourses); i<(numberToAdd+displayedCourses);i++){
        coursesToAdd.push(coursesObj[i].month)
      }
      console.log(monthsDisplayed.concat(coursesToAdd))
    }
    this.setState(prevState => ({
      height: prevState.height+(numberToAdd*25),
      displayedCourses: prevState.displayedCourses+numberToAdd,
      monthsDisplayed: monthsDisplayed.concat(coursesToAdd)
    }))

  }


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

  // update = (month) =>{
  //   this.setState((state, props) => ({
  //     monthsDisplayed : state.monthsDisplayed + Number(month)
  //   }));
  // }

  render() {
    const displayMonths=['Jan', 'Feb', 'Mar', "Apr", 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    // const { courses, error, today } = this.state
    const {courses,error,today,displayedCourses,filters,height} = this.state
    const day= today.getDate()
    const month= today.getMonth()
    const year=today.getFullYear()
    const displayed = courses.slice(0,displayedCourses)
    const containerHeight={
      height: `${height}vh`
    }
    let nextMonthCourses=[]
    let monthsDisplayed=this.state.monthsDisplayed

    if (error) {
      return (<div className="Schedule">{this.state.error}</div>)
    }

    return (
      <div className="Schedule" style={containerHeight}>
        <div className="little-red-thing"></div>

        <div className="title">
          <h2>Schedule</h2>
          <div className="filters">
            <div>All Classes <span>&#9660;</span></div>
            <div>All Levels <span>&#9660;</span></div>
            <div>All Locations <span>&#9660;</span></div>
          </div>
        </div>
        {displayed.map((course, i) => (
        <div className="Schedule_content">
          <div className="month-holder" style={{visibility: (i>0 && monthsDisplayed[i]==monthsDisplayed[i-1])? 'hidden':''}}>
            <p className="month-text"> {displayMonths[course.month-1]} {year} </p>
          </div>

          <div className="course-holder">

              <div key={i} className="course">
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
                  <span>{course.name}</span>
                  <p className="description">{course.description}</p>
                </div>

                <div className="course-info">
                  <p className="course-dates"><i className="fas fa-calendar-alt"></i>{course.startdate} {(course.enddate) ? `- ${course.enddate}` : ""}, {course.year}</p>
                  <p className="location"><i className="fas fa-map-marker-alt"></i>{course.location}</p>
                  <p className="level"><i className="far fa-user"></i>{course.level}</p>
                  <p className="price"><i className="fas fa-dollar-sign"></i>{course.price}</p>
                </div>
              </div>
            </div>

          </div>
    ))}
          <div className="button" onClick={this.updateHeight} style={{visibility: (courses.length > displayed.length ? '' : 'hidden')}}>See More Classes</div>
      </div>
    );

  }
}
export default Schedule
