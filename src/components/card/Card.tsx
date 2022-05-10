import React from "react";
import { CardProps } from "../../utils/types/types";
import "./Card.css";

function Card({ label, content }: CardProps): JSX.Element {
  return label === "Url :" ? (
    <div data-testid="card" className="card url">
      <p className="label">{label}</p>
      <a data-testid="link" href={content}>
        {content}
      </a>
    </div>
  ) : (
    <div data-testid="card" className="card">
      <p className="label">{label}</p>
      <p>{content}</p>
    </div>
  );
}

export default Card;
