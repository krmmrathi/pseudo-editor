import { Ace } from "./ace.component";
import { useState } from "react";
import { Grid } from "@material-ui/core";

var fileDownload = require("js-file-download");

export const AceContainer = () => {
  const [editorInput, setEditorInput] = useState("<h1>HELLO</h1>");
  const [theme, setTheme] = useState("github");

  const onDownload = () => fileDownload(editorInput, "download.txt");

  const onChange = (newValue) => {
    setEditorInput(newValue);
  };

  const switchTheme = () => {
    console.log(theme);
    setTheme(theme === "github" ? "twilight" : "github");
  };

  return (
    <Ace
      editorInput={editorInput}
      onChange={onChange}
      theme={theme}
      onDownload={onDownload}
      switchTheme={switchTheme}
    />
  );
};
