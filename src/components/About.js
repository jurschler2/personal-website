import React from "react";
import BulletPoint from "./BulletPoint"
import { points } from "../content/data"

/**
 *  DESCRIPTION:
 *  PROPS: None
 *  FLOW: App => Routes => About
 *  PARENT: Routes
 *  CHILDREN: BulletPoint
 */

function About() {


  const renderBulletPoints = () => {

    return points.map(p => <BulletPoint point={p} />)
  }

  return (
  <>  
    <div className="header">
      <h3>
      About
      </h3>
    </div>
    <div className="bullet-point-container">
      {renderBulletPoints()}
    </div>
  </>
  )
}

export default About;