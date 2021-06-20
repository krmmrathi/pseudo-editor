import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";

export const EditorComponent = ({ onChange, theme }) => {
  return (
    <AceEditor
      mode="javascript"
      theme={theme}
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      width={"100%"}
      height={"100%"}
      displayIndentGuides={true}
      wrapEnabled={true}
      highlightActiveLine={true}
      showPrintMargin={true}
      showGutter={true}
    />
  );
};
