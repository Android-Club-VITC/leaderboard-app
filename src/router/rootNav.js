import React from "react";
import { StyleSheet, Appearance } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/*------------------screens---------------*/
import Rankings from "../screens/rankings";
import Profile from "../screens/profile";
import More from "../screens/more";
import OrganizationSelection from "../screens/orgSelection";

const Stack = createNativeStackNavigator();

export default function RootStackNav() {
  const colorScheme = Appearance.getColorScheme();
  const themeStyle =
    colorScheme === "light" ? styles.lightThemeColor : styles.darkThemeColor;
  const themeTextStyle =
    colorScheme === "light"
      ? styles.lightThemeTextColor
      : styles.darkThemeTextColor;
  const themeContainerStyle =
    colorScheme === "light"
      ? styles.lightContainerColor
      : styles.darkContainerColor;
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: themeStyle,
        headerTitleStyle: themeTextStyle,
      }}
    >
      <Stack.Screen name="Rankings" component={Rankings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Org" component={OrganizationSelection} />
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  lightThemeTextColor: {
    color: "#000000",
  },
  darkThemeTextColor: {
    color: "#ffffff",
  },
  lightThemeColor: {
    backgroundColor: "#ffffff",
  },
  darkThemeColor: {
    backgroundColor: "#182C61",
  },
  lightContainerColor: {
    backgroundColor: "#26de81",
  },
  darkContainerColor: {
    backgroundColor: "#3B3B98",
  },
})