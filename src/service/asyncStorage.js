import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeToken = async  (t) => {
    try {
        await AsyncStorage.setItem("AC_TOKEN",t);
        return true;
    } catch(e) {
        console.log(e);
        return false;
    }
}

export const getToken = async () => {
    try {
        const t = await AsyncStorage.getItem("AC_TOKEN");
        return t;
    } catch(e) {
        console.log(e);
        return null;
    }
}

export const deleteToken = async () => {
    try {
        await AsyncStorage.removeItem("AC_TOKEN");
        return true;
    } catch(e) {
        console.log(e);
        return false;
    }
}