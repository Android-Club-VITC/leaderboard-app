import React from "react";
import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP,
} from "react-native-responsive-screen";

import { useAuth } from "../../provider/authManager";

export default function OrganizationSelection() {
  const { orgs, selectedOrg, setSelectedOrg } = useAuth()
  
  const handleClick = (org) => {
    if(org._id != selectedOrg._id) {
      setSelectedOrg(org);
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Your Organizations</Text>
        <View style={styles.picker}>
          {orgs.map((o,i)=>
           <TouchableOpacity
           key={i}
           onPress={() => handleClick(o)}
           
         >
          <View style={{...styles.pickerItem, borderColor: selectedOrg._id == o._id? "red": "#000"}}>
            <View style={styles.iconBox}>
              <Text></Text>
            </View>
            <Text style={styles.orgName}>{o.name}</Text>
          </View>
          </TouchableOpacity>
          )}
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
    borderWidth: 1,
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
