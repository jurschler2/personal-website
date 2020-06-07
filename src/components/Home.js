import React from "react";
import { images } from "../content/data";

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
      <img src={images.background.source} alt="" height='100%' width='100%'/>
    </div>
  )
}

export default Home;