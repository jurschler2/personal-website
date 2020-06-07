import React from "react";

/**
 *  DESCRIPTION:
 *  PROPS: title, description, img
 *  FLOW: App => Routes => Portfolio => ProjectCard
 *  PARENT: Portfolio
 *  CHILDREN: ProjectCard
 */

function ProjectCard({ title, description, img }) {

  return (
  <div>
    <span>{title}</span>
    This is the {description} and this is the {img}.
  </div>
  )
}

export default ProjectCard;