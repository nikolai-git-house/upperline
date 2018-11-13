import React from "react";
import logo from "../../images/logo_1.png";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import ReactModal from "react-modal";
import ContactForm from "../ContactForm/ContactForm";
import HamburgerButton from "../DrawerMenu/HamburgerButton";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: false,
      schools: false,
      about: false,
      showModal: false,
      first_name: "",
      last_name: "",
      email: "",
      company: "",
      message: ""
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleInputChange = ({ target: { name, value } }) =>
    this.setState(state => ({ [name]: value }));

  toggleStudents = () => {
    //loop through the state object, check for true, trigger the correct dropdown to be visible
    this.setState(prevState => {
      return {
        students: !prevState.students,
        schools: false,
        about: false
      };
    });
  };
  toggleSchools = () => {
    //loop through the state object, check for true, trigger the correct dropdown to be visible
    this.setState(prevState => {
      return {
        students: false,
        schools: !prevState.schools,
        about: false
      };
    });
  };

  toggleAbout = () => {
    //loop through the state object, check for true, trigger the correct dropdown to be visible
    this.setState(prevState => {
      return {
        students: false,
        schools: false,
        about: !prevState.about
      };
    });
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };
  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  setOverlayRef = () => {};
  setContentRef = () => {};
  render() {
    const active = this.props.active;
    const studentStyle = {
      visibility: this.state.students ? "" : "hidden",
      display: this.state.students ? "" : "none"
    };

    const schoolStyle = {
      visibility: this.state.schools ? "" : "hidden",
      display: this.state.schools ? "" : "none"
    };

    const aboutStyle = {
      visibility: this.state.about ? "" : "hidden",
      display: this.state.about ? "" : "none"
    };
    const studentWordStyle = {
      color:
        this.state.students || active === "students"
          ? "rgb(3, 149, 123)"
          : "black"
    };
    const nonprofitWordStyle = {
      color: active === "nonprofits" ? "rgb(3, 149, 123)" : "black"
    };
    const businessWordStyle = {
      color: active === "businesses" ? "rgb(3, 149, 123)" : "black"
    };
    const schoolWordStyle = {
      color:
        this.state.schools || active === "schools"
          ? "rgb(3, 149, 123)"
          : "black"
    };
    const aboutWordStyle = {
      color:
        this.state.about || active === "about" ? "rgb(3, 149, 123)" : "black"
    };
    return (
      <div className="Navbar">
        {/* logo */}
        <div className="Navbar-logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="space" />
        <ul className="Navbar-dropdowns">
          {/* students */}
          <li onClick={this.toggleStudents}>
            <div style={studentWordStyle}>
              <Link to="/students" style={studentWordStyle}>
                Students
              </Link>
              {this.state.students ? <span> ^ </span> : <span>&#9660;</span>}
            </div>
            <ul style={studentStyle} className="dropdown-menu">
              <Link to="/students/#OurClasses">
                <li>2-week Immersives</li>
              </Link>
              <Link to="/students/#OurClasses">
                <li>Workshops</li>
              </Link>
              <Link to="/students/#OurClasses">
                <li>Private Instruction</li>
              </Link>
              <Link to="/students/#FinancialAid">
                <li>Financial Aid</li>
              </Link>
            </ul>
          </li>
          {/* schools */}
          <li onClick={this.toggleSchools}>
            <div style={schoolWordStyle}>
              <Link to="/schools" style={schoolWordStyle}>
                Schools & Districts
              </Link>
              {this.state.schools ? <span> ^ </span> : <span>&#9660;</span>}
            </div>
            <ul style={schoolStyle} className="dropdown-menu">
              <a href="/schools/#Classes">
                <li>Classes for Students</li>
              </a>
              <a href="/schools/#ProfessionalDevelopment">
                <li>Professional Development</li>
              </a>
              <a href="/schools/#Curriculum">
                <li>Curriculum Development</li>
              </a>
              <a href="/schools/#Consulting">
                <li>CS Program Consultation</li>
              </a>
            </ul>
          </li>
          {/* non-profits */}
          <Link to="/nonprofits">
            <li style={nonprofitWordStyle}>Non-profits</li>
          </Link>
          {/* businesses */}
          <Link to="/business">
            <li style={businessWordStyle}>Businesses</li>
          </Link>
          {/* about */}
          <li onClick={this.toggleAbout}>
            <div style={aboutWordStyle}>
              <Link to="/about" style={aboutWordStyle}>
                About
              </Link>
              {this.state.about ? <span> ^ </span> : <span>&#9660;</span>}
            </div>
            <ul style={aboutStyle} className="dropdown-menu ">
              <a href="#">
                <li style={{ width: "150px" }}>Teach with Us</li>
              </a>
              <a href="about#FinancialAid">
                <li style={{ width: "150px" }}>Sponsor a Student</li>
              </a>
            </ul>
          </li>
          {/* inverse: contact us */}
          <li className="purple-bg inverse-navbar-link">
            <ContactForm />
          </li>
        </ul>
        <HamburgerButton click={this.props.drawerClickHandler} />
      </div>
    );
  }
}

export default Navbar;
