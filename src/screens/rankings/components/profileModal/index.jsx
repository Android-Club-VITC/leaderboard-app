import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Modal,
  Pressable,
  ScrollView,
  Appearance
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
  const colorScheme = Appearance.getColorScheme();
  const themeStyle =
    colorScheme === "light" ? styles.lightThemeColor : styles.darkThemeColor;
  const themeTextStyle =
    colorScheme === "light"
      ? styles.lightThemeTextColor
      : styles.darkThemeTextColor;
  
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      hideModalContentWhileAnimating={true}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <SafeAreaView style={styles.centeredView}>
        <View style={[styles.modalView,themeStyle]}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Ionicons
              // style={{ marginLeft: wp("2.3%") }}
              name={"close-outline"}
              size={hp("6%")}
              style={themeTextStyle}
            />
          </Pressable>
          {modalVisible && <Profile userData={data} />}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalView: {
    // backgroundColor: 'red'
  },
  button: {
    alignSelf: "flex-end",
  },
  lightThemeTextColor: {
    color: "#000000"
  },
  darkThemeTextColor: {
    color: "#ffffff"
  },
  lightThemeColor: {
    backgroundColor: "#26de81",
  },
  darkThemeColor: {
    backgroundColor: "#3B3B98"
  },
});
