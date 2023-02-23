import { render } from "@testing-library/react";
import React from "react";
import Card from "../Card.jsx";

describe("Card", () => {
  it("should renders without crashing ", () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
});
