import React from "react";
import "./CareerObjectives.css";
import CareerSkills from "../CareerSkills/index";
import CareerObjectivesText from "../CareerObjectivesText/index";
import CareerJob from "../CareerJob/index"


const CareerObjectives = () => {
  return (
    <div id="career-objectives" className="career-objectives">
      <CareerObjectivesText />
      <CareerSkills />
      <CareerJob/>
    </div>
  );
};

export default CareerObjectives;
