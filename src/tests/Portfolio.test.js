import React from "react";
import Portfolio from "../components/Portfolio";
import {renderWithRouter} from "../helpers/testHelper"

it("renders without crashing", () => {
  renderWithRouter(<Portfolio />);
});

it("matches snapshot", () => {
  const { asFragment } = renderWithRouter(<Portfolio />);
  expect(asFragment()).toMatchSnapshot();
});