import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const SignIn = () => {

    const [text, onChangeText] = useState();
    const [password, onChangePassword] = useState();


    return (

        <View style={styles.container}>

            <FontAwesomeIcon icon={faArrowLeft} size={20} style={styles.arrow} />

            <Text style={styles.title}>SIGN IN</Text>

            <TextInput style={styles.input}
                onChangeText={onChangeText} value={text}
                placeholder="E-Mail Address" />

            <TextInput secureTextEntry={true} style={styles.input}
                onChangeText={onChangePassword}
                value={password} placeholder="Password" />


            <TouchableOpacity style={styles.button} onPress={() => console.log('SignIn')} underlayColor='#fff'>

                <Text style={styles.buttonText}>Sign IN</Text>

            </TouchableOpacity>

            <Text style={styles.text}>Don't have an account?</Text>

            <TouchableOpacity style={styles.button} onPress={() => console.log('SignUp')} underlayColor='#fff'>

                <Text style={styles.buttonText}>Sign up</Text>

            </TouchableOpacity>
        </View>)
}
export default SignIn
const styles = StyleSheet.create({
    input: {
        height: hp('5%'),
        margin: hp('1%'),
        borderBottomWidth: hp('0.1%'),
        padding: 10,
    },
    container:
    {
        flex: 1,
        width: wp('91%'),
        justifyContent: 'space-between',
        padding: wp('10%'),
        height: hp('80%'),
    },
    arrow: {
        top: hp('2%'),
        right: hp('2.5%')
    },

    title:
    {
        alignSelf: 'center',
        fontSize: hp('5%'),
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: "black",
        borderRadius: wp('20%'),
        alignItems: 'center', height: hp('5%'),
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    text: {
        alignSelf: 'center',
        color: 'grey'
    }

})