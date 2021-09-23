import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryPie } from "victory-native";


const ContributionsSection = () => {
  graphicData: [
    { y: 10, x: '5%'},
    { y: 90, x: '90%'},
    { y: 50, x: '50%'},
    { y: 20, x: '20%'},
    { y: 70, x: '70%'},
    ]

    return (
      <View style={styles.container}>
          <Text style={[styles.titleText]} >Contributions</Text>
          <VictoryPie
        data={this.state.graphicData}
        width={250}
        height={250}
        innerRadius={50}
        style={{
        labels: {
        fill: 'white', fontSize: 15, padding: 7,}, }}
        /> 

      </View>
    
    );
};
const styles = StyleSheet.create({
  container: {
    marginRight:100,
  },
  titleText: {
    color: 'black',    
    fontSize: 30,
    fontFamily: "Arial",
    
    
  },
  
});
export default ContributionsSection;

