import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import AvatarBox from "../../../../components/avatarBox";
import SocialSection from "../../../../components/socialSection";
import Loader from "../../../../components/loader";
import Timeline from "../../../../components/timeline";

// service
import { getUserInfoService, getUserContribService } from "../../services";

function Profile({ userData }) {
  const [data, setData] = useState({});
  const [contrib, setContrib] = useState({});
  
  const getData = () => {

    setData(userData?.member);
    setContrib({timeline: userData?.timeline});
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
        <ScrollView contentContainerStyle={{
            paddingBottom: 40
        }}>
          <View style={{flex: 1, paddingBottom: 20}}>
          <AvatarBox
            name={data.name}
            profilePicture={data.avatar}
            showEdit={false}
          />
          <SocialSection
            linkedin={data.socials?.linkedin}
            discord={data.socials?.discord}
            instagram={data.socials?.instagram}
            github={data.socials?.github}
            showEdit={false}
          />
          <Timeline data={contrib} />
          {/* <ContributionsSection /> */}
        </View>
        </ScrollView>
    </>
  );
}

export default function ProfileModal({ modalVisible, setModalVisible, data }) {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      hideModalContentWhileAnimating={true}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Ionicons
              // style={{ marginLeft: wp("2.3%") }}
              name={"close-outline"}
              size={hp("6%")}
            />
          </Pressable>
          {modalVisible && <Profile userData={data} />}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  button: {
    alignSelf: "flex-end",
  },
});
