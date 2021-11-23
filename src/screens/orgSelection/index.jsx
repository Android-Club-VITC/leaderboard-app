import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Appearance,
} from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";

import { useAuth } from "../../provider/authManager";

export default function OrganizationSelection() {
  const { orgs, selectedOrg, setSelectedOrg } = useAuth();
  const navigation = useNavigation();

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

  const handleClick = (org) => {
    if (org._id != selectedOrg._id) {
      setSelectedOrg(org);
    }
  };

  return (
    <SafeAreaView>
      <View style={[styles.container, themeStyle]}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "5%",
          }}
        >
          <View
            style={[
              themeContainerStyle,
              {
                padding: "3%",
                borderBottomRightRadius: 32,
              },
            ]}
          >
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back-outline"
                size={heightPercentageToDP("4%")}
                style={themeTextStyle}
              />
            </TouchableOpacity>
          </View>

          <Text style={[styles.headerText, themeTextStyle]}>
            Your Organizations
          </Text>
        </View>

        <View style={styles.picker}>
          {orgs.map((o, i) => (
            <TouchableOpacity key={i} onPress={() => handleClick(o)}>
              <View
                style={{
                  ...styles.pickerItem,
                  borderColor: selectedOrg._id == o._id ? "red" : "#000",
                }}
              >
                <View style={styles.iconBox}>
                  <Text></Text>
                </View>
                <Text style={styles.orgName}>{o.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: "3%",
    backgroundColor: "#fff",
    height: "100%",
  },
  headerText: {
    // fontWeight: "200",
    // fontSize: heightPercentageToDP("5"),
    alignSelf: "center",
    fontSize: heightPercentageToDP("5%"),
    fontWeight: "bold",
  },
  picker: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  pickerItem: {
    backgroundColor: "#fff",
    height: heightPercentageToDP("20"),
    width: heightPercentageToDP("20"),
    marginVertical: heightPercentageToDP("1"),
    marginHorizontal: heightPercentageToDP("2"),
    borderRadius: 15,
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    elevation: 15,
  },
  orgName: {
    //   backgroundColor: '#fff',
    fontSize: heightPercentageToDP("2.5"),
    padding: "2.5%",
  },
  iconBox: {
    height: "50%",
    width: "50%",
    borderRadius: 20,
    marginTop: heightPercentageToDP("2.5"),
    borderColor: "#000",
    borderWidth: 1,
  },
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
  lightThemeColor2: {
    backgroundColor: "#ffffff",
  },
  darkThemeColor2: {
    backgroundColor: "#ffffff",
  },
  lightContainerColor: {
    backgroundColor: "#7fffbd",
  },
  darkContainerColor: {
    backgroundColor: "#3B3B98",
  },
});
