import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import DrawerMenu from "../../components/DrawerMenu/DrawerMenu";
import FullWidthHero from "../../components/FullWidthHero/FullWidthHero";
import Footer from "../../components/Footer/Footer";
import ImpactCarousel from "../../components/ImpactCarousel/ImpactCarousel";
import ThreePanel from "../../components/ThreePanel/ThreePanel";
import LogoFarm from "../../components/LogoFarm/LogoFarm";
import FinancialAid from "../../components/FinancialAidInfo/FinancialAidInfo";
import Pattern from "../../components/Pattern/Pattern";
import TwoWeekSchedule from "../../components/TwoWeekSchedule/TwoWeekSchedule";
import FAQShort from "../../components/FAQShort/FAQShort";
import HomeSplitInfo from "../../components/HomeSplitInfo/HomeSplitInfo";
import "./Home.css";
import b2cScrollJack1 from "../../images/b2cScrollJack1.jpg";
import lmhq_pic from "../../images/lmhq.jpg";
import dwight_pic from "../../images/dwight4.jpg";
import greenwich_pic from "../../images/greenwich.jpg";
import maze from "../../images/maze.png";
import waddle from "../../images/waddle.png";
import recipe from "../../images/recipe.png";
import pattern_bg from "../../images/uc_pattern_linedot.png";
import wendell from "../../images/wendell.jpg";
import home2 from "../../images/home2.jpg";
import home3 from "../../images/home3.jpg";
import ul_home from "../../images/home_hero.jpg";

class Home extends React.Component {
  state = {
    drawerOpen: false
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };
  render() {
    let drawerMenu;
    if (this.state.drawerOpen) {
      drawerMenu = <DrawerMenu />;
    }
    return (
      <div className="Home">
        <Navbar active="" drawerClickHandler={this.drawerToggleClickHandler} />
        <DrawerMenu show={this.state.drawerOpen} />
        <FullWidthHero
          background={{
            background: `url(${ul_home})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            minHeight: "900px"
          }}
          titleTop={{
            paddingTop: "150px",
            textDecoration: "underline",
            textDecorationColor: "rgb(125,226,209)"
          }}
          title="Transform your world with code"
        />
        <HomeSplitInfo />
        <ThreePanel
          title="Our Approach"
          items={[
            {
              img: wendell,
              title: "Computer Science Experts",
              paragraph:
                "We believe that the quality of our instructors leads directly to impactful and transformative experiences for our students. We recruit, train, and develop instructors who will bring out the best in every participant."
            },
            {
              img: home2,
              title: "Real-World Tools",
              paragraph:
                "In every one of our classes, participants build real apps through project-based learning, engage with coding best-practice, and become a part of a supportive and inclusive community of learners. "
            },
            {
              img: home3,
              title: "Inclusive & Supportive Environment",
              paragraph:
                "We create spaces where a diverse group of students can feel safe, welcome, and excited. Our teachers and students support each other in both victory and defeat, and take risks as a part of their learning process, which makes learing to code a joyful experience."
            }
          ]}
        />
        <ImpactCarousel
          title="Our Impact"
          carousel={[
            {
              img: waddle,
              muted_text: "",
              title: "Waddle App",
              content:
                "Waddle is a Ruby application developed by students concerned about safety. Create a waddle and connect with other people walking to similar destinations. Technologies used: Ruby, HTML, CSS, JavaScript, Sinatra, ActiveRecord.",
              link: "https://waddle.herokuapp.com"
            }
          ]}
          metrics={[
            { number: "30", text: "Intensive educator training participants" },
            { number: "190", text: "Attendees to 1-day educator workshops" },
            { number: "700", text: "Students taught" },
            {
              number: "300",
              text: "Final group projects developed by students"
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

export default Home;
