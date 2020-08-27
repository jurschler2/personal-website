import React from "react";
import { Container, Row, Col } from "react-bootstrap"
// import "./Home.css"

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App => Routes => Home
 *  PARENT: Routes
 *  CHILDREN:
 */

function Home() {

  return (
    <Container className="sectionContainer" id="/">
      <Row>
        <Col xs={{ span: 12, offset: 0 }} md={{ span: 12, offset: 0 }}>
          <h4 data-aos-delay="100" data-aos="fade"className="intro-hello">Hello there, my name is</h4>
          <h2 data-aos-delay="900" data-aos="fade" className="intro-name">Joseph Urschler</h2>
          <div data-aos-delay="1500" data-aos="fade-right"className="homeRule"></div>
          <h3 data-aos-delay="2000" data-aos="fade" className="intro-tagline">I like to build things.</h3>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;