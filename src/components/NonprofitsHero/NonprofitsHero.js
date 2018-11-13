import React from "react";
import NonprofitsHeroForm from "../NonprofitsHeroForm/NonprofitsHeroForm";

import "./NonprofitsHero.css";
// import noah from './noahBetter_resized.jpeg'

function NonprofitsHero(props) {
  const heroImageStyle = {
    background: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "80% 50%",
    backgroundRepeat: "no-repeat",
    overflow: "hidden"
  };
  const pattern = "green_u";

  return (
    <div className={`Hero ${pattern}`}>
      <div className="white-div" />
      <div className="Hero-noah" style={heroImageStyle} />
      <div className="Hero-cta">
        <div className="Hero-cta_underline">Nonprofits</div>
        <div className="Hero-cta_jumbo_text">
          <h2>Maximize your impact by partnering with Upperline.</h2>
        </div>
      </div>
      <NonprofitsHeroForm />
    </div>
  );
}

export default NonprofitsHero;
