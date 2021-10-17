import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import { storeToken, getToken, deleteToken } from "../service/asyncStorage";
import URL from "../utils/endpoint";

import Loader from "../components/loader";

export const initialAuthState = {
  isLoggedIn: false,
  token: "",
  login: () => {},
  logout: () => {},
  setLoading: () => {},
  loading: false,
  email: "",
  orgs: [],
  selectedOrg: {},
  setSelectedOrg: () => {},
};

export const AuthContext = React.createContext(initialAuthState);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [orgs, setOrgs] = useState([]);
  const [selectedOrg, setSelectedOrg] = useState({});

  useEffect(() => {
    axios.defaults.headers.common["AC_ORGID"] = selectedOrg?._id;
  }, [selectedOrg]);

  useEffect(() => {
    if(orgs.length > 0) {
      setSelectedOrg(orgs[0]);
    }
  }, [orgs]);

  const login = async (verifiedEmail, otp) => {
    setLoading(true);
    try {
      const res = await axios.post(`${URL}/api/auth/login`, {
        email: verifiedEmail,
        otp,
      });

      if (res.status == 200) {
        const t = res.headers["ac_token"];
        await storeToken(t);
        axios.defaults.headers.common["AC_TOKEN"] = t;
        axios.defaults.headers.common["AC_ORGID"] = res.data.org[0]._id;
        setEmail(email);
        setIsLoggedIn(true);
        setToken(t);
        setOrgs(res.data.org);
      }
    } catch (e) {
      console.log(e);
      setIsLoggedIn(false);
    }
    setLoading(false);
  };

  const logout = async () => {
    setLoading(true);
    await deleteToken();
    axios.defaults.headers.common["AC_TOKEN"] = "";
    axios.defaults.headers.common["AC_ORGID"] = "";    
    setIsLoggedIn(false);
    setLoading(false);
  };

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
        axios.defaults.headers.common["AC_TOKEN"] = t;
        axios.defaults.headers.common["AC_ORGID"] = res.data.org[0]._id;
        setEmail(res.data.email);
        setIsLoggedIn(true);
        setOrgs(res.data.org);
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
      value={{
        isLoggedIn,
        token,
        loading,
        setLoading,
        login,
        logout,
        email,
        orgs,
        selectedOrg,
        setSelectedOrg,
      }}
    >
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const {
    isLoggedIn,
    token,
    loading,
    setLoading,
    login,
    logout,
    email,
    orgs,
    selectedOrg,
    setSelectedOrg,
  } = useContext(AuthContext);
  return {
    isLoggedIn,
    token,
    loading,
    setLoading,
    login,
    logout,
    email,
    orgs,
    selectedOrg,
    setSelectedOrg,
  };
};
