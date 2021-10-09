import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useAuth } from "../../provider/authManager";
import { verifyEmailService } from "./services";

const SignIn = () => {
  const [text, onChangeText] = useState();
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const loginHandler = async () => {
    await login(text, otp);
  };

  const verifyEmailHandler = async () => {
    setLoading(true);
    const res = await verifyEmailService(text);
    if (res) setVerifyEmail(true);
    else setVerifyEmail(false);
    setLoading(false);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN IN</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="E-Mail Address"
      />

      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={setOtp}
        value={otp}
        placeholder="OTP"
        editable={verifyEmail}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={verifyEmail ? loginHandler : verifyEmailHandler}
        underlayColor="#fff"
      >
        <Text style={styles.buttonText}>
          {loading? "I am Loading" : verifyEmail ? "Sign In" : "Request OTP"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignIn;
const styles = StyleSheet.create({
  input: {
    height: hp("5%"),
    margin: hp("1%"),
    borderBottomWidth: hp("0.1%"),
    padding: 10,
  },
  container: {
    flex: 1,
    width: wp("91%"),
    justifyContent: "space-around",
    padding: wp("10%"),
    height: hp("80%"),
  },
  arrow: {
    top: hp("2%"),
    right: hp("2.5%"),
  },

  title: {
    alignSelf: "center",
    fontSize: hp("5%"),
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "black",
    borderRadius: wp("20%"),
    alignItems: "center",
    height: hp("5%"),
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  text: {
    alignSelf: "center",
    color: "grey",
  },
});
