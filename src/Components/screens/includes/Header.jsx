import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput} from "react-native";
import { colors, icons, globalStyles } from '../../Constants';

// Custom modules
import Profile from "../../assets/images/profile.jpg";
import Logo from './Logo';
import MenuIcon from './MenuIcon';

const Header = () => {

    const toggleDrawer = () => {
        console.log('opening drawer');
    }
    return (
        <View style={styles.header}>
            <View style={styles.cardHeader01}>
                <Logo />
            </View>
            <View style={styles.cardHeader02}>
                <MenuIcon />
            </View>
            <View style={styles.cardHeader03}></View>
            <View style={styles.searchContainer}>
                {/*<icons.MaterialIcons name={"search"} style={styles.searchIcon} />*/}
            </View>
         </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 220,
        position: 'relative',
        backgroundColor: "transparent",
        elevation: 20,
        backgroundColor: colors.appMainColor
    },

    searchContainer: {
        width: 60,
        height: 50,
        position: 'absolute',
        bottom: 0,
        zIndex: 20,
        backgroundColor: "transparent",
        ...globalStyles.centeredContent,
    },

    searchIcon: {
        fontSize: 30,
        color: '#535353'
    },

    container: {
        flex: 1
    },

    cardHeader01: {
        width: "80%",
        height: 170,
        backgroundColor: colors.appYellow,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
        ...globalStyles.padding
    },

    cardHeader02: {
        width: "50%",
        height: 120,
        backgroundColor: colors.appMainColor,
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 20,
        ...globalStyles.centeredContent,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        paddingRight: 20,
    },

    cardHeader03: {
        width: "70%",
        height: 220,
        backgroundColor: colors.appRed,
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
    },
});

export default Header;
