import React from 'react';
import {View, Image} from "react-native";
import { colors } from '../../Constants';
// custom module
import Profile from "../../assets/images/profile.jpg";

const Avatar = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={Profile} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.appWhite,
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#fff'
    },

    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    }
});

export default Avatar;
