import React from "react";
import "./Contact.css";

import AboutGoals from "../AboutGoals/index";
import AboutInterests from "../AboutInterests/index";
import AboutEducation from "../AboutEducation/index";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h5>Contact Me</h5>

      <div className="contactDetails">
        <div className="phone">
          <label className="value">Phone: 0712423207</label>
        </div>
        <div className="email">
          <label className="value">Email: georgeymutti@gmail.com</label>
        </div>
        <div className="address">
          <label className="value">Address: 0789324691</label>
        </div>
      </div>
      <form action="https://formspree.io/email@domain.tld" method="POST">
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <textarea
          className="input-textarea"
          placeholder="Message"
          name="name"
        />
        <button type="submit" value="Send" className="sendmail">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
