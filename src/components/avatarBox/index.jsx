import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";

const AvatarBox = ({ name, profilePicture, handleEdit}) => {
  const [editName, setEditName] = useState(name);
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (!editable && editName != name) {
      handleEdit(editName);
    }
  }, [editable]);

  const handleClose = () => {
    setEditName(name);
    setEditable(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.AvatarOuterContainer}>
        <View
          style={{
            width: wp("100%"),
            justifyContent: "flex-end",
            flexDirection: "row",
            paddingTop: 5,
            paddingRight: 15,
          }}
        >
          {editable && (
            <TouchableOpacity
              onPress={() => handleClose()}
              underlayColor="#fff"
            >
              <Ionicons
                name={"close-outline"}
                size={hp("3%")}
                color="black"
              />
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => setEditable(!editable)}
            underlayColor="#fff"
            style={{ paddingLeft: 10 }}
          >
            <Ionicons
              name={editable ? "checkmark-outline" : "create-outline"}
              size={hp("3%")}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.AvatarContainer}>
          <SvgUri uri={profilePicture} style={styles.avatar}/>
          {/* <Ionicons
            name="person-outline"
            size={hp("15%")}
            color="#000"
            style={styles().avatar}
          /> */}
          {/* <View style={styles.editContainer}>
            <Ionicons
              name="create-outline"
              size={hp("3%")}
              color="#000"
              style={{ textAlign: "center" }}
            />
          </View> */}
        </View>
        {!editable ? (
          <Text
            style={{
              marginTop: 10,
              maxWidth: wp("80%"),
              fontSize: hp("3%"),
              fontWeight: "bold",
            }}
          >
            {name}
          </Text>
        ) : (
          <TextInput
            style={styles.input}
            onChangeText={setEditName}
            value={editName}
            placeholder={`enter name`}
          />
        )}
        <View style={{ justifySelf: "flex-end" }}></View>
      </View>
    </View>
  );
};
export default AvatarBox;

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  AvatarOuterContainer: {
    width: wp("100%"),
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#a0e7e1",
    borderBottomRightRadius: 70,
    padding: wp("5%"),
  },
  AvatarContainer: {
    backgroundColor: "#fff",
    borderRadius: 200,
    width: hp("25%"),
    height: hp("25%"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  editContainer: {
    position: "absolute",
    display: "flex",
    right: 0,
    bottom: 0,
    width: hp("5%"),
    height: hp("5%"),
    backgroundColor: "#fff",
    borderRadius: 100,
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 0.3
  },
  editAvatar: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  input: {
    marginTop: 15,
    borderWidth: 0.2,
    width: wp("40%"),
    padding: 3,
  },
});
