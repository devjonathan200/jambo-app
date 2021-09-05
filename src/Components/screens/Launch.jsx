import React from 'react';
import {View, Text, StyleSheet, StatusBar, ImageBackground, Dimensions, TouchableOpacity} from "react-native";

// custom modules
import LaunchBG from "../assets/images/Jambo.png";
import { colors, icons } from '../Constants';

const Launch = ({navigation}) => {
    return (
        <ImageBackground style={styles.launchSize} source={LaunchBG}>
                <View style={styles.launcher}>
                    <StatusBar hidden={true} />
                    <Text style={styles.appName}>JAMBO</Text>
                </View>

                <View style={styles.startButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.startButton}>
                        <Text style={{color: colors.appYellow, fontWeight: 'bold', fontSize: 20}}>Start</Text>
                        <icons.Fontisto style={styles.appIcon} name="angle-dobule-right" />
                    </TouchableOpacity>
                </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    launcher: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    appName: {
        color: colors.appYellow,
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 150
    },

    launchSize: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width
    },

    startButtonContainer: {
        flex: 1,
    },

    startButton: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 70,
        width: 250,
        paddingLeft: 130,
        backgroundColor: colors.appBlack,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        elevation: 6,
    },

    appIcon: {
        color: colors.appYellow,
        fontSize: 20,
        marginTop: 2,
        marginLeft: 15
    }
})

export default Launch;
