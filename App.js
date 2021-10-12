import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import SignIn from "./src/screens/signin";
import Profile from "./src/screens/profile";
import Rankings from "./src/screens/rankings";

import { AuthProvider, useAuth, AuthContext } from "./src/provider/authManager";
import RootStackNav from "./src/router/rootNav";

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
      <NavigationContainer>
        {/* <View style={styles.container}>
          <Home />
        </View> */}
        <RootStackNav />
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
