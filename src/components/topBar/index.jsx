import React from "react";
import { Text, View, SafeAreaView, StyleSheet, StatusBar } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPoll, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";

const TopBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topColourView} />

      <SafeAreaView style={styles.topBar}>
        <View style={styles.title}>
          <FontAwesomeIcon
            round
            icon={faUserCircle}
            size={50}
            color={"white"}
          />
          <Text style={styles.text}>Pixel Bit</Text>
        </View>

        <View style={styles.title}>
          <FontAwesomeIcon round icon={faPoll} size={50} color={"white"} />
          <Text style={styles.text}>Ranking</Text>
        </View>

        <View style={styles.title}>
          <FontAwesomeIcon round icon={faAndroid} size={50} color={"white"} />
          <Text style={styles.text}>More</Text>
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};
export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    height: hp("90%"),
    width: wp("100%"),
    flexDirection: "row",
    flex: 0.9,
    justifyContent: "space-around",
    alignItems: "stretch",
    backgroundColor: "#a0e7e1",
    borderBottomRightRadius: 70,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  title: {
    bottom: hp("2%"),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
});
