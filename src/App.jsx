import "./theme/App.scss";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./routes";
import MainLayout from "./layouts/MainLayout";
import theme from "./theme/MuiTheme";
import { SnackbarProvider } from "notistack";
import { ConfirmProvider } from "material-ui-confirm";

function App() {
  return (
    <AuthContextProvider>
      <SnackbarProvider maxSnack={3}>
        <ConfirmProvider>
          <ThemeProvider theme={theme}>
            <div className="App">
              <MainLayout>
                <Router />
              </MainLayout>
            </div>
          </ThemeProvider>
        </ConfirmProvider>
      </SnackbarProvider>
    </AuthContextProvider>
  );
}

export default App;
