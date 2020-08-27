import React from "react";
import resume from "../content/JosephUrschlerResume.pdf";
import { Container, Row, Col } from "reactstrap";

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App => Routes => About
 *  PARENT: Routes
 *  CHILDREN: BulletPoint
 */

function Contact() {
  return (
    <Container className="sectionContainer" id="/contact">
      <Row>
        <Col md={12} lg={12}>
          <div className="contact-header">
            <h3 className="text-center">
            Contact
            </h3>
            <div data-aos="fade-right" className="portfolioRule mx-auto mt-3 mb-5"></div>
          </div>
        </Col>
        <Col md={12} lg={12}>
          <div className="contact-link-container  mx-auto mt-3 mb-5" data-aos="fade">
              <div>
                <a href="https://www.linkedin.com/in/jurschler/"><i className="contact-link fab fa-linkedin"></i></a>
              </div>
              <div>
                <a href="https://github.com/jurschler2"><i className="contact-link fab fa-github"></i></a>
              </div>
              <div>
                <a href="https://angel.co/u/jurschler"><i className="contact-link fab fa-angellist"></i></a>  
              </div>
              <div>
                <a href="mailto:jurschler25@gmail.com"><i className="contact-link fas fa-paper-plane"></i></a>
              </div>
          </div>
        </Col>
        <Col md={12} lg={12}>
          <div className="contact-resume-container text-center" data-aos="fade-up">
            <div className="contact-resume">
              <a href={resume} download>
                <p className="contact-resume-text text-center">Download Resume</p>
              </a>
            </div>
          </div>
        </Col>  
      </Row>
  </Container>
  );
}

export default Contact;