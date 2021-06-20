import { Ace } from "./ace.component";
import { useState } from "react";

var fileDownload = require("js-file-download");

export const AceContainer = () => {
  const [editorInput, setEditorInput] = useState("");
  const [iframeInput, setIframeInput] = useState("");
  const [theme, setTheme] = useState("github");

  const onDownload = () => fileDownload(editorInput, "download.txt");

  const onChange = (newValue) => {
    setEditorInput(newValue);
  };

  const onRun = () => {
    console.log(editorInput);
    setIframeInput(editorInput);
  };

  const switchTheme = () => {
    console.log(theme);
    setTheme(theme === "github" ? "twilight" : "github");
  };

  return (
    <Ace
      iframeInput={iframeInput}
      onChange={onChange}
      theme={theme}
      onDownload={onDownload}
      onRun={onRun}
      switchTheme={switchTheme}
    />
  );
};
