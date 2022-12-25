import React from "react";
import "../ComponentsStyles/Students.css";

export const Students = () => {
  return (
    <div className="StudentBody">
      <div>
        <div className="FontT2">TOP STUDYING</div>
        <div className="FontT1">Our students say</div>
        <div>
          <div className="imgSDiv">
            <img src="Student-1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="StudentInfo">
        <div className="FontS1">Martin Watson</div>
        <div className="Flex">
          <img src="Flag3.png" alt="" />
          <div className="FontS2">B2 course student</div>
        </div>
        <div className="FontS3">
          There is no way I could have made the same progress learning Spanish
          without using Lingua. The best part is now learning Spanish has become
          one of my biggest hobbies.
        </div>
      </div>
    </div>
  );
};
