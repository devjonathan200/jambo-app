import React from 'react';
import {View, Text, StyleSheet, Image} from "react-native";
import {colors, globalStyles} from "../../Constants";

import Slider01 from "../../assets/images/image02.jpg";

const BannerSlider = ({title, timeStamp, image}) => {
    return (
        <View style={{border: 3, borderColor: 'red', position: 'relative'}}>
            <View style={styles.image}>
                <Image source={image}  style={{width: "100%", height: "100%"}} />
            </View>
            <View style={styles.overlay}>
                <Text style={[globalStyles.AppTitle, {...styles.title}]}>{title}</Text>
                <View style={styles.timeBadge}>
                    <Text style={globalStyles.Light}>{timeStamp}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: colors.appRgba,
        zIndex: 20,
    },

    image: {
      width: "100%",
      height: 400,
        position: 'relative'
    },

    title: {
        marginTop: 238,
        marginLeft: globalStyles.spacing
    },

    timeBadge: {
        width: 115,
        height: 35,
        backgroundColor: colors.appRed,
        position: 'absolute',
        bottom: 20,
        left: 20,
        ...globalStyles.centeredContent,
        ...globalStyles.badgeRadius,
    },

    underline: {
        width: 250,
        borderWidth: 2,
        borderColor: colors.appMainColor,
        position: "absolute",
        right: 0,
        bottom: 80
    }
});

export default BannerSlider;