import React from "react";
import full_hero_bg from "../../images/b2c_landing_pic.jpg";
import "./FullWidthHero.css";
import DownloadForm from "../../components/DownloadForm/DownloadForm";
import PDPHeroInset from "../../components/PDPHeroInset/PDPHeroInset";
function FullWidthHero(props) {
  console.log("subtitle", props.subtitle);
  console.log("btntext", props.button_text);
  return (
    <div style={props.background} className={`FullWidthHero ${props.pattern}`}>
      <div style={props.titleTop}>
        <span className="muted_text" style={props.muted_style}>
          {props.muted_text}
        </span>
        <h1 style={props.title_style}>{props.title}</h1>
        {props.subtitle != undefined && (
          <p id="subtitle" style={props.subtitle_style}>
            {props.subtitle}
          </p>
        )}
        {props.button_text != undefined && (
          <DownloadForm className="button" title={props.button_text} />
        )}
      </div>
      {props.duration && (
        <PDPHeroInset
          duration={props.duration}
          description={props.description}
          level={props.level}
          price={props.price}
        />
      )}
    </div>
  );
}

export default FullWidthHero;
