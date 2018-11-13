import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import DrawerMenu from "../../components/DrawerMenu/DrawerMenu";
import BusinessHero from "../../components/BusinessHero/BusinessHero";
import HalfHero from "../../components/HalfHero/HalfHero";
import ImpactCarousel from "../../components/ImpactCarousel/ImpactCarousel";
import FAQShort from "../../components/FAQShort/FAQShort";
import SplitInfo from "../../components/SplitInfo/SplitInfo";
import Pattern from "../../components/Pattern/Pattern";
import Footer from "../../components/Footer/Footer";
import shadeira from "../../images/Shadeira3.jpg";
import marisa from "../../images/marisaBetter_resized.jpeg";
import business_1 from "./business1.jpg";
import business_2 from "./business2.jpg";
import business_3 from "./business3.jpg";
import google_ny from "../../images/google_ny.jpg";
import "./LandingB2B.css";
import { HashLink as Link } from "react-router-hash-link";
import { getFAQs } from "../../helpers/faq";
import config from "../../config";

class LandingB2B extends React.Component {
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
          return faq.type == "business";
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
      <div className="Home">
        <Navbar
          active="businesses"
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <DrawerMenu show={this.state.drawerOpen} />
        <BusinessHero image={shadeira} />
        <div style={{ height: "2px" }} />
        <HalfHero
          side="left"
          img={business_1}
          title="White labeled immersive courses for kids"
          text={[
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          ]}
          buttonText="Inquire about courses"
        />
        <HalfHero
          side="right"
          img={business_2}
          title="CS education consulting"
          text={[
            "Custom consulting related to training, recruitment, curriculum development, and execution of computer science programs for organizations.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          ]}
          buttonText="Engage with Us"
        />
        <HalfHero
          side="left"
          img={business_3}
          title="Custom CS educator training"
          text={[
            "Educators are the linchpin in any effort to implement or change CS Ed.",
            "Upperline offers 1-day, 3-day and 1-week training programs on computer science pedagogy and classroom culture building with tailored pre and post training support for participants.",
            "We conduct and run trainings for employees as well as for external participants (college professors)."
          ]}
          buttonText="Learn More"
        />
        <ImpactCarousel
          title="Case Studies"
          carousel={[
            {
              img: google_ny,
              muted_text: "custom cs educator training",
              title: "Google training",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            },
            {
              img: google_ny,
              muted_text: "slide 2",
              title: "Google training",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            },
            {
              img: google_ny,
              muted_text: "slide 3",
              title: "Google training",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            },
            {
              img: google_ny,
              muted_text: "slide 4",
              title: "Google training",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            },
            {
              img: google_ny,
              muted_text: "slide 5",
              title: "Google training",
              content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            }
          ]}
          metrics={[
            { number: "30", text: "Attendees to intensive educator training" },
            { number: "190", text: "Attendees to 1-day educator workshops" },
            { number: "XX", text: "Coding Scholarships Given" },
            { number: "2", text: "Students accepted into ivy league schools" }
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
        <Pattern pattern="pattern_bg" />
        <SplitInfo />
        <Footer />
      </div>
    );
  }
}

export default LandingB2B;
