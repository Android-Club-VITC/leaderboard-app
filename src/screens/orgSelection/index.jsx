import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import {
  heightPercentageToDP,
} from "react-native-responsive-screen";

export default function OrganizationSelection() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Your Organizations</Text>
        <View style={styles.picker}>
          <View style={styles.pickerItem}>
            <View style={styles.iconBox}>
              <Text></Text>
            </View>
            <Text style={styles.orgName}>Name</Text>
          </View>
          <View style={styles.pickerItem}>
            <View style={styles.iconBox}>
              <Text></Text>
            </View>
            <Text style={styles.orgName}>Name</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "3%",
    marginTop: heightPercentageToDP("10"),
  },
  headerText: {
    // fontWeight: "200",
    // fontSize: heightPercentageToDP("5"),
    alignSelf: "center",
    fontSize: heightPercentageToDP("5%"),
    fontWeight: "bold",
    marginBottom: heightPercentageToDP("2%"),
  },
  picker: {
    // backgroundColor: "red",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  pickerItem: {
    backgroundColor: "#fff",
    height: heightPercentageToDP("20"),
    width: heightPercentageToDP("20"),
    marginVertical: heightPercentageToDP("1"),
    marginHorizontal: heightPercentageToDP("2"),
    borderRadius: 15,
    textAlign: "center",
    alignItems: "center",
    borderWidth: 0.3,
    borderColor: '#000',
    elevation: 15
  },
  orgName: {
    //   backgroundColor: '#fff',
    fontSize: heightPercentageToDP("2.5"),
    padding: "2.5%",
  },
  iconBox: {
    height: "50%",
    width: "50%",
    borderRadius: 20,
    marginTop: heightPercentageToDP('2.5'),
    borderColor: '#000',
    borderWidth: 1,
  },
});
