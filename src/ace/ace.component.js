import "./ace.component.css";
import { EditorComponent } from "./editor/editor.component";
import { Grid } from "@material-ui/core";
import { IframeComponent } from "./iframe/iframe.component";
import { TaskBarComponent } from "./taskbar/taskbar.component";

export const Ace = ({
  iframeInput,
  onChange,
  onDownload,
  onRun,
  switchTheme,
  theme,
}) => {
  const bgColor = theme === "twilight" ? "#232323" : "#e8e8e8";
  return (
    <>
      <div style={{ overflow: "hidden", backgroundColor: bgColor }}>
        <TaskBarComponent
          onRun={onRun}
          onDownload={onDownload}
          OnThemeChange={switchTheme}
        />
        <Grid container className="ace-editor-output" spacing={2}>
          <Grid item md={6}>
            <EditorComponent onChange={onChange} theme={theme} />
          </Grid>
          <Grid item md={6}>
            <IframeComponent content={iframeInput} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Ace;
