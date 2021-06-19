// import { useEffect } from "react";

// export const OutputComponent = ({ editorInput }) => {
//   useEffect(() => {
//     document.getElementById("youriframe").contentWindow.location.reload(true);
//   }, [editorInput]);
//   return <iframe id="youriframe" srcDoc={editorInput}></iframe>;
// };
import React from "react";
import { colors } from "@material-ui/core";
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
