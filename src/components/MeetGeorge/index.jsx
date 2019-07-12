import React from "react";
import "./MeetGeorge.css";
import MeetGeorgeImage from '../MeetGeorgeImage/index'
import MeetGeorgeText from '../MeetGeorgeText/index'

const MeetGeorge = () => {
  return (
    <div id="home" className="meet-george">
      <MeetGeorgeImage/>
      <MeetGeorgeText/>
    </div>
  );
};

export default MeetGeorge;
