import React from "react";
import { Text, View, StyleSheet } from "react-native";


import AnimatedLoader from "react-native-animated-loader";

const Loader = () => {
  return (
    <View style={styles.loader}>
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={{ flex: 1 }}
        speed={1}
      >
        <Text>Doing something...</Text>
      </AnimatedLoader>
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
