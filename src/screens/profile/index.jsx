import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import AvatarBox from "../../components/avatarBox";
import SocialSection from "../../components/socialSection";
import ContributionsSection from "../../components/contributionsSection";
import Loader from "../../components/loader";

import { getUserInfoService, editSocialsService } from "./services";
import { useAuth } from "../../provider/authManager";

const Profile = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { email } = useAuth();

  const handleSocialsEdit = async (obj) => {
    setLoading(true);
    await editSocialsService(obj);
    getData() 
  }
  const getData = async () => {
    setLoading(true);
    const res = await getUserInfoService(email);
    setData(res);
  };

  useEffect(() => {
    setLoading(false);
  }, [data]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <ScrollView style={styles.scrollView}>
          <AvatarBox name={data.name} />
          <SocialSection
            linkedin={data.socials?.linkedin}
            discord={data.socials?.discord}
            instagram={data.socials?.instagram}
            handleEdit={handleSocialsEdit}
          />
          <ContributionsSection />
        </ScrollView>
      )}
    </>
  );
};
export default Profile;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
