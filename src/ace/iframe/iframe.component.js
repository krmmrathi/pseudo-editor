/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
export const IframeComponent = (props) => {
  const writeHTML = (frame) => {
    if (!frame) {
      return;
    }
    let doc = frame.contentDocument;
    frame.style.width = "100%";
    frame.style.height = "100%";
    frame.style.backgroundColor = "white";
    doc.open();
    doc.write(props.content);
    doc.close();
  };
  return (
    <iframe
      src="about:blank"
      scrolling="no"
      frameBorder="0"
      ref={writeHTML}
      className="iframe-container"
    />
  );
};
