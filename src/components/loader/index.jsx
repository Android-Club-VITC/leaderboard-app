import React from "react";
import './loader.css';
  
export default function loader(props) {
    return (
        <div>
            <div className='overlay'></div>
            <div className='absolute w-1/4 top-50 p-3 text-center left-50 bg-white border border-gray-400'>
                <div class='lds-roller'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>Loading</div>
            </div>
        </div>
    );
}

/*const Loader = () => {
    return (
        <View style={styles.loader}>
            <Text>I Am Loading</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center
    }
});
export default Loader;
*/