import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function More(){
    return(
        <View style={styles.container}>
            <View style={styles.optionBox}>
                <Ionicons name="color-palette-outline" size={hp('4%')} /> 
                <Text style={styles.optionName}>Change Theme</Text>
            </View>
            <View style={styles.optionBox}>
                <Ionicons name="log-out-outline" size={hp('4%')} /> 
                <Text style={styles.optionName}>Logout</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        padding: '2%',
    },
    optionBox: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        marginTop: '2%',
        backgroundColor: '#99ddd9',
        borderRadius: 10,
        // borderBottomWidth: 2,
    },
    optionName: {
        fontSize: hp('2.2%'),
        marginLeft: wp('1.5%')
    },
})