import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from "react-native";
import { colors, globalStyles } from '../../Constants';

const BtnTransparent = ({title, navigation}) => {
    return (
        <TouchableOpacity onPress={navigation} style={styles.btnWrapper}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}

const radius = 8;
const styles = StyleSheet.create({
    btnWrapper: {
        borderWidth: 0.7,
        borderColor: colors.appMainColor,
        backgroundColor: 'transparent',
        width: 80,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: radius,
        borderBottomRightRadius: radius,
        marginTop: 14,
    },

    btnText: {
        ...globalStyles.typography.extraSmall,
        color: colors.appMainColor,
    }
})

export default BtnTransparent;
