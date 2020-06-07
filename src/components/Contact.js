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
      <h3>Contact</h3>
    
      <div className="contact-link-container">
        <a href="https://www.linkedin.com/in/jurschler/"><i className="fab fa-linkedin"></i></a>
        <a href="https://github.com/jurschler2"><i className="fab fa-github"></i></a>
        <a href="https://angel.co/u/jurschler"><i className="fab fa-angellist"></i></a>
      </div>
    </div>
  </>
  );
}

export default Contact;
