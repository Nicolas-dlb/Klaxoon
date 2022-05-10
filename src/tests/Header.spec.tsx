import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/header/Header";

describe("Header", () => {
  it("Should renders title", () => {
    const header = render(<Header />);
    expect(header).toMatchSnapshot();
  });
});
