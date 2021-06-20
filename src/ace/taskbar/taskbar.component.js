import { Box, Grid, IconButton, Tooltip } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

export const TaskBarComponent = ({ onDownload, OnThemeChange, onRun }) => {
  return (
    <Box px={5} pt={2} pb={2}>
      <Grid container alignItems="stretch" spacing={2}>
        <Grid item md={"auto"} xs="auto">
          <Tooltip title="Download Source Code">
            <IconButton
              color="primary"
              aria-label="Download Source Code"
              component="span"
              onClick={onDownload}
            >
              <GetAppIcon />
            </IconButton>
          </Tooltip>
        </Grid>

        <Grid item md={"auto"} xs="auto">
          <Tooltip title="Switch Theme">
            <IconButton
              color="primary"
              aria-label="Switch Theme"
              component="span"
              onClick={OnThemeChange}
              size="large"
            >
              <SettingsBrightnessIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item md={"auto"} xs="auto">
          <Tooltip title="Run Source Code">
            <IconButton
              color="primary"
              aria-label="Run Source Code"
              component="span"
              onClick={onRun}
              size="large"
            >
              <PlayArrowIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};
