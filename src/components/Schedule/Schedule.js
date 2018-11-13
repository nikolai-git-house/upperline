import React from 'react'
import './Schedule.css'
import config from '../../config'
import { load } from '../../helpers/spreadsheet'
import { Link } from 'react-router-dom'

class Schedule extends React.Component {
  state = {
    courses: [[],[],[],[],[],[],[],[],[],[],[],[]],
    filters:[],
    error: null,
    today: new Date(),
    height:165
  };

  onLoad = (data, error) => {
    if (data) {
      const courses = data.courses;
      this.setState({ courses });
    }
    else {
      this.setState({ error });
    }
  }

  updateHeight = () => {
    this.setState(prevState => ({ height:prevState.height+80}))
  }


  componentDidMount() {
    // 1. Load the JavaScript client library.
    console.log("component mounted")
    window.gapi.load('client', this.start);
  }

  start = () => {
    // 2. Initialize the JavaScript client library.
    console.log("start ran")
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


  render() {
    console.log(this.state)
    const displayMonths=['Jan', 'Feb', 'Mar', "Apr", 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    // const { courses, error, today } = this.state
    const courses = this.state.courses
    const error= this.state.error
    const day= this.state.today.getDate()
    const month= this.state.today.getMonth()
    const year=this.state.today.getFullYear()
    const containerHeight={
      height: `${this.state.height}vh`
    }
    let currentCourses = this.state.courses[month]
    let nextMonthCourses=[]
    if (currentCourses.length<5){
      courses[month+1].forEach((course, idx)=>{
        if (currentCourses.length+nextMonthCourses.length<5){
          nextMonthCourses.push(course)
        }
      })
      console.log(nextMonthCourses)
    }
    // const scheduleContentStyle={
    //   gridTemplateRows: (nextMonthCourses.length>0)?'1fr 1fr':'1fr'
    // }
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

        <div className="Schedule_content">
          <div className="month-holder">
            <p className="month-text"> {displayMonths[month]} {year} </p>
          </div>

          <div className="course-holder">
              {currentCourses.map((course, i) => (
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
              ))}

            </div>
          </div>
          <div className="Schedule_content" style={{visibility:(nextMonthCourses.length>0)?'':'hidden'}}>
              <div className="month-holder">
                  <p className="month-text"> {displayMonths[month+1]} {year} </p>
              </div>

              <div className="course-holder">
                {nextMonthCourses.map((course, i) => (
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
                      <Link to=`/pdp/${course.name}`><span>{course.name}</span></Link>
                      <p className="description">{course.description}</p>
                    </div>

                    <div className="course-info">
                      <p className="course-dates"><i className="fas fa-calendar-alt"></i>{course.startdate} {(course.enddate) ? `- ${course.enddate}` : ""}, {course.year}</p>
                      <p className="location"><i className="fas fa-map-marker-alt"></i>{course.location}</p>
                      <p className="level"><i className="far fa-user"></i>{course.level}</p>
                      <p className="price"><i className="fas fa-dollar-sign"></i>{course.price}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
          <div className="button" onClick={this.updateHeight}>See More Classes</div>
      </div>
    );

  }
}
export default Schedule
