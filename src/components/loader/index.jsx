import React from "react";
import { Text, View, SafeAreaView, StyleSheet, StatusBar } from "react-native";


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Loader = () => {
  spinValue = new Animated.Value(0);
  Animated.loop(
    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();
  const spin = this.spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View style={styles.loader}>
      <Text>I Am Loading</Text>
      <Animated.Image
        style={{ transform: [{ rotate: spin }] }}
        source={{ uri: "../../assets/ac_logo.png" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
