import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import TopBar from "../../components/topBar";
import RankList from "../../components/rankList";

const Rankings = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container_outer}>
      <TopBar navigation={navigation} />
      <RankList navigation={navigation} />
    </SafeAreaView>
  );
};
export default Rankings;

const styles = StyleSheet.create({
  container_outer: {
    flex: 1,
  },
});
