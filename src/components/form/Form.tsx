import React from "react";
import { FormProps } from "../../utils/types/types";
import "./Form.css";

function Form({ onChange, onClick }: FormProps): JSX.Element {
  return (
    <div data-testid="form" className="form">
      <input
        id="input"
        aria-label="input"
        data-testid="input"
        onChange={(event) => onChange(event.target.value)}
        type="text"
        tabIndex={0}
        onKeyPress={(key) => {
          if (key.key === "Enter") {
            onClick();
            (document.getElementById("input") as HTMLInputElement).value = "";
          }
        }}
      />
      <button
        type="button"
        onClick={() => {
          onClick();
          (document.getElementById("input") as HTMLInputElement).value = "";
        }}
      >
        Add
      </button>
    </div>
  );
}

export default Form;
