import React, { useEffect, useRef } from "react";
import { View, Text, Animated, Easing, Dimensions } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";

export default function SplashScreen() {
  const translateX = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get("screen");

  const opacity = translateX.interpolate({
    inputRange: [0,width],
    outputRange: [0,1]
  })

  const scale = translateX.interpolate({
    inputRange: [0,width],
    outputRange: [0.8,1]
  })

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: width,
      duration: 4000,
      timing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MaskedView
        style={{ flex: 1, flexDirection: "row", height: "100%" }}
        maskElement={
          <View
            style={{
              // Transparent background because mask is based off alpha channel.
              backgroundColor: "transparent",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: width*0.05,
                color: "black",
                fontWeight: "bold",
              }}
              numberOfLines = {2}
            >
              Powered By
            </Text>

            <Text
              style={{
                fontSize: width*0.2,
                color: "black",
                fontWeight: "bold",
                textAlign: "center"
              }}
              numberOfLines = {2}
            >
              Android Club
            </Text>
          </View>
        }
      >
        {/* Shows behind the mask, you can put anything here, such as an image */}
        <Animated.View style={{ flex: 1, position: "absolute", top: 0, left: 0, backgroundColor: "#26de81", height: "100%", width, opacity }} />
        <Animated.View style={{ flex: 1, flexDirection: "row" }}>
          <Animated.View
            style={[
              {
                flex: 1,
                height: "100%",
                backgroundColor: "#324376",
                width: width / 3,
              },
              { transform: [{ translateX }] },
            ]}
          />
          <Animated.View
            style={[
              {
                flex: 1,
                height: "100%",
                backgroundColor: "#F5DD90",
                width: width / 3,
              },
              { transform: [{ translateX }] },
            ]}
          />
          <Animated.View
            style={[
              {
                flex: 1,
                height: "100%",
                backgroundColor: "#F76C5E",
                width: width / 3,
              },
              { transform: [{ translateX }] },
            ]}
          />
          <Animated.View
            style={[
              {
                flex: 1,
                height: "100%",
                backgroundColor: "#e1e1e1",
                width: width / 3,
              },
              { transform: [{ translateX }] },
            ]}
          />
        </Animated.View>
      </MaskedView>
    </View>
  );
}
