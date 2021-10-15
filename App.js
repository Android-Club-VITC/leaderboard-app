import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./src/screens/signin";

import { AuthProvider, useAuth, AuthContext } from "./src/provider/authManager";
import RootStackNav from "./src/router/rootNav";

function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <NavigationContainer>
      {!isLoggedIn ? <SignIn /> : <RootStackNav />}
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
