import { Routes, Route } from "react-router-dom";
import Login from "./Views/Login/Login";
import Home from "./Views/Home/Home";
import "./theme/App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
