import React from 'react'
import './StickyNav.css'
import{HashLink} from 'react-router-hash-link'

class StickyNav extends React.Component {

  constructor(props){
    super(props)
    this.state={
      fixed: null
    }
  }

  componentDidMount(){
    this.setState( prevState => ({ fixed:null}))
  }


    componentWillReceiveProps(nextProps){
      if(this.props.mounted !== nextProps.mounted){
        this.setState(prevState => ({
          fixed:true,
        }))
      }
    }

  render(){
    const navItemStyle = {fontWeight: 'bold'}
    console.log(this.state)
    //write normal javascript
    return(
      <div className="StickyNav unstuck">
        <div className="content">
          <div className="navItem" id="ADayNav"><HashLink to="#ADay"><p className="bold">A day at Upperline</p></HashLink></div>
          <div className="navItem" id="TwoWeekScheduleNav"><HashLink to="#TwoWeekSchedule"><p className="bold">Two week schedule</p></HashLink></div>
          <div className="navItem" id="WhatYoullLearnNav"><HashLink to="#WhatYoullLearn"><p className="bold">What you'll learn </p></HashLink></div>
          <div className="navItem" id="WhatYoullMakeNav"><HashLink to="#WhatYoullMake"><p className="bold"> What you'll make </p></HashLink></div>
          <div className="navItem" id="PDPScheduleNav"><HashLink to="#PDPSchedule"><p className="bold"> Upcoming classes</p></HashLink></div>
          <div className="navItem" id="InstructorsNav"><HashLink to="#Instructors"><p className="bold"> Instructors </p></HashLink></div>
          <div className="navItem" id="FAQLongNav"><HashLink to="#FAQLong"><p className="bold"> FAQs </p></HashLink></div>
          <a href="https://upperlinecode.campbrainregistration.com"><div className="button">Register</div></a>
        </div>
      </div>
    )
  }

}

export default StickyNav
