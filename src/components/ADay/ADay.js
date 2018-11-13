import React from "react";
import "./ADay.css";
import pic2 from "../../images/aday1.jpg";
import pic1 from "../../images/aday2.jpg";
import pic3 from "../../images/aday3.jpg";

function ADay(props) {
  return (
    <div className="ADay" id="ADay">
      <div className="content pdp_detail" style={{ border: "none" }}>
        <div className="title">
          <h3>A day at Upperline</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            elusmod tempor incididunt ut labore
          </p>
        </div>
        <div className="images">
          <div>
            <img src={pic1} />
          </div>
          <div>
            <img src={pic2} />
          </div>
          <div>
            <img src={pic3} />
          </div>
        </div>
        <div className="schedule">
          <div className="times" style={{ fontWeight: "bold" }}>
            <div>
              <p>9:00am - 9:30am</p>
            </div>
            <div>
              <p>9:30am - 10:00am</p>
            </div>
            <div>
              <p>10:00am - 11:30am</p>
            </div>
            <div>
              <p>11:30am - 12:30pm</p>
            </div>
            <div>
              <p>12:30pm - 1:15pm</p>
            </div>
            <div>
              <p>1:15pm - 2:45pm</p>
            </div>
            <div>
              <p>2:45pm - 3:00pm</p>
            </div>
          </div>
          <div className="activities">
            <div>
              {" "}
              <p>Review challenge, warm-up, and welcome</p>
            </div>
            <div>
              {" "}
              <p>New concept code-along</p>
            </div>
            <div>
              {" "}
              <p>Practice labs and challenges</p>
            </div>
            <div>
              {" "}
              <p>Lunch</p>
            </div>
            <div>
              {" "}
              <p>Small-group breakout sessions.</p>
            </div>
            <div>
              {" "}
              <p>Partner project challenge.</p>
            </div>
            <div>
              {" "}
              <p>Debrief and feedback.</p>
            </div>
          </div>
        </div>
        <div className="schedule_mobile">
          <div style={{ fontWeight: "bold" }}>
            <div>
              <p>
                <b>9:00am - 9:30am</b>
              </p>
              <p>Review challenge, warm-up, and welcome</p>
            </div>
            <div>
              <p>
                <b>9:30am - 10:00am</b>
              </p>
              <p>New concept code-along</p>
            </div>
            <div>
              <p>
                <b>10:00am - 11:30am</b>
              </p>
              <p>Practice labs and challenges</p>
            </div>
            <div>
              <p>
                <b>11:30am - 12:30pm</b>
              </p>
              <p>Lunch</p>
            </div>
            <div>
              <p>
                <b>12:30pm - 1:15pm</b>
              </p>
              <p>Small-group breakout sessions.</p>
            </div>
            <div>
              <p>
                <b>1:15pm - 2:45pm</b>
              </p>
              <p>Partner project challenge.</p>
            </div>
            <div>
              <p>
                <b>2:45pm - 3:00pm</b>
              </p>
              <p>Debrief and feedback.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ADay;
