import React from "react";
import "./CareerObjectivesText.css";
import goal from '../../assets/images/goal.svg'

const CareerObjectivesText = () => {
  return (
    <div className="career-objectives-text">
    <img className="icons" src={goal} alt="Success"/>
      <h5>Career Objective </h5>
      <p>To utilize proficient skills and techniques to the best of my ability in any institution that is competitive, growth oriented and that demands total dedication, hard work to cause emphasize 
        application of knowledge for personal growth and advancement and for the benefit of the institution.</p>
    </div>
  );
};

export default CareerObjectivesText;
