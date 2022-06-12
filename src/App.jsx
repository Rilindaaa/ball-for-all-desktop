import "./theme/App.scss";
import { AuthContextProvider } from "./contexts/AuthContext";
import Router from "./routes";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <MainLayout>
          <Router />
        </MainLayout>
      </div>
    </AuthContextProvider>
  );
}

export default App;
