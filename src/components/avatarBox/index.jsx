import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Appearance,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { SvgUri } from "react-native-svg";
import { useNavigation } from "@react-navigation/core";

const AvatarBox = ({
  name,
  profilePicture,
  handleEdit,
  handlePfpEdit,
  showEdit = true,
}) => {
  const [editName, setEditName] = useState(name);
  const [editable, setEditable] = useState(false);
  const colorScheme = Appearance.getColorScheme();
  const navigation = useNavigation();

  const themeTextStyle =
    colorScheme === "light"
      ? styles.lightThemeTextColor
      : styles.darkThemeTextColor;
  const themeStyle =
    colorScheme === "light"
      ? styles.lightContainerColor2
      : styles.darkContainerColor2;
  const themeContainerStyle =
    colorScheme === "light"
      ? styles.lightContainerColor
      : styles.darkContainerColor;

  if (showEdit) {
    useEffect(() => {
      if (!editable && editName != name) {
        handleEdit(editName);
      }
    }, [editable]);
  }
  const handleClose = () => {
    setEditName(name);
    setEditable(false);
  };
  return (
    <View style={[styles.container, themeStyle]}>
      <View style={[styles.AvatarOuterContainer, themeContainerStyle]}>
        <View
          style={{
            width: wp("100%"),
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingTop: 5,
            paddingRight: 15,
          }}
        >
          {showEdit ? (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back-outline"
                size={hp("4%")}
                style={[themeTextStyle, { paddingLeft: "4%" }]}
              />
            </TouchableOpacity>
          ) : null}

          <View
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {editable && showEdit && (
              <TouchableOpacity
                onPress={() => handleClose()}
                underlayColor="#fff"
              >
                <Ionicons
                  name={"close-outline"}
                  size={hp("3.5%")}
                  style={[themeTextStyle]}
                />
              </TouchableOpacity>
            )}
            {showEdit && (
              <TouchableOpacity
                onPress={() => setEditable(!editable)}
                underlayColor="#fff"
                style={{ paddingLeft: 10 }}
              >
                <Ionicons
                  name={editable ? "checkmark-outline" : "create-outline"}
                  size={hp("3.5%")}
                  style={[themeTextStyle]}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={styles.AvatarContainer}>
          <SvgUri uri={profilePicture} style={styles.avatar} />
          {showEdit && (
            <View style={styles.editContainer}>
              <TouchableOpacity onPress={handlePfpEdit}>
                <Ionicons
                  name="repeat-outline"
                  size={hp("3%")}
                  color="#000"
                  style={{ textAlign: "center" }}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
        {!editable ? (
          <Text style={[styles.nameText, themeTextStyle]}>{name}</Text>
        ) : (
          <TextInput
            style={[styles.input, themeTextStyle]}
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
    // backgroundColor: "#a0e7e1",
    borderBottomRightRadius: 70,
    padding: wp("5%"),
    elevation: 15,
  },
  AvatarContainer: {
    backgroundColor: "#fff",
    borderRadius: 20,
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
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0.3,
  },
  editAvatar: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  input: {
    marginTop: 15,
    width: wp("40%"),
    padding: 3,
    textAlign: "center",
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0.3,
  },
  nameText: {
    marginTop: 10,
    maxWidth: wp("80%"),
    fontSize: hp("3%"),
    fontWeight: "bold",
  },
  iconColor: {},
  lightThemeTextColor: {
    color: "#000000",
  },
  darkThemeTextColor: {
    color: "#ffffff",
  },
  lightContainerColor: {
    backgroundColor: "#64e8a6",
  },
  darkContainerColor: {
    backgroundColor: "#3B3B98",
  },
  lightContainerColor2: {
    backgroundColor: "#ffffff",
  },
  darkContainerColor2: {
    backgroundColor: "#182C61",
  },
});
