import React from "react";
import BulletPoint from "./BulletPoint";
import { points, images } from "../content/data";
import "./About.css";
import { Container } from "reactstrap";

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App => Routes => About
 *  PARENT: Routes
 *  CHILDREN: BulletPoint
 */

function About() {


  const renderBulletPoints = () => {

    return points.map((p, idx) => <BulletPoint point={p} idx={idx} />)
  }

  return (
    <Container className="sectionContainer" id="/about">  
      <div className="about-header">
        Here is a little about me:
      </div>
      <div className="about-container">
        <div className="img-container">
          <img className="img-headshot" src={images.headshot.source} alt=""/>
        </div>
        <div className="about-contents">
          <div className="bullet-point-container">
            {renderBulletPoints()}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default About;