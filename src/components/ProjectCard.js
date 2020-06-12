import React, {useState} from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import "./ProjectCard.css";

/**
 *  DESCRIPTION:
 *  PROPS: title, description, img
 *  FLOW: App => Routes => Portfolio => ProjectCard
 *  PARENT: Portfolio
 *  CHILDREN: ProjectCard
 */

function ProjectCard({ title, description, gallery, link }) {

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
        <img src={item.img} alt={item.altText}/>
        <div className="carousel-caption"><strong>{item.caption}</strong></div>
      </CarouselItem>
    );
  });

  

  return (
  <div className="project-container">
    <div className="project-img-container">
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
    <div className="project-description-container">
      <div className="project-title"><strong>{title}</strong></div>
      <div className="project-description">
        <p>{description} Check it out on <a href={`${link}`}>Github</a>.</p>
      </div>
    </div>
  </div>
  )
}

export default ProjectCard;