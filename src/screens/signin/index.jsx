import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Appearance,
  Alert
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import PublicRankList from "./components/publicRankList";

import { useAuth } from "../../provider/authManager";
import { verifyEmailService,getAllContributionService } from "./services";

function RankListModal({ modalVisible, setModalVisible }) {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
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
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
          <PublicRankList />
        </View>
      </View>
    </Modal>
  );
}

export default function SignIn() {
  const [text, onChangeText] = useState();
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpInputVisibility, setOtpInputVisibility] = useState(false);
  // const [modalVisible, setModalVisible] = useState(false);

  const colorScheme = Appearance.getColorScheme();
  const themeStyle =
    colorScheme === "light" ? styles.lightThemeColor : styles.darkThemeColor;
  const themeTextStyle =
    colorScheme === "light"
      ? styles.lightThemeTextColor
      : styles.darkThemeTextColor;
  const themeContainerStyle =
    colorScheme === "light"
      ? styles.lightContainerColor
      : styles.darkContainerColor;
  
  const { login } = useAuth();

  const loginHandler = async () => {
    let res =await login(text, otp);
    if(res != 200){
      Alert.alert(
        "Something Failed!",
        "If this persists please contact your organization admin",
        [
          {
            text: "Ok",
            onPress: () => console.log("Ok"),
          },
        ]
      )
    }
  };

  const verifyEmailHandler = async () => {
    setLoading(true);
    setOtpInputVisibility(true);
    const res = await verifyEmailService(text);
    if (res) setVerifyEmail(true);
    else setVerifyEmail(false);
    setLoading(false);
  };

  return (
    <View style={[styles.container,themeStyle]}>
      {/* <RankListModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      /> */}
      <View>
        <Text style={[styles.title,themeTextStyle]}>SIGN IN</Text>
        <TextInput
          style={[styles.input,themeTextStyle]}
          onChangeText={onChangeText}
          value={text}
          placeholder="E-Mail Address"
          placeholderTextColor={colorScheme === "light" ? "#000" : "#fff"}
        />
        {otpInputVisibility ? (
          <TextInput
            secureTextEntry={false}
            style={[styles.input,themeTextStyle]}
            onChangeText={setOtp}
            value={otp}
            placeholder="OTP"
            placeholderTextColor={colorScheme === "light" ? "#000" : "#fff"}
            editable={verifyEmail}
          />
        ) : null}

        <TouchableOpacity
          style={[styles.button,themeContainerStyle]}
          onPress={verifyEmail ? loginHandler : verifyEmailHandler}
          underlayColor="#fff"
        >
          <Text style={[styles.buttonText]}>
            {loading ? "Loading..." : verifyEmail ? "Sign In" : "Request OTP"}
          </Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
        style={{ alignSelf: "flex-end" }}
        onPress={() => setModalVisible(true)}
        underlayColor="#fff"
      >
        <Image
          source={require("../../assets/ac_logo.png")}
          style={{ width: 80, height: 80 }}
        />
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: hp("1%"),
    borderBottomWidth: hp("0.2%"),
    padding: 10,
  },
  container: {
    flex: 1,
    width: wp("100%"),
    justifyContent: 'center',
    padding: wp("5%"),
    // backgroundColor: "red",
  },
  arrow: {
    top: hp("2%"),
    right: hp("2.5%"),
  },
  title: {
    alignSelf: "center",
    fontSize: hp("5%"),
    fontWeight: "bold",
    marginBottom: hp("2%"),
  },
  button: {
    backgroundColor: "black",
    borderRadius: wp("20%"),
    alignItems: "center",
    height: hp("5%"),
    justifyContent: "center",
    marginTop: hp("2%"),
    marginBottom: hp("2%"),
  },
  buttonText: {
    color: '#fff',
    fontWeight: "bold",
  },
  text: {
    alignSelf: "center",
    color: "grey",
  },
  lightThemeTextColor: {
    color: "#000000",
  },
  darkThemeTextColor: {
    color: "#ffffff",
    borderBottomColor: "#fff"
  },
  lightThemeColor: {
    backgroundColor: "#ffffff",
  },
  darkThemeColor: {
    backgroundColor: "#182C61",
  },
  lightContainerColor: {
    backgroundColor: "#64e8a6",
  },
  darkContainerColor: {
    backgroundColor: "#3B3B98",
  },
});
