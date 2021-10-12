import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import AvatarBox from "../../components/avatarBox";
import SocialSection from "../../components/socialSection";
import ContributionsSection from "../../components/contributionsSection";

const Profile = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <AvatarBox />
      <SocialSection />
      <ContributionsSection />
    </ScrollView>
  );
};
export default Profile;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
