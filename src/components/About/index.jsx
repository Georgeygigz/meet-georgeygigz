import React from "react";
import "./About.css";
import GoalsImage from "../GoalsImage/index"
import AboutGoals from "../AboutGoals/index"
import AboutInterests from "../AboutInterests/index"
import AboutEducation from "../AboutEducation/index"

const About = () => {
  return (
    <div id="about" className="goals">
      <AboutEducation/>
      <AboutGoals/>
      <AboutInterests/>
    </div>
  );
};

export default About;
