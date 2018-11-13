import React from "react";
import pattern_bg from "../../images/uc_pattern_linedot.png";
import "./OurInstructors.css";
import { Link } from "react-router-dom";
import { getInstructors } from "../../helpers/instructors";
import config from "../../config";

class OurInstructors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayIdx: 0,
      active: 0,
      instructors: []
    };
  }

  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.start);
  }
  //
  start = () => {
    // 2. Initialize the JavaScript client library.

    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        getInstructors(this.onLoad);
      });
  };

  onLoad = (data, error) => {
    if (data) {
      const instructors = data.instructors;
      console.log(`instructors: ${instructors}`);
      this.setState(prevState => ({
        instructors: instructors
      }));
    } else {
      this.setState({ error });
    }
  };

  render() {
    const { instructors } = this.state;
    console.log(instructors);
    const displayInst = instructors.slice(
      this.props.start,
      this.props.end == Number(this.props.end)
        ? this.props.end
        : instructors.length
    );
    const height = {
      height: `${instructors.length * 200 + 150}px`
    };
    return (
      <div
        className={`OurInstructors ${this.props.pattern}`}
        id="OurInstructors"
      >
        <div className="OurInstructors_content">
          <div className="OurInstructors_title">
            <div className="little-red-thing" />
            <h2>{this.props.title}</h2>
          </div>
          <div className="OurInstructors_inst OurInstructors_right">
            <div className="option-holder">
              {displayInst.map((inst, idx) => {
                return (
                  <div className="instructor" key={idx}>
                    <center>
                      <img
                        src={
                          require(`../../images/${inst.img}.jpg`)
                            ? require(`../../images/${inst.img}.jpg`)
                            : require(`../../images/uc_pattern_u1.png`)
                        }
                      />
                    </center>
                    <div>
                      <h4>{inst.name}</h4>
                      <p className="muted_text">{inst.title}</p>
                      <p>{inst.bio}</p>
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

export default OurInstructors;
