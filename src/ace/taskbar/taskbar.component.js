import { Box, Grid, IconButton, Tooltip } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";

export const TaskBarComponent = ({ onDownload, OnThemeChange }) => {
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
              color="secondary"
              aria-label="Switch Theme"
              component="span"
              onClick={OnThemeChange}
              size="large"
            >
              <SettingsBrightnessIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};
