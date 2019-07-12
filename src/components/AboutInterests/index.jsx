import React from 'react';
import "./Aboutinterests.css";
import overcome from "../../assets/images/overcome.svg"

const AboutInterests = () => {
  return (
    <div className="about">
    <img className="icons" src={overcome} alt="Success"/>
      <h5>Interested In</h5>
      <p>Socializing and hanging around with friends.
         I am a lover of soccer, music instruments, pool, volleyball </p>
      <p>I am a lover Nature and its wonder </p>
    </div>
  );
};

export default AboutInterests;
