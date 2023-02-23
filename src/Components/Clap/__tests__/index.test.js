import { render } from "@testing-library/react";
import React from "react";
import  Clap from "../Clap.jsx";

describe("Clap", () => {
  it("should renders without crashing ", () => {
    const { asFragment } = render(<Clap />);
    expect(asFragment()).toMatchSnapshot();
  });
});
