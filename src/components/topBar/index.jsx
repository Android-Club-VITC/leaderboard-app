import React from "react";
import { Text, View, SafeAreaView, StyleSheet, StatusBar } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, FontAwesome5Brands } from '@expo/vector-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faPoll, faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import { faAndroid } from "@fortawesome/free-brands-svg-icons";

const TopBar = () => {
  return (
    <View style={styles.topContainer}>
      {/* <View style={styles.topColourView} /> */}

      <View style={styles.topBar}>

        <View style={styles.title}>
          {/* <FontAwesomeIcon
            round
            icon={faUserCircle}
            size={35}
            color={"white"}
          /> */}
          <View style={styles.iconContainer}>
            <Ionicons 
              name="person-outline"
              size={hp('3.5%')}
              color="#a0e7e1"
              style={{margin: 'auto'}}
            />
          </View>
          
          <Text style={styles.text}>username</Text>
        </View>

        <View style={styles.title}>
          {/* <FontAwesomeIcon round icon={faPoll} size={35} color={"white"} /> */}
          <View style={styles.iconContainer}>
            <Ionicons 
              name="stats-chart-outline"
              size={hp('3.5%')}
              color="#a0e7e1"
              style={{margin: 'auto'}}
            />
          </View>
          <Text style={styles.text}>Ranking</Text>
        </View>

        <View style={styles.title}>
          {/* <FontAwesomeIcon round icon={faAndroid} size={35} color={"white"} /> */}
          <View style={styles.iconContainer}>
            <Ionicons 
                name="information-outline"
                size={hp('3.5%')}
                color="#a0e7e1"
                style={{margin: 'auto'}}
              />
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
    marginBottom: hp('3%'),
  },
  topBar: {
    height: hp("10%"),
    width: wp("100%"),
    display: 'flex',
    flexDirection: 'row',
    // flexDirection: "row",
    // flex: 0.9,
    justifyContent: "space-around",
    alignItems: "stretch",
    backgroundColor: "#a0e7e1",
    borderBottomRightRadius: 70,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  title: {
    // bottom: hp("2%"),
    width: wp('24%'),
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: hp('6%'),
    height: hp('6%'),
    backgroundColor: '#fff',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row'
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
