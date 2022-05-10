import { render } from "@testing-library/react";
import React from "react";
import App from "../interfaces/App/App";

describe("App", () => {
  it("Should render the app correctly", () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});
