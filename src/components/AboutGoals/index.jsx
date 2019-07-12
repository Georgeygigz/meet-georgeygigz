import React from "react";
import "./AboutGoals.css";
import promotion from "../../assets/images/promotion.svg"

const GoalsText = () => {
  return (
    <div className="about-goals">
    <img className="icons" src={promotion} alt="Success"/>
      <h5>Goals</h5>
      <p>I would like to be a world-class developer who contributes in providing solutions to tech problems </p>
    </div>
  );
};

export default GoalsText;
