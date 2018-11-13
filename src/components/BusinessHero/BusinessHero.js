import React from "react";
import BusinessHeroForm from "../BusinessHeroForm/BusinessHeroForm";

import "./BusinessHero.css";
// import marisa from './marisaBetter_resized.jpeg'
import pattern_linedot from "../../images/uc_pattern_linedot.png";

function BusinessHero(props) {
  const marisaStyle = {
    background: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    overflow: "hidden"
  };
  const pattern = "green_u";
  return (
    <div className={`BusinessHero ${pattern}`}>
      <div className="white-div" />
      <div className="Hero-marisa" style={marisaStyle} />
      <div className="Hero-cta">
        <div className="Hero-cta_underline">Businesses</div>
        <div className="Hero-cta_jumbo_text">
          <h2>
            Advance your education initiatives with our business solutions.
          </h2>
        </div>
      </div>
      <BusinessHeroForm />
    </div>
  );
}

export default BusinessHero;
