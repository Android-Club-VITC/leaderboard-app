import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  Appearance,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import PublicRankList from "./components/publicRankList";

import { useAuth } from "../../provider/authManager";
import { verifyEmailService,getAllContributionService } from "./services";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

function RankListModal({ modalVisible, setModalVisible }) {
  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
          <PublicRankList />
        </View>
      </View>
    </Modal>
  );
}

export default function SignIn() {
  const [email,setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false);
  // const [modalVisible, setModalVisible] = useState(false);

  const colorScheme = Appearance.getColorScheme();
  const themeStyle = colorScheme === "light" ? styles.lightThemeColor : styles.darkThemeColor;
  const themeTextStyle = colorScheme === "light"? styles.lightThemeTextColor : styles.darkThemeTextColor;
  const themeContainerStyle = colorScheme === "light" ? styles.lightContainerColor : styles.darkContainerColor;
  
  const theme ={
    theme:colorScheme,
    style:themeStyle,
    textStyle:themeTextStyle,
    containerStyle:themeContainerStyle,
  }
  const { login } = useAuth();

  const loginHandler = async () => {
    let res =await login(email.trim(), otp);
    if(res != 200){
      Alert.alert(
        "Something Failed!",
        "If this persists please contact your organization admin",
        [
          {
            text: "Ok",
            onPress: () => console.log("Ok"),
          },
        ]
      )
    }
  };

  const verifyEmailHandler = async () => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if ( !re.test(email.trim()) ){
      Alert.alert(
        "Are you Fine?",
        "Kindly Check your email",
        [
          {
            text: "Ok",
            onPress: () => console.log("Ok"),
          },
        ]
      )
      return;
    }
    setLoading(true);
    const res = await verifyEmailService(email.trim());
    if (res) setVerifyEmail(true);
    else {
      setVerifyEmail(false);
      Alert.alert(
        "Something Failed!",
        "Kindly Check your email",
        [
          {
            text: "Ok",
            onPress: () => console.log("Ok"),
          },
        ]
      )
    }
    setLoading(false);
  };

   return (
        <KeyboardAwareScrollView
          style={[{marginTop:0,flex:1},themeStyle]}
        >
            <Welcome theme={theme}/>

            {!verifyEmail && 
              <Input 
                email={email} 
                setEmail={setEmail} 
                setVerifyEmail={setVerifyEmail} 
                verify={verifyEmailHandler} 
                loading={loading} 
                session="email"
                theme={theme}
              />
            }

            {verifyEmail && 
              <Input 
                email={email} 
                otp={otp} 
                setOtp={setOtp}  
                setVerifyEmail={setVerifyEmail} 
                verify={loginHandler} 
                session="otp"
                theme={theme}
              />
            }
        </KeyboardAwareScrollView>
    );
  
}

function Welcome(props){
  return(
    <View style={[styles.topContainer,props.theme.containerStyle]}>
      <Text
        style={{
          fontWeight:'bold',
          fontSize: hp("5%"),
          color: 'white',
          paddingBottom:20
        }}
      >Welcome To ,
      </Text>
      <Text
        style={{
          fontWeight:'bold',
          fontSize: hp("8%"),
          color: 'white',
        }}
      >Leaderboard</Text>

    </View>
  )
}

function Input(props){
  return(
    <View>
        <Text
            style={[{
              fontWeight:'bold',
              fontSize:hp("5%"),
              marginVertical:hp("3%"),
              marginHorizontal:hp("3%"),
            },props.theme.textStyle]}
        >Sign In</Text>
        {props.session==="otp" &&
            <Text
                style={[{
                    fontSize:hp("3%"),
                    fontWeight:'bold',
                    marginHorizontal:hp("3.5%"),
                    marginVertical:hp("1%")
                },props.theme.textStyle]}
            >{props.email}</Text>
        }
        {props.session==="email"?
            <InputField placeHolder="Email" value={props.email} setValue={props.setEmail} theme={props.theme}/>
            :
            <InputField placeHolder="OTP" value={props.otp} setValue={props.setOtp} theme={props.theme}/>
        }
      <TouchableOpacity
        style={[styles.button,props.theme.containerStyle]}
        onPress={()=>{
            props.verify();
        }}
      >
        <Text
            style={styles.buttonText}
        >{props.session==="email"?props.loading==true?"Sending OTP...":"Request OTP":"Verify"}</Text>
        </TouchableOpacity>

        {props.session==="otp" &&
            <TouchableOpacity
                style={[styles.button2,props.theme.containerStyle]}
                onPress={()=>{props.setVerifyEmail(false)}}
            >
                <Text
                    style={{
                        color:'white',
                        fontSize: hp("3%"),
                        fontWeight: 'bold',
                    }}
                >Wrong Email ?</Text>
            </TouchableOpacity>
        }

    </View>
  )
}


function InputField(props){
  return(
    <View
      style={[styles.inputContainer]}
    >
      <TextInput
        style={[styles.input,props.theme.textStyle]}
        value = {props.value}
        onChangeText = {(value)=>props.setValue(value)}
        placeholder={props.placeHolder}
        placeholderTextColor={props.theme.theme === "light" ? "grey" : "#fff"}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  topContainer:{
    width : wp("100%"),
    height : hp("50%"),
    backgroundColor:'#43F47F',
    borderBottomRightRadius: 50,
    paddingLeft:15,
    justifyContent:'center'     
  },
  inputContainer:{
    width:wp("100%"),
    justifyContent:'center',
    alignItems:'center',
  },
  input: {
    borderBottomWidth:2,
    width:wp("90%"),
    height:hp("6%"),
    fontWeight:'bold',
    fontSize: hp("3%"),
  },
  container: {
    flex: 1,
    width: wp("100%"),
    justifyContent: 'center',
    padding: wp("5%"),
    // backgroundColor: "red",
  },
  arrow: {
    top: hp("2%"),
    right: hp("2.5%"),
  },
  
  button: {
    width:wp("90%"),
    height:hp("6%"),
    borderRadius:10,
    // backgroundColor:'#43F47F',
    alignSelf: 'center',
    justifyContent:'center',
    marginTop:20,
  },
  button2:{
    flexDirection:'row',
    height:hp("6%"),
    borderRadius:10,
    marginTop:20,
    alignItems:'center',
    justifyContent:'flex-end',
    paddingHorizontal:hp("4%"),
    marginHorizontal:hp("4%"),
    marginVertical:hp("4%"),
    alignSelf:'flex-end'
                
  },
  buttonText: {
    textAlign:'center',
    color:'white',
    fontSize: hp("3.5%"),
    fontWeight: 'bold'
  },
  lightThemeTextColor: {
    color: "#000000",
  },
  darkThemeTextColor: {
    color: "#ffffff",
    borderBottomColor: "#fff"
  },
  lightThemeColor: {
    backgroundColor: "#ffffff",
  },
  darkThemeColor: {
    backgroundColor: "#182C61",
  },
  lightContainerColor: {
    backgroundColor: "#64e8a6",
  },
  darkContainerColor: {
    backgroundColor: "#3B3B98",
  },
});
