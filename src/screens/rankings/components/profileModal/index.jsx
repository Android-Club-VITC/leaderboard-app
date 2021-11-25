import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Modal,
  Pressable,
  ScrollView,
  Appearance,
  TouchableOpacity 
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

import AvatarBox from "../../../../components/avatarBox";
import SocialSection from "../../../../components/socialSection";

import Timeline from "../../../../components/timeline";


function Profile({ userData }) {

  return (
    <>
      <View
        // contentContainerStyle={{
        //   paddingBottom: 40,
        // }}
      >
        <ScrollView style={{ paddingBottom: 0 }}>
          <AvatarBox
            name={userData.member.name}
            profilePicture={userData.member.avatar}
            showEdit={false}
          />
          <SocialSection
            linkedin={userData.member.socials?.linkedin}
            discord={userData.member.socials?.discord}
            instagram={userData.member.socials?.instagram}
            github={userData.member.socials?.github}
            showEdit={false}
          />
          <Timeline data={userData} />
        </ScrollView>
      </View>
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
      <SafeAreaView>
        <ScrollView style={[styles.modalView, themeStyle]}>
          <Pressable
            style={styles.button}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Ionicons
              name={"close-outline"}
              size={hp("6%")}
              style={themeTextStyle}
            />
          </Pressable>
          {modalVisible && <Profile userData={data} />}
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    // flex: 1,
    backgroundColor: "#fff",
  },
  modalView: {
    // backgroundColor: 'red'
  },
  button: {
    alignSelf: "flex-end",
  },
  lightThemeTextColor: {
    color: "#000000",
  },
  darkThemeTextColor: {
    color: "#ffffff",
  },
  lightThemeColor: {
    backgroundColor: "#64e8a6",
  },
  darkThemeColor: {
    backgroundColor: "#3B3B98",
  },
});
