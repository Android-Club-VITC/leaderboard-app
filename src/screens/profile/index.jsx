import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import AvatarBox from "../../components/avatarBox";
import SocialSection from "../../components/socialSection";
// import ContributionsSection from "../../components/contributionsSection";
import Loader from "../../components/loader";
import Timeline from "../../components/timeline";

import { getUserInfoService, editSocialsService, editNameService, getContributionService, randomisePfpService } from "./services";
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
  
  const handlePfpEdit = async () => {
    setLoading(true);
    await randomisePfpService(email);
    getData(); 
  }

  const handleSocialsEdit = async (obj) => {
    setLoading(true);
    await editSocialsService(email, obj);
    getData() 
  }

  const getData = async () => {
    setLoading(true);
    //const res1 = await getUserInfoService(email);
    const res = await getContributionService(email)
    // console.warn(res);
    setData(res.member);
    setContrib({timeline: res.timeline});
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
          <AvatarBox name={data.name} profilePicture={data.avatar} handleEdit={handleNameEdit} handlePfpEdit={handlePfpEdit} />
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
