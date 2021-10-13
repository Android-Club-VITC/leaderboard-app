import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import { storeToken, getToken } from "../service/asyncStorage";
import URL from "../utils/endpoint";

import Loader from "../components/loader";

export const initialAuthState = {
  isLoggedIn: false,
  token: "",
  login: () => {},
  logout: () => {},
  setLoading: () => {},
  loading: false,
  email: ""
};

export const AuthContext = React.createContext(initialAuthState);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email,setEmail] = useState("");

  const login = async (verifiedEmail, otp) => {
    setLoading(true);
    try {
      const res = await axios.post(`${URL}/api/auth/loginIn`, {
        verifiedEmail,
        otp
      });

      if (res.status == 200) {
        const t = res.headers["ac_token"];
        await storeToken(t);
        axios.defaults.headers.common['AC_TOKEN'] = t;
        setEmail(email);
        setIsLoggedIn(true);
        setToken(t);
      }
    } catch (e) {
      console.log(e);
      setIsLoggedIn(false);
    }
    setLoading(false);
  };

  const logout = () => {};

  const verify = async () => {
    setLoading(true);
    try {
      const t = await getToken();
      if (t) {
        const res = await axios.get(`${URL}/api/auth/verify`, {
          headers: {
            AC_TOKEN: t,
          },
        });
        axios.defaults.headers.common['AC_TOKEN'] = t;
        setEmail(res.data.email);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (e) {
      setIsLoggedIn(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    verify();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, token, loading, setLoading, login, logout, email }}
    >
      {loading ? <Loader /> : children }
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const { isLoggedIn, token, loading, setLoading, login, logout, email } =
    useContext(AuthContext);
  return {
    isLoggedIn,
    token,
    loading,
    setLoading,
    login,
    logout,
    email
  };
};
