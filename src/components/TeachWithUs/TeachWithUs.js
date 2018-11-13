import React from "react";
import "./TeachWithUs.css";
import { getJobs } from "../../helpers/jobs";
import config from "../../config";
class TeachWithUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      error: null
    };
  }

  onLoad = (data, error) => {
    if (data) {
      const jobs = data.jobs;
      this.setState(prevState => ({
        jobs: jobs
      }));
    } else {
      this.setState({ error });
    }
  };
  //

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
        getJobs(this.onLoad);
      });
  };

  render() {
    const { jobs, displayed } = this.state;

    return (
      <div className="TeachWithUs" id="Jobs">
        <div className="content">
          <div className="title">
            <h3>Work with Us!</h3>
          </div>
          <div className="jobs-container">
            {jobs.map((job, idx) => {
              {
                console.log(idx);
              }
              return (
                <div key={idx} className="job">
                  <center>
                    <div
                      className="icon-holder"
                      style={{ background: `rgb(${job.background})` }}
                    >
                      <i className={job.icon} />
                    </div>
                  </center>
                  <div className="job-content">
                    <h4>{job.title}</h4>
                    <p className="description">{job.description}</p>
                  </div>
                  <div className="job-info">
                    <p>
                      {" "}
                      <span>Type: </span> {job.type}
                    </p>
                    <p>
                      <span>Status: </span> {job.status}
                    </p>
                    <p>
                      <span> Start date: </span> {job.start}
                    </p>
                    <p
                      style={{
                        visibility: job.end ? "" : "hidden",
                        display: job.end ? "" : "none"
                      }}
                    >
                      {" "}
                      <span>End date:</span> {job.end}
                    </p>
                    <center>
                      <a target="blank" href={job.jdLink}>
                        <div className="button">Learn More!</div>
                      </a>
                    </center>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default TeachWithUs;
