import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Form from "../components/form/Form";

describe("Form", () => {
  it("should displays form input", () => {
    const { getByTestId } = render(
      <Form onChange={() => null} onClick={() => Promise.resolve()} />
    );
    const form = getByTestId("form");
    expect(form).toBeInTheDocument();
  });

  it("should update url when user type new url", () => {
    const onChangeMockedEvent = jest.fn();
    const form = render(
      <Form onChange={onChangeMockedEvent} onClick={() => Promise.resolve()} />
    );
    const input = form.getByLabelText("input");
    fireEvent.change(input, {
      target: { value: "https://vimeo.com/554812409" },
    });
    expect(onChangeMockedEvent).toHaveBeenCalledWith(
      "https://vimeo.com/554812409"
    );
  });

  it("should add bookmark when user submit new url", () => {
    const onChangeMockedEvent = jest.fn();
    const onClickMockedEvent = jest.fn();
    const { getByLabelText, getByRole } = render(
      <Form onChange={onChangeMockedEvent} onClick={onClickMockedEvent} />
    );
    const input = getByLabelText("input");
    fireEvent.change(input, {
      target: { value: "https://vimeo.com/554812409" },
    });
    expect(onChangeMockedEvent).toHaveBeenCalledWith(
      "https://vimeo.com/554812409"
    );
    const button = getByRole("button");
    fireEvent.click(button);
    expect(onClickMockedEvent).toHaveBeenCalled();
  });
});
