import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
// eslint-disable-next-line
// @ts-ignore
import { theme } from "@rally/starship-components";

// export default createMuiTheme({
//   ...theme,
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 960,
//       lg: 1440, // This is the width of the picard header, all other values are MUI default
//       xl: 1920,
//     },
//   },
// });

export const useColorStyles = makeStyles((theme) => ({
  root: {
    "--primary": theme.palette.primary.main,
    "--secondary": theme.palette.secondary.main,
    "--success": theme.palette.success.main,
    "--warning": theme.palette.warning.main,
    "--error": theme.palette.error.main,
  },
}));
