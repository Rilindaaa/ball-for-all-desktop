import "./theme/App.scss";
import { AuthContextProvider } from "./contexts/AuthContext";
import Router from "./routes";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Router />
      </div>
    </AuthContextProvider>
  );
}

export default App;
