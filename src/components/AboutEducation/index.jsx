import React from 'react';
import "./AboutEducation.css";
import about from "../../assets/images/about.svg"

const AboutEducation = () => {
  return (
    <div className="goals-education">
    <img className="icons" src={about} alt="Success"/>
      <h5>Interested In</h5>
      <p>Went to Machakos University and graduated with a Bachelor of science in Computer Science </p>
      <p> Currently a software developer </p>
    </div>
  );
};

export default AboutEducation;
