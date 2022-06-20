import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#228176",
    },
  },
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
  },
});
export default theme;
