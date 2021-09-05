import React from 'react';
import {View, Text, StyleSheet, Image} from "react-native";
import { colors, icons, measurements } from '../../Constants';

const Slider = ({title, timeStamp, image}) => {
    return (
        <View style={styles.slider}>
            <Image style={styles.sliderIMG} source={image} />
            <View style={styles.overlay}>
                <View style={styles.postTitleContainer}>
                    <Text style={styles.postTitle}>{title}</Text>
                    <Text style={styles.timeStamp}><icons.AntDesign style={styles.icon} name="clockcircleo" />{" "} {timeStamp}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    slider: {
        width: 237,
        height: 180,
        // borderWidth: 1,
        borderRadius: measurements.radius,
        marginHorizontal: 10,
        position: 'relative'
    },

    sliderIMG: {
        width: '100%',
        height: '100%',
        borderRadius: measurements.radius
    },

    overlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: colors.appRgba,
        borderRadius: measurements.radius,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    postTitleContainer: {
        marginBottom: 30
    },

    postTitle: {
        color: colors.appWhite,
        // borderWidth: 1,
        textAlign: 'left',
        paddingLeft: 10,
        fontSize: 15
    },

    timeStamp: {
        color: colors.appYellow,
        fontSize: 10,
        flexDirection: 'column',
        paddingLeft: 10,
        marginTop: 6
    },

    icon: {
        color: colors.appYellow
    }

});

export default Slider;
