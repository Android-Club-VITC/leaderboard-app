import React from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { faUserCircle, faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';



const AvatarBox = () => {
    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.topColourView} />
            <SafeAreaView style={styles.AvatarContainer}>
                <FontAwesomeIcon icon={faUserNinja} size={wp('40%')} color={'black'} />
                <FontAwesomeIcon icon={faUserCircle} size={wp('10%')} style={styles.userCircleContainer} />
            </SafeAreaView>
        </SafeAreaView>
    )
}
export default AvatarBox;


const styles = StyleSheet.create({
    AvatarContainer: {

        width: wp('100%'),
        flexDirection: 'column',
        flex: 0.3,
        justifyContent: "space-around",
        alignItems: 'center',

        backgroundColor: '#a0e7e1',
        borderBottomRightRadius: 40,
        padding: wp('3%')



    },
    topColourView: {
        flex: 0.06,
        backgroundColor: "#78ddd4"
    },

    container: {
        flex: 1,
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, 
    },

    userCircleContainer: {
        alignSelf: 'flex-end',
        right: wp('10%'),
        color: 'black',
        backgroundColor: 'white',
        borderRadius: wp('5%')
    }
}
)