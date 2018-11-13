import React from "react";
import OurInstructors from "../../components/OurInstructors/OurInstructors";
import Navbar from "../../components/Navbar/Navbar";
import DrawerMenu from "../../components/DrawerMenu/DrawerMenu";
import FullWidthHero from "../../components/FullWidthHero/FullWidthHero";
import Pattern from "../../components/Pattern/Pattern";
import FinancialAid from "../../components/FinancialAidInfo/FinancialAidInfo";
import MissionVision from "../../components/MissionVision/MissionVision";
import LogoFarm from "../../components/LogoFarm/LogoFarm";
import Footer from "../../components/Footer/Footer";
import HalfHero from "../../components/HalfHero/HalfHero";
import TeachWithUs from "../../components/TeachWithUs/TeachWithUs";
import danny from "../../images/Danny.jpg";
import taylor from "../../images/Taylor.jpg";
import jolson from "../../images/JOlson.jpg";
class About extends React.Component {
  state = {
    drawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { drawerOpen: !prevState.drawerOpen };
    });
  };
  render() {
    return (
      <div className="About" id="about">
        <Navbar
          active="about"
          drawerClickHandler={this.drawerToggleClickHandler}
        />
        <DrawerMenu show={this.state.drawerOpen} />
        <FullWidthHero
          pattern="yellow_tiles"
          muted_text="About"
          title="About Upperline Code"
          muted_style={{ color: "black" }}
          title_style={{
            width: "70%",
            color: "black"
          }}
          titleTop={{
            paddingTop: "12px",
            marginTop: "320px",
            marginBottom: 0
          }}
          subtitle="We are computer science education experts providing educational solutions to students, schools and districts, non-profits, and businesses."
          subtitle_style={{
            width: "60%",
            marginTop: "40px",
            textAlign: "center"
          }}
        />
        <MissionVision />
        <Pattern height={{ height: "80px" }} pattern="yellow_tiles" />
        <OurInstructors
          start="0"
          end="3"
          title="Our Team"
          pattern="yellow_tiles"
        />
        <Pattern height={{ height: "80px" }} pattern="yellow_tiles" />
        <OurInstructors
          title="Our Instructors"
          start="3"
          end="instructors.length"
          pattern="yellow_tiles"
        />
        <Pattern height={{ height: "80px" }} pattern="yellow_tiles" />
        <TeachWithUs />
        <FinancialAid />
        <LogoFarm />
        <Footer />
      </div>
    );
  }
}

export default About;
