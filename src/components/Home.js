import React from "react";
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
    <div className="home-page">
      <div className="home-container">
        <p className="intro-hello">Hello there, my name is</p>
        <p className="intro-name">Joseph Urschler.</p>
        <p className="intro-tagline">I like to build things.</p>
      </div>
    </div>
  )
}

export default Home;