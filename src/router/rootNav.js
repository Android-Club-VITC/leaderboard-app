import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/*------------------screens---------------*/
import Rankings from "../screens/rankings";
import Profile from "../screens/profile";
import More from "../screens/more";
import OrganizationSelection from "../screens/orgSelection";

const Stack = createNativeStackNavigator();

export default function RootStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Rankings" component={Rankings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Org" component={OrganizationSelection} />
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  );
}