import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const SecureRoute = ({ authData, redirectTo = "/login" }) => {
  if (!authData?.id) {
    return <Navigate to={redirectTo} />;
  }
  return <Outlet />;
};

export default SecureRoute;
