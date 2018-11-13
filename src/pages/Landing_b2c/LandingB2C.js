import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import DrawerMenu from "../../components/DrawerMenu/DrawerMenu";
import FullWidthHero from "../../components/FullWidthHero/FullWidthHero";
import OurClasses from "../../components/OurClasses/OurClasses";
import Footer from "../../components/Footer/Footer";
import ScrollJack from "../../components/ScrollJackHalfHero/ScrollJackHalfHero";
import ThreePanel from "../../components/ThreePanel/ThreePanel";
import ImpactCarousel from "../../components/ImpactCarousel/ImpactCarousel";
import Schedule from "../../components/Schedule/Schedule3";
import LogoFarm from "../../components/LogoFarm/LogoFarm";
import FinancialAid from "../../components/FinancialAidInfo/FinancialAidInfo";
import Pattern from "../../components/Pattern/Pattern";
import FAQShort from "../../components/FAQShort/FAQShort";
import "./LandingB2C.css";
import b2cScrollJack1 from "../../images/b2cScrollJack1.jpg";
import lmhq_pic from "../../images/lmhq.jpg";
import dwight_pic from "../../images/dwight4.jpg";
import greenwich_pic from "../../images/greenwich.jpg";
import maze from "../../images/maze.png";
import waddle from "../../images/waddle.png";
import recipe from "../../images/recipe.png";
import full_hero_bg from "../../images/b2c_landing_pic.jpg";
import { getFAQs } from "../../helpers/faq";
import config from "../../config";

