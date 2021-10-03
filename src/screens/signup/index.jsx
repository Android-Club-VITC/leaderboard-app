import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const SignUp = () => {

    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, onChangePassword] = useState();


    return (

        <View style={styles.container}>

            <FontAwesomeIcon icon={faArrowLeft} size={20} style={styles.arrow} />

            <Text style={styles.title}>SIGN UP</Text>
            
            <TextInput style={styles.input}
                onChangeText={(fullName)=>setFullName(fullName)} value={fullName}
                placeholder="Full Name" />

            <TextInput style={styles.input}
                 onChangeText={(email)=>setEmail(email)} value={email}
                placeholder="E-Mail Address" />

            <TextInput secureTextEntry={true} style={styles.input}
                onChangeText={onChangePassword}
                value={password} placeholder="Password" />


            <TouchableOpacity style={styles.button} onPress={() => console.log('SignIn')} underlayColor='#fff'>

                <Text style={styles.buttonText}>Sign Up</Text>

            </TouchableOpacity>

            <Text style={styles.text}>Already have an account?</Text>

            <TouchableOpacity style={styles.button} onPress={() => console.log('SignUp')} underlayColor='#fff'>

                <Text style={styles.buttonText}>Sign In</Text>

            </TouchableOpacity>
        </View>)
}
export default SignUp
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







// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// // import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import {BackHandler} from "react-native";

// const SignUp = () =>{

//   return (
//     <View style={styles.container}>
//       <FontAwesomeIcon icon={faArrowLeft} size={20} style={styles.arrow} />
//       <Text style={styles.header}>{'SIGN UP FOR A \nNEW ACCOUNT.'}</Text>
//       <TextInput styles={styles.input} placeholder='E-mail Address'/>
//       <TextInput styles={styles.input1} placeholder='Password'/>
      
//       <View style={styles.buttonContainer}>
//         <Button title ='NEXT' />
//       </View>
//       <Text style={styles.signupvia}>Or signup via</Text>

//     </View>
     
//   );
// }
// export default SignUp

// const styles = StyleSheet.create({
//   container: {
//     marginLeft:10,
    
  
//   },
//   header:{
//     marginTop: 150,
//     marginBottom:20,
//     textAlign: 'left',
//     fontWeight: 'bold',
//     fontSize: 35,
//   },
//   buttonContainer:{
//     marginTop:20,
//     backgroundColor:'#000',

//   },
//   input: {
//     marginTop:20,
//   },
//   input1: {
//     borderWidth: 1 ,
//     borderBottomColor: '#777',
//   },
//   signupvia: {
//     marginTop: 30,
//     textAlign:'center',
//     color: '#808080',
//   },
// })