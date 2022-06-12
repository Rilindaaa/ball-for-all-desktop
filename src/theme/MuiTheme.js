import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#228176",
    },
  },
  typography: {
    fontFamily: `"Poppins", sans-serif`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
export default theme;
