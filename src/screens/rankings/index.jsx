import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import TopBar from "../../components/topBar";
import RankList from "../../components/rankList";

import ProfileModal from "./components/profileModal";

const Rankings = ({navigation}) => {
  const [email,setEmail] = useState("")
  const [modalVisible, setModalVisible] = useState(false);

  const setProfile = (e) => {
    if (email!=e) {
      setEmail(e)
    } else [
      setModalVisible(true)
    ]
  }

  useEffect(() => {
    if(email) {
      setModalVisible(true);
    } 
  }, [email])

  
  return (
    <View style={styles.container_outer}>
      <ProfileModal email={email} modalVisible={modalVisible} setModalVisible={setModalVisible} />
      <TopBar navigation={navigation} />
      <RankList navigation={navigation} setProfile={setProfile}/>
    </View>
  );
};
export default Rankings;

const styles = StyleSheet.create({
  container_outer: {
    flex: 1,
  },
});
