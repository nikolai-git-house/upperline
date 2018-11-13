import React from "react";
import "./Schedule.css";
import config from "../../config";
import { load } from "../../helpers/spreadsheet";
import { Link } from "react-router-dom";

class Schedule extends React.Component {
  state = {
    courses: [],
    monthsDisplayed: [],
    filters: [
      "Immersive",
      "Workshop",
      "Hackathon",
      "Beginner (all ages)",
      "Intermediate (age 11-14)",
      "Intermediate (age 11-18)",
      "Upper West Side",
      "Financial District",
      "Greenwich, CT"
    ],
    locFilters: [],
    typeFilters: [],
    levelFilters: [],
    error: null,
    today: new Date(),
    displayedCourses: 5
  };

  onLoad = (data, error) => {
    if (data) {
      const courses = data.courses;
      const filterLoc = data.courses.map(course => {
        return course.location;
      });
      const filterType = data.courses.map(course => {
        return course.type;
      });
      const filterLevel = data.courses.map(course => {
        return course.level;
      });
      console.log(filterLoc);
      let filterArr = filterLoc.concat(filterType).concat(filterLevel);
      this.setState(prevState => ({
        courses: courses,
        filters: Array.from(new Set(filterArr)),
        locFilters: Array.from(new Set(filterLoc)),
        typeFilters: Array.from(new Set(filterType)),
        levelFilters: Array.from(new Set(filterLevel)),
        monthsDisplayed: courses
          .map(course => {
            return course.month;
          })
          .slice(0, 4)
      }));
    } else {
      this.setState({ error });
    }
  };

  updateHeight = () => {
    const coursesLength = this.state.courses.length;
    const coursesObj = this.state.courses;
    const { displayedCourses, monthsDisplayed } = this.state;
    let coursesToAdd = [];
    let i;
    let numberToAdd;
    if (coursesLength - displayedCourses > 2) {
      numberToAdd = 3;
      for (i = displayedCourses; i < numberToAdd + displayedCourses; i++) {
        coursesToAdd.push(coursesObj[i].month);
      }
    } else if (coursesLength - displayedCourses > 1) {
      numberToAdd = coursesLength - displayedCourses;
      for (i = displayedCourses; i < numberToAdd + displayedCourses; i++) {
        coursesToAdd.push(coursesObj[i].month);
      }
    }
    this.setState(prevState => ({
      // height: prevState.height+(numberToAdd*160),
      displayedCourses: prevState.displayedCourses + numberToAdd,
      monthsDisplayed: monthsDisplayed.concat(coursesToAdd)
    }));
  };

  componentDidMount() {
    // 1. Load the JavaScript client library.

    window.gapi.load("client", this.start);
  }

  start = () => {
    // 2. Initialize the JavaScript client library.

    window.gapi.client
      .init({
        apiKey: config.apiKey,
        scope: ["https://www.googleapis.com/auth/spreadsheets"],
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        load(this.onLoad);
      });
  };

  // update = (month) =>{
  //   this.setState((state, props) => ({
  //     monthsDisplayed : state.monthsDisplayed + Number(month)
  //   }));
  // }

  filterOptions = (value, id) => {
    let result = [];
    document.getElementById(id).classList.toggle("purple");
    const { filters } = this.state;
    if (filters.includes(value)) {
      result = filters.filter(word => word != value);
      this.setState(prevState => ({
        filters: result
      }));
    } else {
      filters.push(value);
      result = filters;
      this.setState(prevState => ({
        filters: result
      }));
    }
  };

  activeFilter = id => {
    var ids = ["types", "levels", "locations"];
    const index = ids.indexOf(id);
    ids.splice(index, 1);

    document.getElementById(id).classList.toggle("hidden");
    ids.map(element => {
      document.getElementById(element).classList.toggle("hidden", 1);
    });
  };

