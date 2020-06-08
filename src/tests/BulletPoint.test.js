import React from "react";
import BulletPoint from "../components/BulletPoint";
import {renderWithRouter} from "../helpers/testHelper"

it("renders without crashing", () => {
  renderWithRouter(<BulletPoint point="point" />);
});

it("matches snapshot", () => {
  const { asFragment } = renderWithRouter(<BulletPoint point="point" />);
  expect(asFragment()).toMatchSnapshot();
});