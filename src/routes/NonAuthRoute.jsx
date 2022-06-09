import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const NonAuthRoute = ({ authData, redirectTo = "/" }) => {
  if (authData?.id) {
    return <Navigate to={redirectTo} />;
  }
  return <Outlet />;
};

export default NonAuthRoute;
