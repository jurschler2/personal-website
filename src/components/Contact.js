import React from "react";
import "./Contact.css";

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App => Routes => About
 *  PARENT: Routes
 *  CHILDREN: BulletPoint
 */

function Contact() {
  return (
  <>
    <div className="contact">
      <div className="contact-header">
       Get in contact:
      </div>
      <div className="contact-link-container">
        <div className="contact-link">
          <a href="https://www.linkedin.com/in/jurschler/"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className="contact-link">
          <a href="https://github.com/jurschler2"><i className="fab fa-github"></i></a>
        </div>
        <div className="contact-link">
          <a href="https://angel.co/u/jurschler"><i className="fab fa-angellist"></i></a>
        </div>
        <div className="contact-link">
          <a href="mailto:jurschler25@gmail.com"><i className="fas fa-paper-plane"></i></a>
        </div>
      </div>
      {/* <div className="contact-resume-container">
        <div className="contact-resume">
          <a href="google.com">
            <p className="contact-resume-text">Download Resume</p>
          </a>
        </div>
      </div> */}
    </div>
  </>
  );
}

export default Contact;
//Check out my resume and get in contact: