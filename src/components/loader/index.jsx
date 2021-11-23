import React from "react";
import { Text, View, StyleSheet } from "react-native";

import AnimatedLoader from "react-native-animated-loader";

const Loader = () => {
  // const [visible, setVisible] = React.useState(false);
  // React.useEffect(() => {
  //   setInterval(() => {
  //     setVisible(!visible);
  //   }, 2000);
  // }, []);

  return (
    <View style={styles.loader}>
      <AnimatedLoader
        visible={true}
        overlayColor="rgba(255,255,255,0.8)"
        animationStyle={{ flex: 1 }}
        source={require("../../assets/loader.json")}
        speed={1}
        loop={true}
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
    backgroundColor: "#fff"
  },
});

export default Loader;
