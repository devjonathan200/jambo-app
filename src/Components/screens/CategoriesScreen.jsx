import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { colors,globalStyles,icons } from '../Constants';
import Logo from './includes/Logo';
import MenuIcon from './includes/MenuIcon';

const CategoriesScreen = () => {
    return (
        <React.Fragment>
            <View style={styles.header}>
                <View style={styles.logoWrapper}>
                    <icons.MaterialCIcons style={styles.icon} name="keyboard-backspace" />
                    <Text style={styles.logo1}>Congo <Text style={styles.logo2}>News</Text></Text>
                </View>
                <View style={styles.iconWrapper}>
                    <icons.MaterialCIcons style={styles.icon} name="menu" />
                </View>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.search}></View>
            </View>
        </React.Fragment>

    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.appMainColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        paddingLeft: globalStyles.spacing
    },

    iconWrapper: {
        backgroundColor: colors.appRed,
        height: "100%",
        width: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },

    icon: {
        color: colors.appWhite,
        fontSize: 25
    },

    logo1: {
        color: colors.appRed,
        fontSize: 18,
        fontFamily: 'Montserrat-Bold'
    },

    logo2: {
        color: colors.appYellow
    },

    logoWrapper: {
        borderWidth: 0,
        width: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    searchContainer: {
        width:"100%",
        height: 60,
        backgroundColor: colors.appWhite
    }
});

export default CategoriesScreen;