class LandingB2C extends React.Component {
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
          return faq.type == "students";
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
    let drawerMenu;
    if (this.state.drawerOpen) {
      drawerMenu = <DrawerMenu />;
    }
    return (
      <div className="LandingB2C">
        <Navbar
          active="students"
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <DrawerMenu show={this.state.drawerOpen} />
        <FullWidthHero
          background={{
            background: `url(${full_hero_bg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            minHeight: "900px"
          }}
          muted_text="Students"
          title="Immersive classes & workshops for students aged 11-18"
          titleTop={{
            paddingTop: "150px",
            textDecoration: "underline",
            textDecorationColor: "rgb(125,226,209)"
          }}
          button_text="Download Catalog"
          button_link="https://drive.google.com/file/d/1waaB6jkJbp-DeYfvxPtgWJGqjBXnat7N/view?usp=sharing"
        />
        <OurClasses
          options={[
            {
              title: "2-Week Immersives",
              desc:
                "2-week immersive courses designed for beginner and intermediate students.",
              content: [
                {
                  title: "iOS Development with Swift",
                  desc: `The fastest way to build a native iPhone app is with Apple's Swift language. iOS Development with Swift is our introductory course for mobile software development.`,
                  icon: "fab fa-apple fa-2x",
                  bgColor: "rgba(238, 186, 107,1)"
                },
                {
                  title: "Web Development with Ruby",
                  desc: `Ruby is a powerful and easy-to-learn language that has powered some of the biggest sites on the Internet, including Twitter and AirBnB. It's used by millions of developers, and is one of the most in-demand languages in the field.`,
                  icon: "fa fa-gem fa-2x",
                  bgColor: "rgba(255,113,91, 1)"
                  // bgColor: 'rgba(251, 166, 170, 1)'
                },
                {
                  title: "JavaScript and Virtual Reality",
                  desc: `Front-end development (using HTML, CSS, and JavaScript) is the art of creating the interactivity, animations, design, and style that draws users in. Take this class to master the world of VR in JS.`,
                  icon: "far fa-file-code fa-2x",
                  bgColor: "rgb(136, 204, 241)"
                },
                {
                  title: "Web Development with Python",
                  desc: `Python is one of the most popular languages in web development--it powers everything from web applications to machine learning algorithms.`,
                  icon: "fab fa-python fa-2x",
                  bgColor: "rgba(255, 113, 91, 0.7)"
                }
              ]
            },
            {
              title: "Workshops",
              desc:
                "Classes designed to orient students to a concept and help them finish small projects.",
              content: [
                {
                  title: "Virtual Reality with A-Frame",
                  desc: `In this short workshop, you'll learn HTML-like syntax to build basic shapes and animations in 3D using a WebVR library called A-Frame!`,
                  icon: "fas fa-cubes fa-2x",
                  bgColor: "rgb(168, 218, 200)"
                },
                {
                  title: "Art + Code",
                  desc: `Spend an hour or two learning to build beautiful, animated digital art using the p5.js library. This workshop is a great place to explore coding at its most creative!`,
                  icon: "fas fa-paint-brush fa-2x",
                  bgColor: "rgba(61, 52, 139, 0.5)"
                }
              ]
            },
            {
              title: "Private Instruction",
              desc:
                "1:1 or small group tutoring offered in 60, 90, and 120 minute sessions.",
              content: [
                {
                  title: "Tutoring",
                  desc: `Upperline has a track record of pairing top coding tutors with students throughout New York and across the country. Tutors can meet in person in New York or via video conference if you are located outside of the city- most are professional developers or computer science teachers. We have expertise in most popular coding languages, and use a project-based pedagogy.`,
                  icon: "fas fa-chalkboard-teacher fa-2x",
                  bgColor: "rgb(122, 194, 170)"
                }
              ]
            }
          ]}
        />
        <ScrollJack
          content={[
            {
              title: "Students learn real-world tools",
              paragraph:
                "In every one of our classes, participants build real apps, engage wtih coding best practices, and become a part of a supportive and inclusive community of learners.",
              listTitle: "What you'll learn",
              listItems: [
                "Swift",
                "HTML",
                "CSS",
                "JavaScript",
                "Ruby",
                "Python"
              ],
              buttonText: "Upcoming Classes",
              img: b2cScrollJack1
            },
            {
              title: "Project-based learning",
              paragraph:
                "We see coding as a team sport. At Upperline Code, we make sure students practice collaboration every day through pair programming and group projects. At the end of every one of our immersive programs, students work in groups of two to four students to develop an application that they deploy and demo to friends and family",
              listTitle: "",
              listItems: [],
              buttonText: "Upcoming Classes",
              img: b2cScrollJack1
            },
            {
              title: "Fun, supportive environment",
              paragraph:
                "We promise a supportive, professional environment where students of all backgrounds can feel safe, welcome, excited and take risks as a part of their learning process. Whether it's a student's first time learning to code or they are coming to class with a lot of programmin experience, our priority is to make sure students can grow and be their authentic selves.",
              listTitle: "",
              listItems: [],
              buttonText: "Upcoming Classes",
              img: b2cScrollJack1
            }
          ]}
        />
        <Pattern pattern="pattern_bg" />
        <Schedule />
        <ThreePanel
          title="Locations"
          items={[
            {
              img: lmhq_pic,
              title: "Financial District, Manhattan",
              paragraph:
                "LMHQ is a premiere coworking space in the heart of the Financial district. Students love this space because they get to work alongside entrepreneurs building cutting edge technology businesses.",
              location: "LMHQ",
              address: "150 Broadway 20th floor, New York, NY 10038"
            },
            {
              img: dwight_pic,
              title: "Upper West Side, Manhattan",
              paragraph:
                "Our Upper West Side location at the Dwight School is conveniently located next to Central Park and walking distance from the Museum of Natural History.",
              location: "The Dwight School",
              address: "18 W 89th St, New York, NY 10024"
            },
            {
              img: greenwich_pic,
              title: "Greenwich, CT",
              paragraph:
                "Our classes at in Connecticut are held on the beautiful grounds of Greenwich Academy. Students love the modern buildings and surrounding nature.",
              location: "Greenwich Academy",
              address: "200 N Maple Ave, Greenwich, CT 06830"
            }
          ]}
        />

        <ImpactCarousel
          title="Featured Projects"
          carousel={[
            {
              img: waddle,
              background_position: "30% 18%",
              muted_text: "Web Development with Ruby",
              title: "Clarissa & Linda's web application: Waddle",
              content:
                "Waddle is a Ruby application developed by students concerned about safety. Create a waddle and connect with other people walking to similar destinations. Technologies used: Ruby, HTML, CSS, JavaScript, Sinatra, ActiveRecord.",
              link: "https://waddle.herokuapp.com"
            },
            {
              img: maze,
              muted_text: "JavaScript and Virtual Reality",
              title: "Holly's virtual reality maze",
              content:
                "In only three days, Holly learned the basics of WebVR with A-Frame and built a self-generating virtual reality maze. Technologies used: HTML, A-Frame, Javascript",
              link: "https://upperlinecode.com/maze"
            },
            {
              img: recipe,
              muted_text: "Web Development with Ruby",
              title: "Jady's web application: Recipe Finder",
              content:
                "Using the recipes.com API, Jady created a web application for users to figure what to cook based on what they have in their fridge. Technologies used: Ruby, HTML, CSS, Javascript, APIs, Sinatra",
              link: "https://upperlinecode.com/recipe"
            }
          ]}
          metrics={[
            {
              number: "700",
              text: "Students who have taken Upperline Immersives"
            },
            {
              number: "10",
              text: "Countries students have come from for a class"
            },
            { number: "300", text: "Final projects created" },
            {
              number: "150",
              text: "Hours of training received by each instructor"
            }
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
        <FinancialAid />
        <LogoFarm />
        <Footer />
      </div>
    );
  }
}

LandingB2C.defaultProps = {};
LandingB2C.propTypes = {};

export default LandingB2C;
