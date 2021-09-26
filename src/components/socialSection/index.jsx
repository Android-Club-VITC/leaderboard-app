import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesome5 } from '@expo/vector-icons'; 

const socialarr = [ 
  {
    "name":"Discord",
    "iconname":"discord",
  },
  {
    "name":"Instagram",
    "iconname":"instagram",
  },
  {
    "name":"LinkedIn",
    "iconname":"linkedin",
  },
  {
    "name":"Facebook",
    "iconname":"facebook",
  }
]

function Socialsectionbox({name, iconname}) {
  return(
    <View style={styles.item}>
    <View style={styles.itemLeft}>
     <View style={styles.circle}>
       <FontAwesome5 style={{marginLeft:wp('2.3%')}} name={iconname} size={24} color="black" />
     </View>
    </View>
    <View style={styles.itemRight}>
     <Text style={styles.itemText}>{name}</Text>
    </View>
   </View>
  )
}
export default function SocialSection (){
  return(
    <View style={styles.header}>
      <Text style={styles.title}>Social</Text>
      {/* {socialarr.map((obj,i)=>{
        <Socialsectionbox name={obj.name} iconname={obj.iconname} />
      })} */}
    <View style={styles.itembox}>
       <Socialsectionbox name="Discord" iconname="discord" />
       <Socialsectionbox name="Instagram" iconname="instagram" />
       <Socialsectionbox name="LinkedIn" iconname="linkedin" />
       <Socialsectionbox name="Facebook" iconname="facebook" />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height: hp('10%'),
    paddingTop:hp('10%'),
    paddingHorizontal:wp('10%'),
  },
  title:{
    textAlign:'left',
    fontSize: hp('4%'),
    paddingBottom: hp('5%')
  },
  links:{
    paddingTop: hp('2%'),
  },
  link:{
    paddingVertical: hp('2%'),
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    backgroundColor: '#e6fffb',
    borderBottomStartRadius: hp('1%'),
  },
  itembox:{
    display:'flex',
    backgroundColor: '#f0fffd',
    borderRadius: 10,
  },
  item: {
    display:'flex',
    backgroundColor: '#f0fffd',
    borderRadius: 10,
    padding: wp('10%'),
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: hp('1%'),
  },
  itemLeft: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
  itemRight:{
    flex:2,
    
  },
  circle: {
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    width: wp('10%'),
    height: hp('4.8%'),
    backgroundColor: '#d4faf5',
    opacity: 0.8,
    borderRadius: hp('50%'),
    marginRight:'auto',
  },
  itemText: {
    maxWidth: wp('80%'),
    fontSize: hp('2.5%'),
  },
  
});