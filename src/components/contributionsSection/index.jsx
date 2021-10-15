import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { VictoryPie, VictoryAnimation, VictoryChart, VictoryLine } from "victory-native";
const ContributionsSection = () => {
  const graphicData = [
    { y: 20, x: "Technical" },
    { y: 5, x: "Operations" },
    { y: 50, x: "Content" },
    { y: 25, x: "Creative" },
  ];
  const graphicColor = ["#0066cc", "#00e6e6", "#b3edff", "#00b3b3"];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contributions</Text>
      </View>
      <View style={styles.VictoryPie}>
        <VictoryPie
          data={graphicData}
          width={hp("45%")}
          height={hp("45%")}
          innerRadius={90}
          style={{ labels: { fill: "black", fontSize: hp("1.5%")}}}
          colorScale={graphicColor}
          padding={{left: wp('25%'),right: wp('25%')}}
        />
        <View style={styles.rankingContainer}>
          <Text
            style={{
              color: "#808080",
            }}
          >
            Overall Rank
          </Text>
          <Text
            style={{
              color: "#000000",
              fontWeight: "bold",
              textAlign: 'center'
            }}
          >
            68
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp("5%"),
  },
  header: {
    marginVertical: hp("2%"),
  },
  title: {
    textAlign: "left",
    fontSize: hp("3%"),
    paddingLeft: wp("4%"),
  },
  rankingContainer: {
    position: "absolute",
    display: 'flex',
  },
  VictoryPie: {
    justifyContent: "center",
    alignItems: "center",
    
  },
});
export default ContributionsSection;
