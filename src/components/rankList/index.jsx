import { StatusBar } from "expo-status-bar";
import React, {useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
// import { FlatList } from 'react-native-gesture-handler';
// import Ranklist component in app.js to render
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// service
import { getAllContribution } from "./service";

var DATA = [
  { name: "Jonny Singh", id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba", rank: 1 },
  { name: "Robin Quinn", id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bb", rank: 2 },
  { name: "Bruce Banner", id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bc", rank: 3 },
  { name: "Jonny Singh", id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bd", rank: 4 },
  { name: "Robin Quinn", id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28be", rank: 5 },
  { name: "Bruce Banner", id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28fc", rank: 6 },
  { name: "Jonny Singh", id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bg", rank: 7 },
  { name: "Robin Quinn", id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bbh", rank: 8 },
  {
    name: "Bruce Banner",
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bci",
    rank: 9,
  },
  {
    name: "Jonny Singh",
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28baj",
    rank: 10,
  },
  {
    name: "Robin Quinn",
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bbk",
    rank: 11,
  },
  {
    name: "Bruce Banner",
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bcl",
    rank: 12,
  },
  {
    name: "Jonny Singh",
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bam",
    rank: 13,
  },
  {
    name: "Robin Quinn",
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bbn",
    rank: 14,
  },
  {
    name: "Bruce Banner",
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bco",
    rank: 15,
  },
  {
    name: "Harley Wayne",
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28bdp",
    rank: 16,
  },
];

export default function RankList({navigation}) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [data,setData] = React.useState([]);

  const modelData = (res) => {
    console.log(res)
    const data = res.map((x,i)=>{
      return {
        rank: (i+1),
        name: x.member.name,
        id: `rank-${i+1}`
      }
    })
    return data;
  }

  const getData = async () => {
    setRefreshing(true);
    const res = await getAllContribution();
    const d = modelData(res)
    setData(d)
    setRefreshing(false);
  }

  const onRefresh = React.useCallback(() => {
    getData();
  }, []);
  
  useEffect(() => {
    getData();
  },[])

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
      <TouchableOpacity onLongPress={()=> navigation.navigate('Profile')}>
      <View style={{ marginLeft: wp("5%") }}>
        <View style={styles.tile}>
          <View style={styles.leading}>
            <Text style={{ fontSize: hp("3"), color: "white" }}>
              {item.rank}
            </Text>
          </View>
          
            <Text style={styles.tiletext}>{item.name}</Text>
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
});
