import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TopBar from "../../components/topBar";
import RankList from "../../components/rankList";

const Rankings = () => {
  return (
    <SafeAreaView style={styles.container_outer}>
      <TopBar />
      <RankList />
    </SafeAreaView>
  );
};
export default Rankings;

const styles = StyleSheet.create({
  container_outer: {
    flex: 1,
  },
});
