import { Box, Button, Grid } from "@material-ui/core";

export const TaskBarComponent = ({ onDownload, OnThemeChange }) => {
  return (
    <Box p={4} className="taskbar">
      <Grid container justify="center" alignItems="stretch" spacing={2}>
        <Grid item md={"auto"} xs="auto">
          <Button disabled={false} onClick={onDownload} color={"primary"}>
            Download
          </Button>
        </Grid>

        <Grid item md={"auto"} xs="auto">
          <Button disabled={false} onClick={OnThemeChange} color={"secondary"}>
            Switch Mode
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
