import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";
import BackgroundLandingPage from ".";

test.only("BackgroundLandingPage renders correctly", () => {
  //Arrange
  const { getByTestId } = render(
    <Router>
      <BackgroundLandingPage />
    </Router>
  );
  //Act
  const actual = getByTestId("landingpage-container");
  //Assert
  expect(actual).toBeInTheDocument();
});
