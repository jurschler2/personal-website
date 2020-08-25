import React from "react";
import {Container} from "reactstrap";
import "./Home.css"

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
      <div className="home-container">
        <p className="intro-hello">Hello there, my name is</p>
        <p className="intro-name">Joseph Urschler.</p>
        <p className="intro-tagline">I like to build things.</p>
      </div>
    </Container>
  )
}

export default Home;