  render() {
    const displayMonths = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    // const { courses, error, today } = this.state
    const {
      courses,
      error,
      today,
      displayedCourses,
      filters,
      height,
      locFilters,
      typeFilters,
      levelFilters
    } = this.state;
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    let coursesToDisplay = [];
    courses.forEach((course, idx) => {
      if (
        filters.includes(course.location) &&
        filters.includes(course.type) &&
        filters.includes(course.level)
      ) {
        coursesToDisplay.push(course);
      }
    });
    const displayed = coursesToDisplay.slice(0, displayedCourses);
    console.log(filters);
    const containerHeight = {
      height:
        displayed.length == coursesToDisplay.length
          ? `${displayed.length * 200 + 120}px`
          : `${displayed.length * 200 + 230}px`
    };
    console.log(containerHeight);
    let nextMonthCourses = [];
    let monthsDisplayed = this.state.monthsDisplayed;

    if (error) {
      return (
        <div className="Schedule" id="schedule">
          {this.state.error}
        </div>
      );
    } else if (displayed.length < 1) {
      return (
        <div className="Schedule" id="schedule" style={{ minHeight: "200px" }}>
          <div className="title">
            <div className="little-red-thing" />
            <div>
              <h2>Schedule</h2>
            </div>
            <div className="filters">
              <div className="nav-item">
                <div
                  className="nav-button"
                  onClick={() => {
                    this.activeFilter("types");
                  }}
                >
                  <p>All Class Types</p> <span>&#9660;</span>
                </div>
                <div className="dropdown hidden" id="types">
                  <div className="dropdown-menu">
                    {typeFilters.map(filter => {
                      return (
                        <div
                          onClick={() => {
                            this.filterOptions(filter, filter.toLowerCase());
                          }}
                          id={`${filter.toLowerCase()}`}
                        >
                          {filter}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="nav-item">
                <div
                  className="nav-button"
                  onClick={() => {
                    this.activeFilter("levels");
                  }}
                >
                  <p>All Levels</p> <span>&#9660;</span>
                </div>
                <div className="dropdown hidden" id="levels">
                  <div className="dropdown-menu">
                    {levelFilters.map(filter => {
                      return (
                        <div
                          onClick={() => {
                            this.filterOptions(filter, filter.toLowerCase());
                          }}
                          id={`${filter.toLowerCase()}`}
                        >
                          {filter}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="nav-item">
                <div
                  className="nav-button"
                  onClick={() => {
                    this.activeFilter("locations");
                  }}
                >
                  <p>All Locations </p>
                  <span>&#9660;</span>
                </div>
                <div className="dropdown hidden" id="locations">
                  <div className="dropdown-menu">
                    {locFilters.map(filter => {
                      return (
                        <div
                          onClick={() => {
                            this.filterOptions(filter, filter.toLowerCase());
                          }}
                          id={`${filter.toLowerCase()}`}
                        >
                          {filter}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="schedule-holder"
            style={{
              width: "73%",
              marginLeft: "14%"
            }}
          >
            <h3>
              There are no scheduled classes that meet your criteria. Please
              adjust the course filters or check back at a later time.
            </h3>
          </div>
        </div>
      );
    }
    return (
      <div className="Schedule" id="schedule" style={containerHeight}>
        <div className="title">
          <div className="little-red-thing" />
          <h2>Schedule</h2>
          <div className="filters">
            <div className="nav-item">
              <div
                className="nav-button"
                onClick={() => {
                  this.activeFilter("types");
                }}
              >
                <p>All Class Types</p> <span>&#9660;</span>
              </div>
              <div className="dropdown hidden" id="types">
                <div className="dropdown-menu">
                  {typeFilters.map(filter => {
                    return (
                      <div
                        onClick={() => {
                          this.filterOptions(filter, filter.toLowerCase());
                        }}
                        id={`${filter.toLowerCase()}`}
                      >
                        {filter}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="nav-item">
              <div
                className="nav-button"
                onClick={() => {
                  this.activeFilter("levels");
                }}
              >
                <p>All Levels</p> <span>&#9660;</span>
              </div>
              <div className="dropdown hidden" id="levels">
                <div className="dropdown-menu">
                  {levelFilters.map(filter => {
                    return (
                      <div
                        onClick={() => {
                          this.filterOptions(filter, filter.toLowerCase());
                        }}
                        id={`${filter.toLowerCase()}`}
                      >
                        {filter}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="nav-item">
              <div
                className="nav-button"
                onClick={() => {
                  this.activeFilter("locations");
                }}
              >
                <p>All Locations </p>
                <span>&#9660;</span>
              </div>
              <div className="dropdown hidden" id="locations">
                <div className="dropdown-menu">
                  {locFilters.map(filter => {
                    return (
                      <div
                        onClick={() => {
                          this.filterOptions(filter, filter.toLowerCase());
                        }}
                        id={`${filter.toLowerCase()}`}
                      >
                        {filter}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="schedule-holder">
          {displayed.map((course, i) => (
            <div className="Schedule_content" key={i}>
              <div
                className="month-holder"
                style={{
                  visibility:
                    i != 0 && monthsDisplayed[i] == monthsDisplayed[i - 1]
                      ? "hidden"
                      : ""
                }}
              >
                <p className="month-text">
                  {" "}
                  {displayMonths[course.month - 1]} {course.year}{" "}
                </p>
              </div>

              <div className="course-holder">
                <div className="course">
                  <div className="icon-holder">
                    <i
                      className={course.icon}
                      style={{
                        background: course.background
                      }}
                    />
                  </div>

                  <div className="course-content">
                    <p className="muted_text">
                      {course.duration} {course.type}
                    </p>
                    <span>
                      <a
                        target="blank"
                        href={
                          course.type == "Immersive"
                            ? `/pdp/${course.name}`
                            : `${course.link}`
                        }
                      >
                        {course.name}
                      </a>
                    </span>
                    <p className="description">{course.description}</p>
                  </div>

                  <div className="course-info">
                    <p className="course-dates">
                      <i className="fas fa-calendar-alt" />
                      {course.startdate}{" "}
                      {course.enddate ? `- ${course.enddate}` : ""},{" "}
                      {course.year}
                    </p>
                    <p className="location">
                      <i className="fas fa-map-marker-alt" />
                      {course.location}
                    </p>
                    <p className="level">
                      <i className="far fa-user" />
                      {course.level}
                    </p>
                    <p className="price">
                      <i className="fas fa-dollar-sign" />
                      {course.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            className="button"
            onClick={this.updateHeight}
            style={{
              visibility:
                coursesToDisplay.length > displayed.length ? "" : "hidden"
            }}
          >
            See More Classes
          </div>
        </div>
      </div>
    );
  }
}
export default Schedule;
