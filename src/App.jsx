import { Routes, Route } from "react-router-dom";
import Login from "./Views/Login/Login";
import Home from "./Views/Home/Home";
import "./theme/App.scss";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
