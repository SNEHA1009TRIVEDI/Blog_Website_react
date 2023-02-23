import { fireEvent, render } from "@testing-library/react";
import React from "react";

import App from "../App.js";

describe("App", () => {
    it("should renders without crashing ", () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot();
    });
    
});
