import React from 'react';
import {TouchableOpacity, StyleSheet} from "react-native";
import { icons,globalStyles, colors } from '../../Constants';

const MenuIcon = () => {
    // toggle Drawer navigator
    const toggleDrawer = () => {
        alert('hello there');
    }
    
    return (
        <TouchableOpacity style={styles.menuBtn} onPress={toggleDrawer}>
             <icons.MaterialIcons style={styles.menuIcon} name={'menu'} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    menuBtn: {
        top: globalStyles.spacing
    },

    menuIcon: {
        color: colors.appWhite,
        fontSize: 40,
    },
})

export default MenuIcon;
