import React from "react";

import "./HamburgerButton.css";

const HamburgerButton = props => (
  <button className="toggle-button hamburger" onClick={props.click}>
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
    <div className="toggle-button_line" />
  </button>
);

export default HamburgerButton;
