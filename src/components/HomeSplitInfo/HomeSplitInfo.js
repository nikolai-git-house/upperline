import React from "react";
import "./HomeSplitInfo.css";
import { Link } from "react-router-dom";

function HomeSplitInfo(props) {
  return (
    <div className="HomeSplitInfo pattern_bg">
      <div className="content">
        <div className="SplitInfo-left">
          <div className="little-red-thing" />
          <h2>
            We create profoundly impactful educational experiences & services.
            <br />
          </h2>
          <p>
            At Upperline Code, we are computer science education experts
            providing educational solutions to students, schools and districts,
            non-profits, and businesses.
            <br />
          </p>
        </div>
        <div className="space" />
        <div className="SplitInfo-right">
          <div className="content-item">
            <div className="icon-border">
              <div className="icon-holder">
                <i className="fas fa-user fa-2x" />
              </div>
            </div>
            <div className="content-item-text-holder">
              <h4>
                <Link to="/students">Students</Link>
              </h4>
              <div>
                <p>
                  Change your world through code with our{" "}
                  <Link className="link" to="/students">
                    immersive courses, workshops, and private instruction
                  </Link>{" "}
                  all designed to help students use real-world tools to get
                  their ideas built and deployed
                </p>
              </div>
              <Link to="/students">
                <div className="purple-box">
                  <div />
                </div>
              </Link>
            </div>
            <Link to="/students">
              <div className="purple-box">
                <div />
              </div>
            </Link>
          </div>

          <div className="content-item">
            <div className="icon-border">
              <div className="icon-holder">
                <i className="fas fa-school fa-2x" />
              </div>
            </div>
            <div className="content-item-text-holder">
              <h4>Schools & Districts</h4>
              <div>
                <p>
                  Set up and implement computer science programs in your school
                  with{" "}
                  <Link className="link" to="/">
                    licensed curriculua{" "}
                  </Link>
                  , workshops, and classes designed to{" "}
                  <Link className="link" to="/">
                    train & support your teachers
                  </Link>
                  .
                </p>
              </div>
              <Link to="/students">
                <div className="purple-box">
                  <div />
                </div>
              </Link>
            </div>
            <Link to="/students">
              <div className="purple-box">
                <div />
              </div>
            </Link>
          </div>

          <div className="content-item">
            <div className="icon-border">
              <div className="icon-holder">
                <i className="fas fa-hand-holding-heart fa-2x" />
              </div>
            </div>
            <div className="content-item-text-holder">
              <h4>Non-Profits</h4>
              <div>
                <p>
                  Supplement your STEM programs with classes, curriculum, and
                  teacher training customized to fit the needs of your programs
                  and students
                </p>
              </div>
              <Link to="/students">
                <div className="purple-box">
                  <div />
                </div>
              </Link>
            </div>
            <Link to="/students">
              <div className="purple-box">
                <div />
              </div>
            </Link>
          </div>

          <div className="content-item" id="business">
            <div className="icon-border">
              <div className="icon-holder">
                <i className="fas fa-building fa-2x" />
              </div>
            </div>
            <div className="content-item-text-holder">
              <h4>
                <Link to="/business">Businesses</Link>
              </h4>
              <div>
                <p>
                  Transform your workforce and advance your educaiton
                  initiatives with training, courses, and curricula tailored to
                  the specific needs of your organization.{" "}
                </p>
              </div>
              <Link to="/students">
                <div className="purple-box">
                  <div />
                </div>
              </Link>
            </div>
            <Link to="/business">
              <div className="purple-box">
                <div />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSplitInfo;
