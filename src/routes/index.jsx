import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Login from "../Views/Login/Login";
import Home from "../Views/Home/Home";
import SecureRoute from "./SecureRoute";
import NonAuthRoute from "./NonAuthRoute";
import PageNotFound from "../Views/PageNotFound/PageNotFound";

function Router() {
  const { loading, authData } = useContext(AuthContext);

  return (
    !loading && (
      <Routes>
        <Route path="/auth" element={<NonAuthRoute authData={authData} />}>
          {/* Routes that dont require authentication here */}
          <Route path="/auth/login" element={<Login />} />
        </Route>
        <Route path="/" element={<SecureRoute authData={authData} />}>
          {/* Routes that require authentication here */}
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    )
  );
}

export default Router;
