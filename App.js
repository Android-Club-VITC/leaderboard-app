import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import SignIn from "./src/screens/signin";
import Profile from "./src/screens/profile";
import Rankings from "./src/screens/rankings";

import { AuthProvider, useAuth, AuthContext } from "./src/provider/authManager";
import RootStackNav from "./src/router/rootNav";

function Home() {
  return <></>;
}

export default function App() {
  const { isLoggedIn } = useAuth();

  return (
    <AuthProvider>
      <NavigationContainer>
        {!isLoggedIn ? <SignIn /> : <RootStackNav />}
      </NavigationContainer>
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
