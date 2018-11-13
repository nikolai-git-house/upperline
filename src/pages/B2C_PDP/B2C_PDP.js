import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import DrawerMenu from "../../components/DrawerMenu/DrawerMenu";
import FullWidthHero from "../../components/FullWidthHero/FullWidthHero";
import Footer from "../../components/Footer/Footer";
import ImpactCarousel from "../../components/ImpactCarousel/ImpactCarousel";
import ThreePanel from "../../components/ThreePanel/ThreePanel";
import PDP_Schedule from "../../components/PDP_Schedule/PDP_Schedule";
import ADay from "../../components/ADay/ADay";
import LogoFarm from "../../components/LogoFarm/LogoFarm";
import FinancialAid from "../../components/FinancialAidInfo/FinancialAidInfo";
import Pattern from "../../components/Pattern/Pattern";
import TwoWeekSchedule from "../../components/TwoWeekSchedule/TwoWeekSchedule";
import InstructorsCarousel from "../../components/InstructorsCarousel/InstructorsCarousel";
import StickyNav from "../../components/StickyNav/StickyNav";
import FAQLong from "../../components/FAQLong/FAQLong";
import Carousel from "../../components/Carousel/Carousel";
import PDPHeroInset from "../../components/PDPHeroInset/PDPHeroInset";
import WhatYoullLearn from "../../components/WhatYoullLearn/WhatYoullLearn";
import "./B2C_PDP.css";
import b2cScrollJack1 from "../../images/b2cScrollJack1.jpg";
import lmhq_pic from "../../images/lmhq.jpg";
import dwight_pic from "../../images/dwight4.jpg";
import greenwich_pic from "../../images/greenwich.jpg";
import maze from "../../images/maze.png";
import pixels from "../../images/pixels.png";
import waddle from "../../images/waddle.png";
import recipe from "../../images/recipe.png";
import Larissa from "../../images/Larissa.jpg";
import pattern_bg from "../../images/uc_pattern_linedot.png";
import "../../helpers/course_info.js";
import { courseRequest } from "../../helpers/course_info.js";
import config from "../../config";

class B2C_PDP extends React.Component {
  state = {
    courseInfo: [],
    selected: this.props.match.params.course,
    fixed: null,
    drawerOpen: false
  };
  onLoad = (data, error) => {
    if (data) {
      const courseInfo = data.info;
      this.setState(prevState => ({
        courseInfo: courseInfo
      }));
    } else {
      this.setState({ error });
    }
  };

