import React from "react";
import { render } from "@testing-library/react";
import HtmlParser from "../components/htmlParser/HtmlParser";

describe("HtmlParser", () => {
  it("Should render an HTMLElement create with the string passed as props", () => {
    const { getByRole } = render(
      <HtmlParser
        id="1"
        content="<a href='https://google.fr'>https://google.fr</a>"
      />
    );
    expect(getByRole("link")).toHaveAttribute("href", "https://google.fr");
  });
});
