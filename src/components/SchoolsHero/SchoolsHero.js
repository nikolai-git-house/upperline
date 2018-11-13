import React from "react";
import SchoolsHeroForm from "../SchoolsHeroForm/SchoolsHeroForm";

import "./SchoolsHero.css";
// import noah from './noahBetter_resized.jpeg'

function SchoolsHero(props) {
  const heroImageStyle = {
    background: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "80% 50%",
    backgroundRepeat: "no-repeat",
    overflow: "hidden"
  };
  const pattern = "yellow_triangles";

  return (
    <div className={`Hero ${pattern}`}>
      <div className="white-div" />
      <div className="Hero-noah" style={heroImageStyle} />
      <div className="Hero-cta">
        <div className="Hero-cta_underline">Schools</div>
        <div className="Hero-cta_jumbo_text">
          <h2>Grow Your Computer Science Department.</h2>
        </div>
      </div>
      <SchoolsHeroForm />
    </div>
  );
}

export default SchoolsHero;
