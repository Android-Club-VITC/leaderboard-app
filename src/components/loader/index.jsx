import React from "react";
import { Text, View, SafeAreaView, StyleSheet, StatusBar } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const Loader = () => {
    return (
        <View style={styles.loader}>
            <Text>I Am Loading</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Loader;