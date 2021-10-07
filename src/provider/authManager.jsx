import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import { storeToken, getToken } from "../service/asyncStorage";
import URL from "../utils/endpoint";

export const initialAuthState = {
  isLoggedIn: false,
  token: "",
  login: () => {},
  logout: () => {},
  loading: false,
};

export const AuthContext = React.createContext(initialAuthState);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token,setToken] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = (email, otp) => {
    try {
      const res = await axios.post(`${URL}/auth/loginIn`, {
        email,
        otp,
      });

      const t = res.data.headers["AC_TOKEN"];
      if(t) {
        await storeToken(t);
        setToken(t);
        setIsLoggedIn(true);
      }
    } catch (e) {
      setIsLoggedIn(false);
    }
  };

  const logout = () => {};

  const verify = () => {
    try {
      const t = await getToken();
      if (t) {
        const res = await axios.get(`${URL}/auth/verify`, {
          headers: {
            "AC_TOKEN": t
          }
        });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (e) {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
