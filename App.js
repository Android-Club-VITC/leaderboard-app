import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignIn from "./src/screens/signin";
import Profile from "./src/screens/profile";

import { AuthProvider, useAuth, AuthContext } from "./src/provider/authManager";

function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <>
    {!isLoggedIn ? <SignIn /> : <Text>Logged In</Text>}
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <View style={styles.container}>
       <Home /> 
      </View>
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
