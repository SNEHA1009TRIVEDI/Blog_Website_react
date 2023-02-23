import { render } from "@testing-library/react";
import React from "react";

import Header from "../Header.jsx";
describe("Header", () => {
  it("should renders without crashing ", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
