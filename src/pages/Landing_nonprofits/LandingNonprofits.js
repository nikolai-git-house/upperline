// Libraries
import React from "react";
import { HashLink } from "react-router-hash-link";
// CSS
import "./LandingNonprofts.css";
// Components
import Navbar from "../../components/Navbar/Navbar";
import DrawerMenu from "../../components/DrawerMenu/DrawerMenu";
import NonprofitsHero from "../../components/NonprofitsHero/NonprofitsHero";
import HalfHero from "../../components/HalfHero/HalfHero";
import ImpactCarousel from "../../components/ImpactCarousel/ImpactCarousel";
import FAQShort from "../../components/FAQShort/FAQShort";
import SplitInfo from "../../components/SplitInfo/SplitInfo";
import Footer from "../../components/Footer/Footer";
import Pattern from "../../components/Pattern/Pattern";
// Images
import brian from "../../images/brianInAction.jpg";
import marisa from "../../images/marisaBetter_resized.jpeg";
import shadeira from "../../images/Shadeira.jpg";
import wendell from "../../images/wendellInAction.jpg";
import juvaria from "../../images/juvariaCoaching.jpg";
import classInProgress from "../../images/classInProgress.jpg";
import Noah from "../../images/noah.jpg";
import prep from "../../images/Prep3.jpg";
import oppnet from "../../images/OppNet2.jpg";
import scripted from "../../images/ScriptEd.jpg";
import missionEDC from "../../images/edc1.jpg";
import seo from "../../images/SEO3.jpg";
import { getFAQs } from "../../helpers/faq";
import config from "../../config";

class LandingNonprofits extends React.Component {
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
          return faq.type == "nonprofits";
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
      <div className="Nonprofits">
        <Navbar
          active="nonprofits"
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <DrawerMenu show={this.state.drawerOpen} />
        <NonprofitsHero image={Noah} />
        <div style={{ height: "6px" }} />
        <HalfHero
          side="left"
          img={juvaria}
          title="Immersive courses for students"
          text={[
            "As an organization that works with students, you know how challenging it can be to get a summer course or after-school program off the ground.",
            "Upperline partners with nonprofit organizations to run immersive courses ranging in length from three days to five weeks.",
            "Our curriculum is customizable and adaptable to the goals you have for your students, and the goals they have for themselves."
          ]}
          buttonText="Learn More"
          target="nonprofits"
        />
        <HalfHero
          side="right"
          img={marisa}
          imagestyle="center top"
          title="CS educator training"
          text={[
            "Educators are the linchpin in any effort to implement or change CS Ed.",
            "Upperline offers 1-day, 3-day and 1-week training programs on computer science pedagogy and classroom culture building with tailored pre and post training support for participants.",
            "We conduct and run trainings for employees as well as for external participants (college professors)."
          ]}
          buttonText="Learn More"
          target="nonprofits"
        />
        <HalfHero
          side="left"
          img={classInProgress}
          imagestyle="50% 50%"
          title="CS curriculum development & consulting"
          text={[
            "Computer Science curriculum abounds online, but content developed as one-size-fits-all may not meet your organization's needs.",
            "Upperline can work with your curriculum development team to scope out best practices in designing content specifically for your students.",
            "No curriculum team? License Upperline's curricula or commision a custom curriculum of your own."
          ]}
          buttonText="Learn More"
          target="nonprofits"
        />
        <ImpactCarousel
          pattern="green_u"
          title="Case Studies"
          carousel={[
            {
              img: prep,
              background_position: "40% 18%",
              muted_text: "Immersive Course",
              title: "Prep for Prep",
              content:
                "Prep for Prep students participated in a 5-week coding and entrepreneurship immersive course. Students partnered together to create web applications designed to address problems in the health, education, and entertainment sectors. The final pitch competition was held at the Google NYC offices."
            },
            {
              img: oppnet,
              background_position: "40% 18%",
              muted_text: "Immersive Course",
              title: "Opportunity Network",
              content:
                "Opportunity Network students built a full-stack application in the Node.js framework. The combined class of high school and college students had visits from the Google Creative Lab and toured the headquarters of NYC-based startup Slice."
            },
            {
              img: missionEDC,
              background_position: "40% 18%",
              muted_text: "Educator Training",
              title: "Mission EDC",
              content:
                "Young women in Mission, TX participated in a one-week immersive where they learned core web design skills."
            },
            {
              img: scripted,
              background_position: "40% 18%",
              muted_text: "Individual Sponsorships",
              title: "ScriptEd",
              content:
                "For three consecutive years, ScriptEd has partnered with Upperline to sponsor individual students who attend our classes tuition-free. Through the ScriptEd partnership, these individual students are connected with a community of learners that offers ongoing support."
            },
            {
              img: seo,
              background_position: "40% 18%",
              muted_text: "Immersive Course",
              title: "SEO",
              content:
                "SEO offered a week-long immersive Spring break course for 40 of their scholars. Students built interactive websites using industry-standard cutting-edge web design frameworks."
            }
          ]}
          metrics={[
            { number: "101", text: "Students sponsored in 2018" },
            { number: "11", text: "Nonprofit partners" },
            { number: "$120k", text: "Financial aid awarded" },
            { number: "87.3%", text: "Upperline alumni continuing in CS" }
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
        <Pattern pattern="green_u" />
        <SplitInfo />
        <Footer />
      </div>
    );
  }
}

export default LandingNonprofits;
