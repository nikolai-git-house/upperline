import React from "react";
import "./ScrollJackHalfHero.css";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class ScrollJack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      idx: 0
    };
  }
  changeScroll = e => {
    console.log(e.target);
    const newIdx = e.target.id.split("-")[1];

    console.log(newIdx);
    if (newIdx) {
      this.setState({
        idx: Number(newIdx)
      });
    }
  };

  render() {
    const { idx } = this.state;
    const currentContent = this.props.content[idx];
    const imgStyle = {
      background: `url(${currentContent.img})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      width: "100%"
    };
    const variableAttribute = {
      src: `${currentContent.img}`,
      width: "100%",
      height: "40%"
    };
    return (
      <div className="ScrollJack">
        <div className="little-red-thing" />
        <div className="scroll">
          {this.props.content.map((item, i) => {
            const scrollStyle = {
              background: idx == i ? "rgb(255, 113, 91)" : "rgb(242, 242, 242)",
              width: idx == i ? "40px" : "20px",
              fontWeight: "bold"
            };

            return (
              <div
                key={i}
                className="scroll-item"
                id={`scroll-${i}`}
                onClick={this.changeScroll}
              >
                <span className="scroll-text">
                  {idx === i && `0${idx + 1}`}
                </span>
                <div
                  className="scroll-bar"
                  style={scrollStyle}
                  id={`bar-${i}`}
                  onClick={this.changeScroll}
                />
              </div>
            );
          })}
        </div>
        <div className="content ">
          <div className="image" style={imgStyle} />
          <div className="HalfHero-text">
            <h2>{currentContent.title}</h2>
            <img {...variableAttribute} />
            <p>{currentContent.paragraph}</p>
            <p>{currentContent.listTitle}</p>
            <ul>
              {currentContent.listItems.map((item, idx) => {
                return (
                  <li key={idx}>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
            <div className="button">{currentContent.buttonText}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScrollJack;