  findCourse = () => {
    const finalCourse = this.state.courseInfo.find(item => {
      return item.Name === this.state.selected;
    });
    return finalCourse;
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.start);
  }
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };
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
        courseRequest(this.onLoad);
      });
  };

  resetNav = () => {
    let navItems = document.querySelectorAll(".navItem");
    navItems.forEach(navItem => {
      navItem.classList.remove("active");
    });
  };

  highlightNav = () => {
    let navItems = document.querySelectorAll(".navItem");
    let ADay = document.querySelector("#ADay");
    let TwoWeekSchedule = document.querySelector("#TwoWeekSchedule");
    let WhatYoullLearn = document.querySelector("#WhatYoullLearn");
    let WhatYoullMake = document.querySelector("#WhatYoullMake");
    let PDPSchedule = document.querySelector("#PDPSchedule");
    let Instructors = document.querySelector("#Instructors");
    let FAQLong = document.querySelector("#FAQLong");
    let buffer = 250;
    if (window.pageYOffset >= FAQLong.offsetTop) {
      this.resetNav();
      navItems[6].classList.add("active");
    } else if (window.pageYOffset >= Instructors.offsetTop - buffer) {
      this.resetNav();
      navItems[5].classList.add("active");
    } else if (window.pageYOffset >= PDPSchedule.offsetTop - buffer) {
      this.resetNav();
      navItems[4].classList.add("active");
    } else if (window.pageYOffset >= WhatYoullMake.offsetTop - buffer) {
      this.resetNav();
      navItems[3].classList.add("active");
    } else if (window.pageYOffset >= WhatYoullLearn.offsetTop - buffer) {
      this.resetNav();
      navItems[2].classList.add("active");
    } else if (window.pageYOffset >= TwoWeekSchedule.offsetTop - buffer) {
      this.resetNav();
      navItems[1].classList.add("active");
    } else if (window.pageYOffset >= ADay.offsetTop - buffer) {
      this.resetNav();
      navItems[0].classList.add("active");
    }
  };

  componentWillUnmount() {
    window.onscroll = function() {};
  }

  render() {
    let activateScroll = null;
    let handleScroll = this.handleScroll;
    const { courseInfo, selected, fixed } = this.state;
    const thisCourse = this.findCourse();
    return (
      <div className="B2C_PDP">
        <Navbar
          active="students"
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <DrawerMenu show={this.state.drawerOpen} />
        <FullWidthHero
          pattern={thisCourse ? thisCourse.pattern : ""}
          muted_style={{ color: "black" }}
          title_style={{
            color: "black",
            paddingTop: "10px"
          }}
          titleTop={{
            paddingTop: "12px",
            marginTop: "320px",
            marginBottom: 0
          }}
          title={thisCourse ? thisCourse.Name : ""}
          muted_text={thisCourse ? thisCourse.HeroMuted : ""}
          subtitle={thisCourse ? thisCourse.HeroSubTitle : ""}
          duration={thisCourse ? thisCourse.InsetDur : ""}
          description={thisCourse ? thisCourse.InsetDesc : ""}
          level={thisCourse ? thisCourse.InsetLevel : ""}
          price={thisCourse ? thisCourse.InsetPrice : ""}
        />

        <Pattern
          height={{ height: "44px" }}
          pattern={thisCourse ? thisCourse.pattern : ""}
        />

        <ADay />
        <TwoWeekSchedule
          color={thisCourse ? `rgba(${thisCourse.color},` : ""}
        />
        <WhatYoullLearn
          synopsis={thisCourse ? thisCourse.WYLDesc : ""}
          learnitems={[
            {
              title: thisCourse ? thisCourse.WYL1Title : "",
              description: thisCourse ? thisCourse.WYL1Desc : ""
            },
            {
              title: thisCourse ? thisCourse.WYL2Title : "",
              description: thisCourse ? thisCourse.WYL2Desc : ""
            },
            {
              title: thisCourse ? thisCourse.WYL3Title : "",
              description: thisCourse ? thisCourse.WYL3Desc : ""
            },
            {
              title: thisCourse ? thisCourse.WYL4Title : "",
              description: thisCourse ? thisCourse.WYL4Desc : ""
            },
            {
              title: thisCourse ? thisCourse.WYL5Title : "",
              description: thisCourse ? thisCourse.WYL5Desc : ""
            },
            {
              title: thisCourse ? thisCourse.WYL6Title : "",
              description: thisCourse ? thisCourse.WYL6Desc : ""
            },
            {
              title: thisCourse ? thisCourse.WYL7Title : "",
              description: thisCourse ? thisCourse.WYL7Desc : ""
            },
            {
              title: thisCourse ? thisCourse.WYL8Title : "",
              description: thisCourse ? thisCourse.WYL8Desc : ""
            },
            {
              title: thisCourse ? thisCourse.WYL9Title : "",
              description: thisCourse ? thisCourse.WYL9Desc : ""
            }
          ]}
        />
        <Carousel
          title="What you'll make"
          carousel={[
            {
              // img: thisCourse ? thisCourse.CarouselImage : '',
              img:
                thisCourse && thisCourse.CarouselImage == "pixels"
                  ? pixels
                  : thisCourse && thisCourse.CarouselImage == "waddle"
                    ? waddle
                    : thisCourse && thisCourse.CarouselImage == "maze"
                      ? maze
                      : "",
              muted_text: "",
              title: thisCourse ? thisCourse.CarouselTitle : "",
              content: thisCourse ? thisCourse.CarouselDesc : "",
              link: thisCourse ? thisCourse.CarouselLink : ""
            }
          ]}
          pattern={thisCourse ? thisCourse.pattern : ""}
        />
        <PDP_Schedule course={thisCourse ? thisCourse.Name : ""} />
        <InstructorsCarousel
          instructors={[
            { name: "Larissa", title: "Instructor", img: Larissa },
            { name: "Larissa", title: "Instructor", img: Larissa },
            { name: "Larissa", title: "Instructor", img: Larissa },
            { name: "Larissa", title: "Instructor", img: Larissa },
            { name: "Larissa", title: "Instructor", img: Larissa }
          ]}
          course={thisCourse ? thisCourse.Name : ""}
        />
        <FAQLong
          faqs={[
            {
              question: thisCourse ? thisCourse.Q1 : "",
              answer: thisCourse ? thisCourse.A1 : ""
            },
            {
              question: thisCourse ? thisCourse.Q2 : "",
              answer: thisCourse ? thisCourse.A2 : ""
            },
            {
              question: thisCourse ? thisCourse.Q3 : "",
              answer: thisCourse ? thisCourse.A3 : ""
            },
            {
              question: thisCourse ? thisCourse.Q4 : "",
              answer: thisCourse ? thisCourse.A4 : ""
            },
            {
              question: thisCourse ? thisCourse.Q5 : "",
              answer: thisCourse ? thisCourse.A5 : ""
            },
            {
              question: thisCourse ? thisCourse.Q6 : "",
              answer: thisCourse ? thisCourse.A6 : ""
            }
          ]}
        />
        <Pattern
          height={{ height: "80px" }}
          pattern={thisCourse ? thisCourse.pattern : ""}
        />
        <FinancialAid />
        <LogoFarm />
        <Footer />
      </div>
    );
  }
}

B2C_PDP.defaultProps = {};
B2C_PDP.propTypes = {};

export default B2C_PDP;
