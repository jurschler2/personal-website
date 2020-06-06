import React from "react";
import Contact from "../components/Contact";
import {renderWithRouter} from "../helpers/testHelper"

it("renders without crashing", () => {
  renderWithRouter(<Contact />);
});

it("matches snapshot", () => {
  const { asFragment } = renderWithRouter(<Contact />);
  expect(asFragment()).toMatchSnapshot();
});