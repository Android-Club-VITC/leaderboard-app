import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Appearance
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

function Socialsectionbox({ name, iconname, editable, setSocials}) {
  const handleEdit = (v) => {
    setSocials((s) => {
      return { ...s, [iconname]: v };
    });
  };

  const colorScheme = Appearance.getColorScheme();
  const themeStyle = colorScheme === 'light' ? styles.lightThemeColor : styles.darkThemeColor;
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeTextColor : styles.darkThemeTextColor;
  const themeContainerStyle = colorScheme === 'light' ? styles.lightContainerColor : styles.darkContainerColor;

  return (
    <View style={[styles.item,themeContainerStyle]}>
      <View style={styles.itemLeft}>
        <View style={[styles.circle,themeStyle]}>
          <FontAwesome5
            // style={{ marginLeft: wp("2.3%") }}
            name={iconname}
            size={hp("3.5%")}
            style={themeTextStyle}
          />
        </View>
      </View>
      <View style={styles.itemRight}>
        <Text style={[styles.itemText,themeTextStyle]}>{iconname.toUpperCase()}</Text>
        {!editable ? (
          <Text style={[styles.itemSubText,themeTextStyle]}>{name}</Text>
        ) : (
          <TextInput
            style={styles.input}
            onChangeText={handleEdit}
            value={name}
            placeholder={`enter ${iconname}`}
          />
        )}
      </View>
    </View>
  );
}
export default function SocialSection({
  linkedin,
  instagram,
  discord,
  github,
  handleEdit,
  showEdit=true
}) {
  const colorScheme = Appearance.getColorScheme();
  const themeStyle = colorScheme === 'light' ? styles.lightThemeColor : styles.darkThemeColor;
  const themeTextStyle = colorScheme === 'light' ? styles.lightThemeTextColor : styles.darkThemeTextColor;

  const [socials, setSocials] = useState({
    discord,
    instagram,
    linkedin,
    github,
  });
  const [editable, setEditable] = useState(false);

  if(showEdit) {
  const handleClose = () => {
    setSocials({
      linkedin,
      instagram,
      discord,
      github,
    });

    setEditable(false);
  };

  useEffect(() => {
    if (!editable) {
      if (
        socials.linkedin != linkedin ||
        socials.discord != discord ||
        socials.instagram != instagram ||
        socials.github != github
      ) {
        handleEdit(socials);
      }
    }
  }, [editable]);
  }
  return (
    <View style={[styles.container,themeStyle]}>
      <View style={styles.header}>
        <Text style={[styles.title,themeTextStyle]}>Social</Text>
        <View
          style={{
            flexDirection: "row",
            width: wp("20%"),
            justifyContent: editable ? "space-between" : "flex-end",
          }}
        >
          {editable && showEdit && (
            <TouchableOpacity
              onPress={() => handleClose()}
              underlayColor="#fff"
              style={{ paddingLeft: 10 }}
            >
              <Ionicons
                // style={{ marginLeft: wp("2.3%") }}
                name={"close-outline"}
                size={hp("3%")}
                style={themeTextStyle}
              />
            </TouchableOpacity>
          )}
          {showEdit && <TouchableOpacity
            onPress={() => setEditable(!editable)}
            underlayColor="#fff"
          >
            <Ionicons
              // style={{ marginLeft: wp("2.3%") }}
              name={editable ? "checkmark-outline" : "create-outline"}
              size={hp("3%")}
              style={themeTextStyle}
            />
          </TouchableOpacity>}
        </View>
      </View>
      <View style={styles.itembox}>
        <Socialsectionbox
          name={discord}
          iconname="discord"
          editable={editable & showEdit}
          setSocials={setSocials}
        />
        <Socialsectionbox
          name={instagram}
          iconname="instagram"
          editable={editable & showEdit}
          setSocials={setSocials}
        />
        <Socialsectionbox
          name={linkedin}
          iconname="linkedin"
          editable={editable & showEdit}
          setSocials={setSocials}
        />
        <Socialsectionbox
          name={github}
          iconname="github"
          editable={editable & showEdit}
          setSocials={setSocials}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp("5%"),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: hp("2%"),
  },
  title: {
    textAlign: "left",
    fontSize: hp("3%"),
    paddingLeft: wp("4%"),
    // paddingBottom: hp("5%"),
  },
  links: {
    paddingTop: hp("2%"),
  },
  link: {
    paddingVertical: hp("2%"),
    fontSize: hp("2.5%"),
    fontWeight: "bold",
    backgroundColor: "#e6fffb",
    borderBottomStartRadius: hp("1%"),
  },
  itembox: {
    display: "flex",
    borderRadius: 15,
  },
  item: {
    display: "flex",
    backgroundColor: "#f0fffd",
    borderRadius: 10,
    padding: wp("4%"),
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'space-between',
    marginBottom: hp("1%"),
  },
  itemLeft: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  itemRight: {
    flex: 2,
  },
  circle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: hp("5%"),
    height: hp("5%"),
    // backgroundColor: "#fff",
    // opacity: 0.8,
    borderRadius: hp("50%"),
  },
  itemText: {
    maxWidth: wp("80%"),
    fontSize: hp("2%"),
    fontWeight: "bold",
  },
  itemSubText: {
    fontWeight: "200",
  },
  input: {
    borderWidth: 0.0,
    width: wp("40%"),
    padding: 3,
  },
  lightThemeTextColor: {
    color: "#000000"
  },
  darkThemeTextColor: {
    color: "#ffffff"
  },
  lightThemeColor: {
    backgroundColor: "#ffffff",
  },
  darkThemeColor: {
    backgroundColor: "#182C61"
  },
  lightThemeColor2: {
    backgroundColor: "#ffffff",
  },
  darkThemeColor2: {
    backgroundColor: "#ffffff"
  },
  lightContainerColor: {
    backgroundColor: "#7fffbd"
  },
  darkContainerColor: {
    backgroundColor: "#3B3B98"
  }
});
