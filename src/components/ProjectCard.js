import React, {useState} from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import { Card, Row, Col } from 'react-bootstrap';

/**
 *  DESCRIPTION:
 *  PROPS: title, description, img
 *  FLOW: App => Routes => Portfolio => ProjectCard
 *  PARENT: Portfolio
 *  CHILDREN: ProjectCard
 */

function ProjectCard({ title, description, gallery, demo, link, tech }) {

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === gallery.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? gallery.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = gallery.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.img}
      >
        <img className="projectImage" src={item.img} alt={item.altText}/>
      </CarouselItem>
    );
  });

  const createTechTags = (tech, title) => {
    let tags = [];
    for (let t of tech) {
      if (tags.length === tech.length - 1) {
        tags.push(<span key={`${title}-${t}`} className="projectTechStack">{t}</span>);
      } else {
        tags.push(
          <span key={`${title}-${t}`} className="projectTechStack">{t} <span className="projectTechStackSep">| </span></span>
        );
      }
    }
    return tags;
  }

  const techStack = createTechTags(tech, title);

  return (
  <Card className="project-container col-12" data-aos="fade-right">
    <Row>
      <Col md={12} lg={12}>
        <div className="projectImageContainer">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            >
            <CarouselIndicators items={gallery} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>    
        </div>
      </Col>
      <Col md={12} lg={12} className="projectDetails">
        <div>
            <h3 className="project-title"><strong>{title}</strong></h3>
            <p className="projectTechStack">{techStack}</p>
            <div className="project-description">
  <p>{description} Check it out on <a href={`${link}`}>Github</a>. Check out the <a href={`${demo}`}>demo</a>.</p>
          </div>
        </div>
      </Col>
    </Row>
  </Card>
  )
}

export default ProjectCard;