import React from "react";
import ProjectCard from "./ProjectCard"
import { projects } from "../content/data"
import { Container, Row, Col } from "reactstrap";

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
                                           link={p.link}
                                           tech={p.tech} />
                             )
                       )
  }

  return (
   <Container className="sectionContainer" id="/portfolio"> 
   <Row>
     <Col md={12} lg={12}>
       <div className="portfolio-header">
          <h3 data-aos="fade-down" className="text-center">
            Portfolio
          </h3>
          <div data-aos="fade-right" className="portfolioRule mx-auto mt-3 mb-5"></div>
       </div>
     </Col>
   
    <Col md={12} lg={12}>

    <div className="projectCardContainer">
      {renderProjects()}
    </div> 
    </Col>
   </Row>
   </Container>
  )
}

export default Portfolio;