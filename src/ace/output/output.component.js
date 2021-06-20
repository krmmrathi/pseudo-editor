import React from "react";
export const OutputComponent = (props) => {
  let iframe_ref = null;

  const writeHTML = (frame) => {
    if (!frame) {
      return;
    }
    iframe_ref = frame;
    let doc = frame.contentDocument;
    frame.style.width = "100%";
    //frame.style.height = `${frame.contentWindow.document.body.scrollHeight}px`;
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
// export default OutputComponent;
