import React from "react";
import "./MissionVision.css";

function MissionVision({}) {
  return (
    <div className="MissionVision pattern_bg">
      <div className="content">
        <div className="center">
          <div className="right-item">
            <div className="icon-holder">
              <i class="fas fa-heart fa-2x" />
            </div>
            <div>
              <h4>Mission</h4>
              <p>
                Train the next generation of computer science leaders and
                empower students to change their world with code.
              </p>
            </div>
          </div>

          <div className="right-item">
            <div className="icon-holder">
              <i class="fas fa-eye fa-2x" />
            </div>
            <div>
              <h4>Vision</h4>
              <p>
                Transform middle & high school education by making computer
                science accessible to all students regardless of race, gender,
                or income.
              </p>
            </div>
          </div>

          <div className="right-item">
            <div className="icon-holder">
              <i class="fas fa-check fa-2x" />
            </div>
            <div>
              <h4>Values</h4>
              <p> Inclusiveness. Curiosity. Rigor. Collaboration. Quality. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision;
