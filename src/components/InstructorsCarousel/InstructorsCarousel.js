import React from 'react'
import './InstructorsCarousel.css'
import {getInstructors} from '../../helpers/instructors'
import config from '../../config'
import Larissa from '../../images/Larissa.jpg'
class InstructorsCarousel extends React.Component {
  // props.carousel is an array of objects with info about what
  // the carousel should display. keys are img, muted-text, title, content
  constructor(props){
    super(props)
    this.state = {
      carouselIdx: 0,
      instructors:[],
      filters:"iOS Development with Swift",
      error: null,
      displayed:5
    }
  }

  // componentWillReceiveProps(nextProps){
  //   if(this.props.filters!==nextProps.course){
  //     this.setState(prevState => ({
  //       filters:[nextProps.course],
  //     }))
  //   }
  // }
  //
  onLoad = (data, error) => {
    if (data) {
      const instructors = data.instructors;
      this.setState(prevState => ({
        instructors: instructors
      }))
    }
    else {
      this.setState({ error });
    }
  }
  //

  componentWillReceiveProps(nextProps){
    const {instructors} = this.state
    if(this.props.course!==nextProps.course){
      let filtered = instructors.filter(instructor => {
        return(instructor.courses.includes(nextProps.course))
      })
      console.log(filtered)
      this.setState(prevState => ({
        instructors: filtered
      }))
    }
  }
  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load('client', this.start);
  }
  //
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
        getInstructors(this.onLoad)

      });
  };

  changeRight=() =>{
    if (this.state.displayed < this.state.instructors.length){
      this.setState(prevState=>({
        displayed : prevState.displayed+1
      })
      )
    }
  }

  changeLeft=() =>{
    if (this.state.displayed > 5){
      this.setState(prevState=>({
        displayed : prevState.displayed-1
      })
      )
    }
  }

  render(){
    const {instructors, displayed}=this.state
    const displayedArray=instructors
    const toDisplay= instructors.slice(displayed-5,displayed)
    const carouselIdx = displayed-5
    const disabledStyle = { background: 'lightgray', cursor: 'not-allowed' }
    const leftArrowStyle = carouselIdx === 0 ? disabledStyle : {}
    const rightArrowStyle = carouselIdx >= instructors.length-5 ? disabledStyle : {}
    return (
      <div className="InstructorsCarousel" id="Instructors">
        <div className="content pdp_detail">
          <div className="carousel-buttons">
            <div className="carousel-button-holder">
              <div
                className="left-arrow"
                onClick={this.changeLeft}
                style={leftArrowStyle}>
                <div></div>
              </div>

              <div
                className="right-arrow"
                onClick={this.changeRight}
                style={rightArrowStyle}>
                <div></div>
              </div>
            </div>
          </div>
          <div className="title">
            <h3>Instructors</h3>
          </div>
          <div className="instructors-container">
          {
            toDisplay.map( (inst, idx) => {
              {console.log(idx)}
              return(<div key={idx} className="inst">
                <div className="inst-img">
                  <img src={require(`../../images/${inst.img}.jpg`)}/>
                </div>
                <h4>{inst.name}</h4>
                <p>{inst.title}</p>
              </div>
            )
            })
          }

          </div>
        </div>
      </div>
    )
  }
}


export default InstructorsCarousel
