import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Appearance,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Loader from "../loader";

export default function Timeline({ data }) {

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

  const modelData = (res) => {
    const d = res.map((x, i) => {
      return {
        rank: i + 1,
        id: `rank-${i + 1}`,
        points: x.points,
        remark: x.remarks,
        date: x.date,
      };
    });
    return d;
  };
  
  const Item = ({ item }) => {
    const even = item.rank % 2 == 0;
    return (
      <View
        style={[
          styles.tile,
          { transform: [{ rotateX: even ? "-30deg" : "30deg" }] },
        ]}
      >
        <Text style={styles.tiletext}>{`${item.remark}`}</Text>

        <View style={{ alignSelf: "flex-start" }}>
          <Text style={styles.tiletextsmall}>{item.date}</Text>
        </View>

        <View
          style={[
            styles.points,
            { transform: [{ rotateX: !even ? "-10deg" : "10deg" }] },
          ]}
        >
          <Text style={styles.pointsText}>{item.points}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container]}>
      {data?.timeline && data.timeline.length > 0 && <Text style={styles.title}>Contributions</Text>}
      {!data?.timeline ? (
        <Loader />
      ) : (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={modelData(data.timeline)}
          renderItem={Item}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingLeft: wp("2%") }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7fffbd",
    alignItems: "center",
    justifyContent: "center",
    margin: hp("3%"),
    borderRadius: 8,
    elevation: 20,
  },
  tile: {
    width: wp("60%"),
    padding: wp("5%"),
    borderRadius: wp("3%"),
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginLeft: 20,
    marginRight: 20,
    borderColor: "blue",
    borderWidth: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    paddingVertical: 30,
  },
  points: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: wp("100%"),
    elevation: 20,
    borderColor: "#7fffbd",
    borderWidth: 1,
  },
  pointsText: {
    color: "#7fffbd",
    fontSize: 15,
  },
  tiletext: {
    fontSize: 30,
    color: "#342317",
    flexWrap: "wrap",
    fontWeight: "bold",
    margin: 0,
  },
  tiletextsmall: {
    fontSize: 12,
    color: "grey",
    flexWrap: "wrap",
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
  lightContainerColor: {
    backgroundColor: "#26de81",
  },
  darkContainerColor: {
    backgroundColor: "#3B3B98",
  },
});
