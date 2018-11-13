import React from "react";

import "./ImpactCarousel.css";

class ImpactCarousel extends React.Component {
  // props.carousel is an array of objects with info about what
  // the carousel should display. keys are img, muted-text, title, content
  constructor(props) {
    super(props);

    this.state = {
      carouselIdx: 0
    };
  }

  changeCarouselRight = () => {
    if (this.state.carouselIdx === this.props.carousel.length - 1) {
      return;
    }
    this.setState(prevState => ({ carouselIdx: prevState.carouselIdx + 1 }));
  };

  changeCarouselLeft = () => {
    if (this.state.carouselIdx === 0) return null;
    this.setState(prevState => ({ carouselIdx: prevState.carouselIdx - 1 }));
  };

  render() {
    const pattern = this.props.pattern;
    const { carouselIdx } = this.state;
    const carouselInfo = this.props.carousel[carouselIdx];
    const disabledStyle = { background: "lightgray", cursor: "not-allowed" };
    const leftArrowStyle = carouselIdx === 0 ? disabledStyle : {};
    const rightArrowStyle =
      carouselIdx === this.props.carousel.length - 1 ? disabledStyle : {};
    const carouselImgStyle = {
      backgroundImage: `url(${carouselInfo.img})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: carouselInfo.background_position
    };

    return (
      <div className="ImpactCarousel">
        <div className="content">
          <div className="white-bg">
            <div className="little-red-thing" style={{ left: "17%" }} />
            <h2>{this.props.title}</h2>
          </div>
          <div className={`pattern-bg ${pattern || "pattern_bg"}`}>
            <div className="carousel-holder">
              <div className="carousel-img" style={carouselImgStyle} />
              <div className="carousel-buttons">
                <div className="carousel-button-holder">
                  <div
                    className="left-arrow"
                    onClick={this.changeCarouselLeft}
                    style={leftArrowStyle}
                  >
                    <div />
                  </div>
                  <p style={{ display: "flex", justifyContent: "center" }}>
                    {carouselIdx + 1} / {this.props.carousel.length}
                  </p>
                  <div
                    className="right-arrow"
                    onClick={this.changeCarouselRight}
                    style={rightArrowStyle}
                  >
                    <div />
                  </div>
                </div>
              </div>
              <div className="carousel-info">
                <div className="carousel-info-content">
                  <p className="muted-text">{carouselInfo.muted_text}</p>
                  <h3>{carouselInfo.title}</h3>
                  <p>{carouselInfo.content}</p>
                </div>
                <div className="carousel-info-button">
                  <a href={carouselInfo.link} target="blank()">
                    <div
                      className="purple-box"
                      onClick={
                        carouselInfo.link ? null : this.changeCarouselRight
                      }
                    >
                      <div />
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="impact-metrics">
              {this.props.metrics.map((obj, idx) => {
                return (
                  <div className="metric" key={idx}>
                    <h1 className="metric-title">{obj.number}</h1>
                    <p className="muted-text">{obj.text}</p>
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

export default ImpactCarousel;
