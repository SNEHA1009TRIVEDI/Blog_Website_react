import { render } from "@testing-library/react";
import React from "react";
import Footer from "../Footer.jsx";

describe("Index", () => {
  it("should renders without crashing ", () => {
    const { asFragment } = render(<Index />);
    expect(asFragment()).toMatchSnapshot();
  });
});
