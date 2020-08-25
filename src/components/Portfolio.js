import React from "react";
import ProjectCard from "./ProjectCard"
import { projects } from "../content/data"
import "./Portfolio.css";
import { Container } from "reactstrap";

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
                                           gallery={p.gallery}
                                           link={p.link} />
                             )
                       )
  }

  return (
   <Container className="sectionContainer" id="/portfolio"> 
    <div className="portfolio-header">
      Here are some things I have built:
    </div>
    <div className="projectcard-container">
      {renderProjects()}
    </div> 
   </Container>
  )
}

export default Portfolio;