import React from "react";
import "./HalfHero.css";
import { HashLink } from "react-router-hash-link";
// import {Link} from 'react-router-dom'

function HalfHero(props) {
  const imgStyle = {
    background: `url(${props.img})`,
    backgroundSize: "cover",
    backgroundPosition: props.imagestyle || "center"
  };
  const variableAttribute = {
    src: `${props.img}`,
    width: "100%"
  };
  const littleRedStyle = {
    left: props.side === "left" ? "57%" : "7%"
  };

  const halfHeroTextStyle = {
    padding: "5% 15% 10% 15%"
  };

  if (props.side === "left") {
    return (
      <div className="HalfHero" id={props.id}>
        <div className="little-red-thing" style={littleRedStyle} />
        <div className="imgStyle" style={imgStyle} />
        <div className="HalfHero-text" style={halfHeroTextStyle}>
          <h2>{props.title}</h2>
          <img {...variableAttribute} />
          {props.text.map((text, idx) => (
            <p key={idx}>
              {text}
              <br />
            </p>
          ))}
          <br />
          <HashLink to={`/${props.target || "business"}/#form`}>
            <div className="button">{props.buttonText}</div>
          </HashLink>
        </div>
      </div>
    );
  }

  return (
    <div className="HalfHero" id={props.id}>
      <div className="little-red-thing" style={littleRedStyle} />

      <div className="HalfHero-text" style={halfHeroTextStyle}>
        <h2>{props.title}</h2>
        <img {...variableAttribute} />
        {props.text.map((text, idx) => (
          <p key={idx}>
            {text}
            <br />
          </p>
        ))}
        <br />
        <HashLink to={`/${props.target || "business"}/#form`}>
          <div className="button">{props.buttonText}</div>
        </HashLink>
      </div>
      <div style={imgStyle} />
    </div>
  );
}

export default HalfHero;
