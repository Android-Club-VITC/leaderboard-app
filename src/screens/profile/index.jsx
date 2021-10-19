import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import AvatarBox from "../../components/avatarBox";
import SocialSection from "../../components/socialSection";
import ContributionsSection from "../../components/contributionsSection";
import Loader from "../../components/loader";
import Timeline from "../../components/timeline";

import { getUserInfoService, editSocialsService, editNameService, getContributionService } from "./services";
import { useAuth } from "../../provider/authManager";

const Profile = () => {
  const [data, setData] = useState({});
  const [contrib, setContrib] = useState({});
  const [loading, setLoading] = useState(false);
  const { email } = useAuth();

  const handleNameEdit = async (name) => {
    setLoading(true);
    await editNameService(email, name);
    getData(); 
  }
  
  const handleSocialsEdit = async (obj) => {
    setLoading(true);
    await editSocialsService(email, obj);
    getData() 
  }

  const getData = async () => {
    setLoading(true);
    const res1 = await getUserInfoService(email);
    const res2 = await getContributionService(email)
    setData(res1);
    setContrib(res2);
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
          <AvatarBox name={data.name} profilePicture={data.avatar} handleEdit={handleNameEdit}/>
          <SocialSection
            linkedin={data.socials?.linkedin}
            discord={data.socials?.discord}
            instagram={data.socials?.instagram}
            github={data.socials?.github}
            handleEdit={handleSocialsEdit}
          />
          <Timeline data={contrib} />
          {/* <ContributionsSection /> */}
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
