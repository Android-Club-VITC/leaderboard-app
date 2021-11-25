import React from "react";
import { StyleSheet, Text, View, FlatList, Appearance } from "react-native";

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
          themeContainerStyle,
        ]}
      >
        <Text
          style={[styles.tiletext, themeTextStyle]}
        >{`${item.remark}`}</Text>

        <View style={{ alignSelf: "flex-start" }}>
          <Text style={styles.tiletextsmall}>{item.date}</Text>
        </View>

        <View
          style={[
            styles.points,
            themeStyle,
          ]}
        >
          <Text style={[styles.pointsText, themeTextStyle]}>{item.points}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[styles.container, themeStyle]}>
      {data?.timeline && data.timeline.length > 0 && (
        <Text style={[styles.title, themeTextStyle]}>Contributions</Text>
      )}
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
    paddingBottom: "10%",
    paddingHorizontal: wp("5%"),
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
  },
  title: {
    textAlign: "left",
    fontSize: hp("3%"),
    paddingLeft: wp("4%"),
    marginVertical: hp("2%"),
  },
  points: {
    padding: 15,
    borderRadius: 10,
    elevation: 20,
    borderWidth: 1,
  },
  pointsText: {
    fontSize: 15,
  },
  tiletext: {
    fontSize: hp("2%"),
    flexWrap: "wrap",
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
    backgroundColor: "#7fffbd",
  },
  darkContainerColor: {
    backgroundColor: "#3B3B98",
  },
});
