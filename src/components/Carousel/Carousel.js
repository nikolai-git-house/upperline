import React from "react";
import "./Carousel.css";

class Carousel extends React.Component {
  // props.carousel is an array of objects with info about what
  // the carousel should display. keys are img, muted-text, title, content
  constructor(props) {
    super(props);

    this.state = {
      carouselIdx: 0
    };
  }

  // componentDidMount(){
  //   const carousel = this.props.carousel
  //   const carouselInfo=this.props.carousel[this.state.carouselIdx]
  //   document.querySelector('.carousel-img').setAttribute("style","url(../../images/pixels.png)")
  // }
  changeCarouselRight = () => {
    if (this.state.carouselIdx === this.props.carousel.length - 1) {
      return;
    }
    this.setState(prevState => ({ carouselIdx: prevState.carouselIdx + 1 }));
  };

  changeCarouselLeft = () => {
    if (this.state.carouselIdx === 0) {
      return;
    }
    this.setState(prevState => ({ carouselIdx: prevState.carouselIdx - 1 }));
  };

  render() {
    const { carouselIdx } = this.state;
    const carouselInfo = this.props.carousel[carouselIdx];
    console.log(carouselInfo.img);
    const disabledStyle = { background: "lightgray", cursor: "not-allowed" };
    const leftArrowStyle = carouselIdx === 0 ? disabledStyle : {};
    const rightArrowStyle =
      carouselIdx === this.props.carousel.length - 1 ? disabledStyle : {};

    return (
      <div className="Carousel" id="WhatYoullMake">
        <div className="content pdp_detail">
          <div className="title">
            <h3>{this.props.title}</h3>
          </div>
          <div className="all-carousel">
            <div className="carousel-holder">
              <div className={this.props.pattern} />
              <div
                className="carousel-img"
                style={{
                  backgroundImage: `url(${carouselInfo.img})`,
                  overflow: "hidden"
                }}
              />
              {/* <div className="carousel-buttons">
                <div className="carousel-button-holder">
                  <div
                    className="left-arrow"
                    onClick={this.changeCarouselLeft}
                    style={leftArrowStyle}>
                    <div></div>
                  </div>
                  <p style={{display: 'flex', justifyContent: 'center'}}>{carouselIdx+1} / {this.props.carousel.length}</p>
                  <div
                    className="right-arrow"
                    onClick={this.changeCarouselRight}
                    style={rightArrowStyle}>
                    <div></div>
                  </div>
                </div>
              </div> */}
              <div className="carousel-info">
                <div className="carousel-info-content">
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
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
