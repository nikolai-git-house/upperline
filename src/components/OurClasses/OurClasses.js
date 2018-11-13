import React from "react";
import ReactDOM from "react-dom";
import pattern_bg from "../../images/uc_pattern_linedot.png";
import "./OurClasses.css";
import { Link } from "react-router-dom";

class OurClasses extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      displayIdx: 0,
      active: 0
    };
  }
  scrollToDomRef = () => {
    const myDomNode = ReactDOM.findDOMNode(this.myRef.current);
    myDomNode.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  };
  componentDidMount() {
    this.setState({
      active: 0
    });
  }

  selectOption = e => {
    const newIdx = e.target.id.split("-")[1];
    this.setState(prevState => {
      return {
        active: Number(newIdx)
      };
    });
    this.scrollToDomRef();
  };
  // componentDidMount(){
  //   window.scrollTo(0, -100);
  // }

  render() {
    let { displayIdx, active } = this.state;
    if (displayIdx != active) {
      displayIdx = active;
    }
    const currentContent = this.props.options[displayIdx].content;
    let optionHeight = {
      minHeight: `${this.props.options[displayIdx].content.length * 150 +
        500}px`
    };
    console.log(optionHeight);
    return (
      <div
        className="OurClasses pattern_bg"
        style={optionHeight}
        id="OurClasses"
      >
        <div className="OurClasses_content">
          <div className="little-red-thing" style={{ left: "9%" }} />
          <div className="OurClasses_left">
            <h2>Our Classes</h2>
          </div>
          <div className="OurClasses_right">
            <div className="option-holder">
              {this.props.options.map((opt, idx) => {
                // const returnIdx = () => idx || 0

                if (idx === displayIdx) {
                  return (
                    <div key={idx} className="option">
                      <p className="muted_text">0{idx + 1}.</p>
                      <h4 style={{ marginBottom: 0 }}>{opt.title}</h4>
                      <p>{opt.desc}</p>
                      <p
                        style={{ marginBottom: 0 }}
                        onClick={this.selectOption}
                        data_value={idx}
                        className="muted_text"
                        id={`option-${idx}`}
                      >
                        Quick View
                      </p>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={idx}
                      style={{ borderBottom: "solid 1px rgba(242,242,242,1)" }}
                      className="option"
                    >
                      <p className="muted_text">0{idx + 1}.</p>
                      <h4>{opt.title}</h4>
                      <p>{opt.desc}</p>
                      <p
                        style={{ marginBottom: 0, color: "rgb(61, 52, 139)" }}
                        onClick={this.selectOption}
                        data_value={idx}
                        className="muted_text"
                        id={`option-${idx}`}
                      >
                        Quick View
                      </p>
                    </div>
                  );
                }
              })}
            </div>
            <div className="option-content-holder" ref={this.myRef}>
              {currentContent.map((c, idx) => {
                return (
                  <div className="content-item" key={idx}>
                    <div className="icon-holder">
                      <i
                        className={c.icon}
                        style={{
                          background: c.bgColor
                        }}
                      />
                    </div>
                    <div className="content-item-text-holder">
                      <h4>
                        <a
                          target={displayIdx == 2 ? "blank" : ""}
                          href={
                            displayIdx == 0
                              ? `/pdp/${c.title}`
                              : displayIdx == 2
                                ? `https://drive.google.com/file/d/1FC3a6Y8LWibl8Rvk34vKQ_qjJri1FJ3x/view?usp=sharing`
                                : `students#schedule`
                          }
                        >
                          {c.title}
                        </a>
                      </h4>
                      <p>{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OurClasses;
