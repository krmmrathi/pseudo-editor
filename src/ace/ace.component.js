import "./ace.component.css";
import { EditorComponent } from "./editor/editor.component";
import { Grid } from "@material-ui/core";
import { OutputComponent } from "./output/output.component";
import { TaskBarComponent } from "./taskbar/taskbar.component";

export const Ace = ({
  editorInput,
  onChange,
  onDownload,
  switchTheme,
  theme,
}) => {
  const bgColor = theme === "twilight" ? "#232323" : "#e8e8e8";
  return (
    <>
      <div style={{ overflow: "hidden", backgroundColor: bgColor }}>
        {/* <div className="main-container"> */}
        <TaskBarComponent onDownload={onDownload} OnThemeChange={switchTheme} />
        <Grid container className="ace-editor-output" spacing={2}>
          <Grid item md={6}>
            <EditorComponent onChange={onChange} theme={theme} />
          </Grid>
          <Grid item md={6}>
            <OutputComponent content={editorInput} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Ace;
