import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import TopBar from "../../components/topBar";

import { SafeAreaView } from "react-native-safe-area-context";

import ProfileModal from "./components/profileModal";
// import RankList from "../../components/rankList";

const Rankings = ({navigation}) => {
  const [profile,setProfile] = useState("")
  const [modalVisible, setModalVisible] = useState(false);

  const handleProfile = (e) => {
    if (profile!=e) {
      setProfile(e)
    } else {
      setModalVisible(true)
    }
  }

  useEffect(() => {
    if(profile) {
      setModalVisible(true);
    } 
  }, [profile])

  
  return (
    <SafeAreaView style={styles.container_outer}>
      <ProfileModal data={profile} modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <TopBar navigation={navigation} setProfile={handleProfile}/>
      {/* <RankList navigation={navigation} setProfile={handleProfile}/> */}
    </SafeAreaView>
  );
};
export default Rankings;

const styles = StyleSheet.create({
  container_outer: {
    flex: 1,
  },
});
