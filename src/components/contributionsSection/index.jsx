import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryPie } from "victory-native";
const ContributionsSection = () => {
  graphicData = [
    { y: 25, x: 'Tech'},
    { y: 25, x: 'Operations'},
    { y: 25, x: 'Content'},
    { y: 25, x: 'Creative'},
    ]
    graphicColor = ['#0066cc', '#00e6e6', '#b3edff', '#00b3b3']
    return (
      <View style={styles.titleText,styles.VictoryPie}>
          <Text style={{right:'10%',fontSize:'30',fontFamily: "Arial",color: 'black',}} >Contributions</Text>
          <VictoryPie
        data={graphicData}
        width={250}
        height={250}
        innerRadius={70}
        style={{labels: {fill: 'black', fontSize: 16, padding: 18,}, }}
        colorScale={graphicColor}
        /> 
        <Text style={{position: 'absolute',top: 150,left:'22%',color: '#808080',}}> Overall Rank</Text>
        <Text style={{position: 'absolute',top: 165,left:'30%',color: '#000000',fontWeight: "bold",}}> 68</Text>
      </View>
    
    );
};
const styles = StyleSheet.create({
VictoryPie: {marginTop:400}});
export default ContributionsSection;

