import React from "react";
import ProjectCard from "../components/ProjectCard";
import {renderWithRouter} from "../helpers/testHelper"

it("renders without crashing", () => {
  renderWithRouter(<ProjectCard description="description" title="title" img="img" />);
});

it("matches snapshot", () => {
  const { asFragment } = renderWithRouter(<ProjectCard description="description" title="title" img="img" />);
  expect(asFragment()).toMatchSnapshot();
});