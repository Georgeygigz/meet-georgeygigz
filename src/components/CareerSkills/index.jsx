import React from "react";
import "./CareerSkills.css";
import employee from "../../assets/images/employee.svg"

const CareerSkills = () => {
  return (
    <div className="career-objectives-image">
    <img className="icons" src={employee} alt="Success"/>

    <h5> Skills </h5>
      <p>Good interpersonal skills and communication skills, ability and willingness to work flexibly, quick learner, team player</p>
      <p>Software developer proficient in <span className="skills">Python, React js, Node js </span>  </p>

    </div>
  );
};

export default CareerSkills;