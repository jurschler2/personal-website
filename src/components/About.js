import React from "react";
import BulletPoint from "./BulletPoint";
import { points, images } from "../content/data";
// import "./About.css";
import { Container, Row, Col } from "reactstrap";
import { Image } from "react-bootstrap"

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
      <Row>
        <Col
          xs={{ span: 8, offset: 2 }}
          md={{ span: 5, offset: 0}}
          lg={{ span: 4, offset: 1 }}
          className="mb-4"
        >
          <div className="img-container">
          <Image data-aos="fade" className="aboutImage" fluid rounded src={images.headshot.source} alt=""/>
        </div>
        </Col>

        <Col md={7} lg={6} >
          <h3 data-aos="fade-up" className="about-header">
            Here is a little about me:
          </h3>
          <div data-aos="fade" className="aboutRule"></div>
          <div className="about-container">
            <div className="about-contents">
              <div className="bullet-point-container">
                {renderBulletPoints()}
              </div>
            </div>
          </div>
          </Col>
      </Row>
    </Container>
  )
}

export default About;