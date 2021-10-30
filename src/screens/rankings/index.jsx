import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import TopBar from "../../components/topBar";
import RankList from "../../components/rankList";

import ProfileModal from "./components/profileModal";

const Rankings = ({navigation}) => {
  const [profile,setProfile] = useState("")
  const [modalVisible, setModalVisible] = useState(false);

  const handleProfile = (e) => {
    if (profile!=e) {
      setProfile(e)
    } else [
      setModalVisible(true)
    ]
  }

  useEffect(() => {
    if(profile) {
      setModalVisible(true);
    } 
  }, [profile])

  
  return (
    <View style={styles.container_outer}>
      <ProfileModal data={profile} modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <TopBar navigation={navigation} />
      <RankList navigation={navigation} setProfile={handleProfile}/>
    </View>
  );
};
export default Rankings;

const styles = StyleSheet.create({
  container_outer: {
    flex: 1,
  },
});
