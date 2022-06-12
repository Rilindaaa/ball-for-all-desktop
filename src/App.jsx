import "./theme/App.scss";
import { AuthContextProvider } from "./contexts/AuthContext";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Router from "./routes";
import MainLayout from "./layouts/MainLayout";
import theme from "./theme/MuiTheme";

function App() {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <div className="App">
          <MainLayout>
            <Router />
          </MainLayout>
        </div>
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default App;
