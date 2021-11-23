import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./src/screens/signin";
import SplashScreen from "./src/components/splashScreen";
import { AuthProvider, useAuth, AuthContext } from "./src/provider/authManager";
import RootStackNav from "./src/router/rootNav";

function Home() {
  const { isLoggedIn } = useAuth();
  const [loadSplash, setLoadSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoadSplash(false);
    }, 5000);
    return () => {
      clearTimeout(t);
    };
  }, []);

  return (
    <NavigationContainer>
      {loadSplash ? (
        <SplashScreen />
      ) : !isLoggedIn ? (
        <SignIn />
      ) : (
        <RootStackNav />
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
