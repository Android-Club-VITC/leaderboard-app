import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// service
import { getAllContribution } from "./service";

export default function RankList({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = React.useState([]);

  const modelData = (res) => {
    const d = res.map((x, i) => {
      return {
        rank: i + 1,
        name: x.member.name,
        id: `rank-${i + 1}`,
        score: x.score
      };
    });
    return d;
  };

  const getData = async () => {
    setRefreshing(true);
    const res = await getAllContribution();
    const d = modelData(res);
    setData(d);
    setRefreshing(false);
  };

  const onRefresh = React.useCallback(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const RenderLine = ({ rank }) => {
    if (rank != data.length) {
      return (
        <View
          style={{
            width: 5,
            height: 20,
            backgroundColor: "black",
            marginLeft: 27.5,
          }}
        ></View>
      );
    } else {
      return <Text></Text>;
    }
  };

  const Item = ({ item }) => {
    return (
      <TouchableOpacity onLongPress={() => navigation.navigate("Profile")}>
        <View style={{ marginLeft: wp("5%") }}>
          <View style={styles.tile}>
            <View style={styles.leading}>
              <Text style={{ fontSize: hp("3"), color: "white" }}>
                {item.rank}
              </Text>
            </View>
            <View>
            <Text style={styles.tiletext}>{item.name}</Text>
            <Text style={styles.tiletextsmall}>{`score: ${item.score}`}</Text>
            </View>
          </View>
          <RenderLine rank={item.rank} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={Item}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            onRefresh={onRefresh}
            colors={["#ff0000", "#00ff00", "#0000ff"]}
            refreshing={refreshing}
          />
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: hp("2%"),
  },
  tile: {
    width: wp("85"),
    height: hp("7%"),
    borderRadius: 10,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  leading: {
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#99ddd9",
  },
  tiletext: {
    marginLeft: 40,
    fontSize: 18.7,
    color: "#342317",
    flexWrap: "wrap",
    fontWeight: "bold",
  },
  tiletextsmall: {
    marginLeft: 40,
    fontSize: 12,
    color: "grey",
    flexWrap: "wrap"
  },
});
