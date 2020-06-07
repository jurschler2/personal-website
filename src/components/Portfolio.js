import React from "react";
import ProjectCard from "./ProjectCard"
import { projects } from "../content/data"

/**
 *  DESCRIPTION:
 *  PROPS:
 *  FLOW: App => Routes => Portfolio
 *  PARENT: Routes
 *  CHILDREN: ProjectCard
 */

function Portfolio() {

  const renderProjects = () => {

    return projects.map(p => (
                              <ProjectCard title={p.title} 
                                           description={p.description} 
                                           img={p.img} />
                             )
                       )
  }

  return (
   <> 
    <div className="header">
      <h3>
      Portfolio
      </h3>
    </div>
    <div className="projectcard-container">
      {renderProjects()}
    </div> 
   </>
  )
}

export default Portfolio;