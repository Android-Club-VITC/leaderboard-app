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
  Alert
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import PublicRankList from "./components/publicRankList";

import { useAuth } from "../../provider/authManager";
import { verifyEmailService,getAllContributionService } from "./services";

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
  const themeStyle =
    colorScheme === "light" ? styles.lightThemeColor : styles.darkThemeColor;
  const themeTextStyle =
    colorScheme === "light"
      ? styles.lightThemeTextColor
      : styles.darkThemeTextColor;
  const themeContainerStyle =
    colorScheme === "light"
      ? styles.lightContainerColor
      : styles.darkContainerColor;
  
  const { login } = useAuth();

  const loginHandler = async () => {
    let res =await login(email, otp);
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

    if ( !re.test(email) ){
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
    const res = await verifyEmailService(email);
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
        <View style={{marginTop:0,flex:1}}>
            <Welcome/>
            {!verifyEmail && <Input email={email} setEmail={setEmail} setVerifyEmail={setVerifyEmail} verify={verifyEmailHandler} loading={loading}session="email"/>}
            {verifyEmail && <Input email={email} otp={otp} setOtp={setOtp}  setVerifyEmail={setVerifyEmail} verify={loginHandler} session="otp"/>}
        </View>
    );
  
}

function Welcome(){
  return(
    <View
      style={{
        width : "100%",
        height : "50%",
        backgroundColor:'#43F47F',
        borderBottomRightRadius: 50,
        paddingLeft:15,
        justifyContent:'center'
      }}
    >
      <Text
        style={{
          fontWeight:'bold',
          fontSize: 40,
          color: 'white',
          paddingBottom:20
        }}
      >Welcome To ,
      </Text>
      <Text
        style={{
          fontWeight:'bold',
          fontSize: 45,
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
            style={{
            fontWeight:'bold',
            fontSize:36,
            marginVertical:20,
            marginHorizontal:20,
            }}
        >Sign In</Text>
        {props.session==="otp" &&
            <Text
                style={{
                    fontSize:20,
                    fontWeight:'bold',
                    marginHorizontal:20,
                    marginVertical:10
                }}
            >{props.email}</Text>
        }
        {props.session==="email"?
            <InputField placeHolder="Email" value={props.email} setValue={props.setEmail}/>
            :
            <InputField placeHolder="OTP" value={props.otp} setValue={props.setOtp}/>
        }
      <TouchableOpacity
        style={{
          width:"90%",
          height:40,
          borderRadius:10,
          backgroundColor:'#43F47F',
          alignSelf: 'center',
          justifyContent:'center',
          marginTop:20
        }}
        onPress={()=>{
            props.verify();
        }}
      >
        <Text
            style={{
                textAlign:'center',
                color:'white',
                fontSize: 20,
                fontWeight: 'bold'
            }}
        >{props.session==="email"?props.loading==true?"Sending OTP...":"Request OTP":"Verify"}</Text>
        </TouchableOpacity>

        {props.session==="otp" &&
            <TouchableOpacity
                style={{
                    flexDirection:'row',
                    height:40,
                    borderRadius:10,
                    backgroundColor:'#43F47F',
                    marginTop:20,
                    alignItems:'center',
                    justifyContent:'flex-end',
                    paddingHorizontal:10,
                    marginHorizontal:20,
                    alignSelf:'flex-end'
                }}

                onPress={()=>{props.setVerifyEmail(false)}}
            >
                <Text
                    style={{
                        color:'white',
                        fontSize: 20,
                        fontWeight: 'bold'
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
      style={{
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
      }}
    >
      <TextInput
        style={{
          borderWidth:2,
          width:"90%",
          height:50,
          borderRadius:10,
          paddingHorizontal:10,
          fontWeight:'bold',
          fontSize: 18,

        }}
        value = {props.value}
        onChangeText = {(value)=>props.setValue(value)}
        placeholder={props.placeHolder}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: hp("1%"),
    borderBottomWidth: hp("0.2%"),
    padding: 10,
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
    color: '#fff',
    fontWeight: "bold",
  },
  text: {
    alignSelf: "center",
    color: "grey",
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
