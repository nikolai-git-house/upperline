import React from "react";
import upperline_logo from "../../images/logo_1.png";
import NewsletterForm from "../NewsletterForm/NewsletterForm";
import "./Footer.css";

function Footer(props) {
  const imageStyle = {
    width: "100%",
    height: "110%"
  };

  return (
    <div className="Footer">
      <div className="content-holder">
        <div className="logo footer-content">
          <div>
            <img style={imageStyle} src={upperline_logo} />
          </div>
          <p>
            Upperline code is committed to making quality CS education
            accessible for all students.
          </p>
        </div>
        <div className="links footer-content">
          <ul>
            <li>
              <a href="/students">Students</a>
            </li>
            <li>
              <a href="/schools">Schools & Districts</a>
            </li>
            <li>
              <a href="/nonprofits">Non-Profits</a>
            </li>
            <li>
              <a href="/business">Businesses</a>
            </li>
            <li>
              <a href="/#sponsorship">Sponsor a Student</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        <div className="contact-us footer-content">
          <div>
            <p style={{ fontWeight: "bold", marginTop: 0 }}>Contact Us</p>
            <p style={{ marginTop: "8px" }}>{`Mon-Fri: 10am-5pm EST`}</p>
          </div>
          <div className="contact-info">
            <div>
              <i className="fas fa-mobile-alt" /> (646) 653-2633
            </div>
            <div>
              <a href="mailto:info@upperlinecode.com">
                <i className="far fa-envelope" />
              </a>{" "}
              info@upperlinecode.com{" "}
            </div>
          </div>
        </div>
        <div className="social footer-content">
          <div>
            <p>Stay in Touch</p>
            <div className="icon-holder">
              <a
                className="social-icon"
                href="https://twitter.com/upperlinecode"
                target="_blank"
              >
                <i className="fab fa-twitter " />
              </a>
              <a
                className="social-icon"
                href="https://www.facebook.com/upperlinecode"
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="social-icon"
                href="https://www.instagram.com/upperlinecode/"
                target="_blank"
              >
                <i className="fab fa-instagram " />
              </a>
              <a
                className="social-icon"
                href="https://www.linkedin.com/company/upperline-code/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in " />
              </a>
            </div>
            <div className="button">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; 2018 Upperline LLC. All Rights Reserved</p>
        <p>
          <a href="#" style={{ textDecoration: "none" }}>
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
