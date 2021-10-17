import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
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

export default function RankList({ navigation }) {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [currOrg, setCurrOrg] = React.useState("");
  const { selectedOrg } = useAuth();
  const isFocused = useIsFocused();


  const modelData = (res) => {
    const d = res.map((x, i) => {
      return {
        rank: i + 1,
        name: x.member.name,
        id: `rank-${i + 1}`,
        score: x.score,
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
    if(!isFocused) {
      setCurrOrg(selectedOrg._id);
    }
  }, [isFocused])

  useEffect(() => {
    if (isFocused && currOrg != selectedOrg._id) {
      getData();
    }
  }, [isFocused]);

  const RenderLine = ({ rank }) => {
    if (rank != data.length) {
      return (
        <View
          style={{
            width: wp("1.5"),
            height: hp("2.5"),
            backgroundColor: "black",
            alignSelf: 'center'
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
        {/* <View style={{ marginLeft: wp("5%") }}> */}
        <View style={styles.tile}>
          <View>
            <View style={styles.leading}>
              <Text style={{ fontSize: hp("3"), color: "white" }}>
                {item.rank}
              </Text>
            </View>
            <View style={{display: 'flex'}}>
              <RenderLine rank={item.rank} />
            </View>
          </View>
          <View>
            <Text style={styles.tiletext}>{item.name}</Text>
            <Text style={styles.tiletextsmall}>{`score: ${item.score}`}</Text>
          </View>
        </View>

        {/* </View> */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={data}
          renderItem={Item}
          keyExtractor={(item) => item.id}
        />
      )}

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
    // height: hp("7%"),
    borderRadius: 10,
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    // backgroundColor: "red",
  },
  leading: {
    width: hp("7"),
    height: hp("7"),
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
    flexWrap: "wrap",
  },
});
