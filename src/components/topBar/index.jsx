import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Appearance
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

const TopBar = ({ navigation }) => {

  const colorScheme = Appearance.getColorScheme();
  const themeStyle = colorScheme === 'light' ? styles.lightThemeColor : styles.darkThemeColor;
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeTextColor : styles.darkThemeTextColor;
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainerColor : styles.darkContainerColor;

  return (
    <View style={styles.topContainer}>
      <View style={[styles.topBar,themeContainerStyle]}>
        <View style={styles.title}>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
              <Ionicons
                name="person-outline"
                size={hp("3.5%")}
                // color="#a0e7e1"
                style={[{ margin: "auto" },themeTextStyle]}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>Profile</Text>
        </View>

        {/* <View style={styles.title}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="stats-chart-outline"
              size={hp("3.5%")}
              color="#a0e7e1"
              style={{ margin: "auto" }}
            />
          </View>
          <Text style={styles.text}>Ranking</Text>
        </View> */}

        <View style={styles.title}>
          <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Org")}>
            <Ionicons
              name="briefcase-outline"
              size={hp("3.5%")}
              color="#a0e7e1"
              style={[{ margin: "auto" },themeTextStyle]}
            />
          </TouchableOpacity>
          </View>
          <Text style={styles.text}>Orgs</Text>
        </View>

        <View style={styles.title}>
          <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("More")}>
            <Ionicons
              name="information-outline"
              size={hp("3.5%")}
              color="#a0e7e1"
              style={[{ margin: "auto" },themeTextStyle]}
            />
          </TouchableOpacity>
          </View>
          <Text style={styles.text}>More</Text>
        </View>
      </View>
    </View>
  );
};
export default TopBar;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#fff",
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "stretch",
    // backgroundColor: "#a0e7e1",
    borderBottomRightRadius: 70,
    paddingBottom: 20,
    paddingTop: 20,
  },

  title: {
    // bottom: hp("2%"),
    width: wp("24%"),
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: hp("6%"),
    height: hp("6%"),
    backgroundColor: "#fff",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  text: {
    padding: hp("0.01%"),
    color: "black",
    fontWeight: "bold",
  },

  topColourView: {
    flex: 0.5,
    backgroundColor: "#78ddd4",
  },
  container: {
    marginBottom: hp("1.75%"),
    flex: 0.2,
  },
  lightThemeTextColor: {
    color: "#26de81"
  },
  darkThemeTextColor: {
    color: "#000000"
  },
  lightThemeColor: {
    backgroundColor: "#ffffff",
  },
  darkThemeColor: {
    backgroundColor: "#ffffff"
  },
  lightContainerColor: {
    backgroundColor: "#26de81"
  },
  darkContainerColor: {
    backgroundColor: "#4b4b4b"
  }
});
