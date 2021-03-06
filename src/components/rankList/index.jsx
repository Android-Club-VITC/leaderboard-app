import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Appearance,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Loader from "../loader";
//navigation
import { useIsFocused } from "@react-navigation/native";

// service
import { getAllContribution } from "./service";

// auth
import { useAuth } from "../../provider/authManager";

export default function RankList({ navigation, setProfile }) {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [currOrg, setCurrOrg] = React.useState("");
  const { selectedOrg } = useAuth();
  const isFocused = useIsFocused();

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
        member: x.member,
        timeline: x.timeline,
        id: `rank-${i + 1}`,
        score: x.score,
        email: x.email,
      };
    });
    return d;
  };

  const getData = async () => {
    setLoading(true);
    const res = await getAllContribution();
    const d = modelData(res);
    setData(d);
    setLoading(false);
  };

  useEffect(() => {
    if (!isFocused) {
      setCurrOrg(selectedOrg._id);
    }
  }, [isFocused]);

  useEffect(() => {
    // if (isFocused && currOrg != selectedOrg._id) {
    //   getData();
      
    // }
    getData();
  }, [isFocused]);

  const RenderLine = ({ backgroundColor = "black" }) => {
    return (
      <View
        style={{
          width: wp("1.5"),
          height: hp("1.5"),
          backgroundColor: backgroundColor,
          alignSelf: "center",
          elevation: 10,
        }}
      ></View>
    );
  };

  const Item = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          onPress={() =>
            setProfile({ member: item.member, timeline: item.timeline })
          }
        >
          <View style={styles.tile}>
            <View>
              <View style={{ display: "flex" }}>
                {item.rank === 1 ? (
                  <RenderLine backgroundColor="transparent" />
                ) : (
                  <RenderLine />
                )}
              </View>
              <View style={[styles.leading, themeContainerStyle]}>
                <Text style={[{ fontSize: hp("3") }, themeTextStyle]}>
                  {item.rank}
                </Text>
              </View>
              <View style={{ display: "flex" }}>
                {item.rank != data.length ? (
                  <RenderLine />
                ) : (
                  <RenderLine backgroundColor="transparent" />
                )}
              </View>
            </View>
            <View>
              <Text style={[styles.tiletext, themeTextStyle]}>
                {item.member.name}
              </Text>
              <Text
                style={[styles.tiletextsmall, themeTextStyle]}
              >{`score: ${item.score}`}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <View style={[styles.container, themeStyle]}>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={Item}
          keyExtractor={(item) => item.id}
          initialNumToRender={10}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: hp("2%"),
  },
  tile: {
    width: wp("85"),
    // height: hp("7%"),
    borderRadius: 10,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  leading: {
    width: hp("7"),
    height: hp("7"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    // backgroundColor: "#99ddd9",
  },
  tiletext: {
    marginLeft: 40,
    fontSize: hp('2.5'),
    color: "#342317",
    flexWrap: "wrap",
    fontWeight: "bold",
  },
  tiletextsmall: {
    marginLeft: 40,
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
    backgroundColor: "#64e8a6",
  },
  darkContainerColor: {
    backgroundColor: "#3B3B98",
  },
});
