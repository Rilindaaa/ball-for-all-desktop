import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Login from "../Views/Login/Login";
import Home from "../Views/Home/Home";
import SecureRoute from "./SecureRoute";
import NonAuthRoute from "./NonAuthRoute";
import PageNotFound from "../Views/PageNotFound/PageNotFound";
import Player from "../Views/Player/Player.jsx";
import Club from "../Views/Club/Club.jsx";
import Admin from "../Views/Admin/Admin.jsx";
import Vacancy from "../Views/Vacancy/Vacancy.jsx";
import Reports from "../Views/Reports/Reports.jsx";

function Router() {
  const { loading, authData } = useContext(AuthContext);

  return (
    !loading && (
      <div>
        <Routes>
          <Route path="/auth" element={<NonAuthRoute authData={authData} />}>
            {/* Routes that dont require authentication here */}
            <Route path="/auth/login" exact element={<Login />} />
          </Route>
          <Route path="/" element={<SecureRoute authData={authData} />}>
            {/* Routes that require authentication here */}
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/player" element={<Player />} />
            <Route path="/club" exact element={<Club />} />
            <Route path="/vacancy" exact element={<Vacancy />} />
            <Route path="/reports" exact element={<Reports />} />
            {authData?.Admin?.isSuperAdmin && (
              <Route path="/admin" exact element={<Admin />} />
            )}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    )
  );
}

export default Router;
