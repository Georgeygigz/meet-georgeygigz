import React from "react";
import "./CareerJob.css";
import analytics from '../../assets/images/analytics.svg'

const CareerJob = () => {
  return (
    <div className="career-objectives-job">
    <img className="icons" src={analytics} alt="Success"/>
      <h5>Current Job</h5>
      <p>Software developer At <a href="https://andela.com"> Andela </a>  </p>
    </div>
  );
};

export default CareerJob;
