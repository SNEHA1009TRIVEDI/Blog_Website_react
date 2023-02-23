import { render } from "@testing-library/react";
import React from "react";

import Header from "./Components/Header/Header";
describe("Header", () => {
  it("should renders without crashing ", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
