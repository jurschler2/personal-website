import React from "react";
// import "./BulletPoint.css";

/**
 *  DESCRIPTION:
 *  PROPS: point
 *  FLOW: App => Routes => About => BulletPoint
 *  PARENT: About
 *  CHILDREN: None
 */

function BulletPoint({point}) {
  return (

    <div className="bullet-point-container">
      <div className="bullet-point-content" data-aos="fade-left">
        <div className="bullet-point-icon-container">•</div>
          <p>{point}</p>
      </div>
    </div>
  
  )

}

export default BulletPoint;