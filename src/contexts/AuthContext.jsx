import React, { createContext, useState, useEffect } from "react";

import { loggedUser } from "../api/ApiMethods";
import Client from "../api/ApiBase";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authData, setAuthData] = useState({});

  const loadAuthData = async () => {
    try {
      const token = window.localStorage.getItem("AuthTok");
      if (token) {
        Client.defaults.headers.common["Authorization"] = "Bearer " + token;
        const authData = await loggedUser();
        setAuthData(authData.data.user);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (data) => {
    if (data?.token) {
      window.localStorage.setItem("AuthTok", data?.token);
      Client.defaults.headers.common["Authorization"] = "Bearer " + data?.token;
    }
    await loadAuthData();
  };

  const handleSignOut = async () => {
    window.localStorage.setItem("AuthTok", "");
    setAuthData({});
  };

  useEffect(() => {
    loadAuthData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ authData, loading, handleSignIn, handleSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
