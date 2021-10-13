import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { FontAwesome5 } from "@expo/vector-icons";

const socialarr = [
  {
    name: "Discord",
    iconname: "discord",
  },
  {
    name: "Instagram",
    iconname: "instagram",
  },
  {
    name: "LinkedIn",
    iconname: "linkedin",
  },
  {
    name: "Facebook",
    iconname: "facebook",
  },
];

function Socialsectionbox({ name, iconname }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.circle}>
          <FontAwesome5
            // style={{ marginLeft: wp("2.3%") }}
            name={iconname}
            size={hp('3.5%')}
            color="black"
          />
        </View>
      </View>
      <View style={styles.itemRight}>
        <Text style={styles.itemText}>{iconname.toUpperCase()}</Text>
        <Text style={styles.itemSubText}>{name}</Text>
      </View>
    </View>
  );
}
export default function SocialSection({linkedIn, instagram, discord}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Social</Text>
      </View>
        <View style={styles.itembox}>
          <Socialsectionbox name={discord || "Not Set"} iconname="discord" />
          <Socialsectionbox name={instagram || "Not Set"} iconname="instagram" />
          <Socialsectionbox name={linkedIn || "Not Set"} iconname="linkedin" />
          <Socialsectionbox name="Facebook" iconname="facebook" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp('5%')
  },
  header: {
    marginVertical: hp('2%'),
  },
  title: {
    textAlign: "left",
    fontSize: hp("3%"),
    paddingLeft: wp('4%'),
    // paddingBottom: hp("5%"),
  },
  links: {
    paddingTop: hp("2%"),
  },
  link: {
    paddingVertical: hp("2%"),
    fontSize: hp("2.5%"),
    fontWeight: "bold",
    backgroundColor: "#e6fffb",
    borderBottomStartRadius: hp("1%"),
  },
  itembox: {
    display: "flex",
    borderRadius: 15,
  },
  item: {
    display: "flex",
    backgroundColor: "#f0fffd",
    borderRadius: 10,
    padding: wp("4%"),
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'space-between',
    marginBottom: hp("1%"),
  },
  itemLeft: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemRight: {
    flex: 2,
  },
  circle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    width: hp("5%"),
    height: hp("5%"),
    backgroundColor: "#a0e7e1",
    opacity: 0.8,
    borderRadius: hp("50%"),
  },
  itemText: {
    maxWidth: wp("80%"),
    fontSize: hp("2%"),
    fontWeight: 'bold'
  },
  itemSubText: {
    fontWeight: '200'
  },
});
