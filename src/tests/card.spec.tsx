import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../components/card/Card";

describe("Card", () => {
  it("Should render card", () => {
    const { getByTestId } = render(<Card label="label" content="content" />);
    const card = getByTestId("card");
    expect(card).toBeInTheDocument();
  });

  it("Should render content as link if the label is Url", () => {
    const { getByTestId } = render(
      <Card label="Url :" content="https://vimeo.com/554812409" />
    );
    const card = getByTestId("card");
    expect(card).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://vimeo.com/554812409"
    );
  });
});
