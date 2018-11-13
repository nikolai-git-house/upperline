// Libraries
import React from "react";
import { HashLink } from "react-router-hash-link";
// CSS
import "./Schools.css";
// Components
import Navbar from "../../components/Navbar/Navbar";
import DrawerMenu from "../../components/DrawerMenu/DrawerMenu";
import SchoolsHero from "../../components/SchoolsHero/SchoolsHero";
import HalfHero from "../../components/HalfHero/HalfHero";
import ImpactCarousel from "../../components/ImpactCarousel/ImpactCarousel";
import FAQShort from "../../components/FAQShort/FAQShort";
import SplitInfo from "../../components/SplitInfo/SplitInfo";
import Footer from "../../components/Footer/Footer";
import Pattern from "../../components/Pattern/Pattern";
// Images
import TayeaBrian from "../../images/TayeaBrian.jpg";
import wendell from "../../images/wendell.jpg";
import classroom from "../../images/Classes.jpg";
import computer from "../../images/Computer.jpg";
import alan from "../../images/alanInAction.jpg";
import teacherWorking from "../../images/TeacherWorking.jpg";
import dwightWorkshop from "../../images/DwightWorkshop.jpg";
import successBuilding from "../../images/SuccesAcademyBuilding.png";
import { getFAQs } from "../../helpers/faq";
import config from "../../config";

class Schools extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faqs: [],
      drawerOpen: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.gapi.load("client", this.start);
  }
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };
  onLoad = (data, error) => {
    if (data) {
      console.log(data.faqs);
      const faqs = data.faqs
        .filter(faq => {
          return faq.type == "schools";
        })
        .slice(0, 3);
      console.log(faqs);
      this.setState(prevState => ({
        faqs: faqs
      }));
    } else {
      this.setState({ error });
    }
  };

  start = () => {
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        getFAQs(this.onLoad);
      });
  };

  render() {
    const { faqs } = this.state;
    return (
      <div className="Schools">
        <Navbar
          active="schools"
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <DrawerMenu show={this.state.drawerOpen} />
        <SchoolsHero image={TayeaBrian} backgroundPosition="70% top" />
        <div style={{ height: "6px" }} />
        <HalfHero
          id="Classes"
          side="right"
          img={classroom}
          imagestyle="top right"
          title="Classes for students"
          text={[
            "Computer science teaching positions are among the hardest to fill.",
            "Upperline runs in-school, after-school, and holiday break programming for schools that need an additional way to expose students to CS foundations.",
            "Our courses are customizable and adaptable to the goals you have for your students, and the goals they have for themselves."
          ]}
          buttonText="Learn More"
          target="schools"
        />
        <HalfHero
          id="ProfessionalDevelopment"
          side="left"
          img={wendell}
          imagestyle="25% center"
          title="Professional development"
          text={[
            "Educators are the linchpin in any effort to implement or change CS Ed.",
            "Upperline offers half-day, full-day, and multi-day PD sessions on computer science pedagogy and classroom culture building with tailored pre and post training support for participants.",
            "We conduct and run trainings for current CS teachers, and for teachers interested in transitioning from other content areas."
          ]}
          buttonText="Learn More"
          target="schools"
        />
        <HalfHero
          id="Curriculum"
          side="right"
          img={computer}
          imagestyle="50% 50%"
          title="Curriculum development & consulting"
          text={[
            "Computer Science curriculum abounds online, but content developed as one-size-fits-all may not meet your school's needs.",
            "Work with an Upperline expert to train your curriculum team on best practices.",
            "No curriculum team? License Upperline's curricula or commision a custom curriculum of your own."
          ]}
          buttonText="Learn More"
          target="schools"
        />
        <HalfHero
          id="Consulting"
          side="left"
          img={alan}
          imagestyle="50% 50%"
          title="CS program consultation"
          text={[
            "Provide content-specific instructional coaching, lesson design feedback, and data analysis to your CS teachers.",
            "Upperline can work with your CS teachers and department leader to identify the highest leverage action items for them.",
            "No CS department? Work with Upperline to develop an observational lens that will allow you to provide daily feedback to your teachers."
          ]}
          buttonText="Learn More"
          target="schools"
        />
        <ImpactCarousel
          pattern="yellow_triangles"
          title="Case Studies"
          carousel={[
            {
              img: teacherWorking,
              background_position: "right top",
              muted_text: "Professional Development",
              title: "Nassau TRACT",
              content:
                "The Nassau Teacher Resource and Computer Training Center partners with Upperline to offer PD sessions where teachers write their first lines of code. Teachers receive the tools & training they need to apply the CS best practices to their content areas."
            },
            {
              img: successBuilding,
              background_position: "center top",
              muted_text: "Instructional Coaching",
              title: "Success Academy",
              content:
                "Upperline partners with Success Academy High School to provide regular observations, intensive PD sessions, and AP alignment feedback as part of their commitment to expanding access to CS education."
            },
            {
              img: dwightWorkshop,
              background_position: "80% top",
              muted_text: "In-School Programs",
              title: "The Dwight School",
              content:
                "We run half- and full-day workshops at the Dwight School where many students wrote their first-ever lines of code."
            }
          ]}
          metrics={[
            { number: "210", text: "Teachers trained" },
            { number: "720", text: "Students taught" },
            { number: "3060", text: "Hours of teaching" },
            { number: "57k", text: "Hours of code" }
          ]}
        />
        <FAQShort
          faqs={[
            {
              question: faqs[0] ? faqs[0].question : "",
              answer: faqs[0] ? faqs[0].answer : ""
            },
            {
              question: faqs[1] ? faqs[1].question : "",
              answer: faqs[1] ? faqs[1].answer : ""
            },
            {
              question: faqs[2] ? faqs[2].question : "",
              answer: faqs[2] ? faqs[2].answer : ""
            }
          ]}
        />
        <Pattern pattern="yellow_triangles" />
        <SplitInfo />
        <Footer />
      </div>
    );
  }
}

export default Schools;
