import React from "react";

/**
 *  DESCRIPTION:
 *  PROPS: point
 *  FLOW: App => Routes => About => BulletPoint
 *  PARENT: About
 *  CHILDREN: None
 */

function BulletPoint({point}) {
  return (
    <div className={`${point} `}>
      This is {point}.
    </div>
  )

}

export default BulletPoint;