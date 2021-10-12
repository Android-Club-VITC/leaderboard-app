import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { useAuth } from "../../provider/authManager";
import { verifyEmailService } from "./services";

export default function SignIn() {
  const [text, onChangeText] = useState();
  const [verifyEmail, setVerifyEmail] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpInputVisibility, setOtpInputVisibility] = useState(false);
  const { login } = useAuth();

  const loginHandler = async () => {
    await login(text, otp);
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
    <View style={styles.container}>
      <View style={{ marginTop: hp("25%") }}>
        <Text style={styles.title}>SIGN IN</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="E-Mail Address"
        />
        {otpInputVisibility ? (
          <TextInput
            secureTextEntry={false}
            style={styles.input}
            onChangeText={setOtp}
            value={otp}
            placeholder="OTP"
            editable={verifyEmail}
          />
        ) : null}

        <TouchableOpacity
          style={styles.button}
          onPress={verifyEmail ? loginHandler : verifyEmailHandler}
          underlayColor="#fff"
        >
          <Text style={styles.buttonText}>
            {loading ? "Loading..." : verifyEmail ? "Sign In" : "Request OTP"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: hp("5%"),
    margin: hp("1%"),
    borderBottomWidth: hp("0.2%"),
    padding: 10,
    // backgroundColor: "yellow",
  },
  container: {
    flex: 1,
    width: wp("100%"),
    // justifyContent: "space-around",
    padding: wp("5%"),
    // height: hp("100%"),
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
    color: "white",
    fontWeight: "bold",
  },
  text: {
    alignSelf: "center",
    color: "grey",
  },
});
