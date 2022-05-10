import React, { useEffect } from "react";
import { HtmlParserProps } from "../../utils/types/types";
import "./HtmlParser.css";

function HtmlParser({ id, content }: HtmlParserProps): JSX.Element {
  useEffect(() => {
    (document.getElementById(id) as HTMLElement).innerHTML = content;
  }, []);
  return <div id={id} className="htmlParser" />;
}

export default HtmlParser;
