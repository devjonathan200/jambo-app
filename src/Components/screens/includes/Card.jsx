import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Slider01 from "../../assets/images/image02.jpg";
import { colors, globalStyles } from "../../Constants";

const Card = () => {
    return (
        <View style={styles.card}>
            <View style={styles.cardImage}>
                <View style={styles.badges}>
                    <Text style={styles.cardTime}>5-8-2021</Text>
                </View>
                <Image source={Slider01} style={globalStyles.image} />
            </View>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle}>
                    HOW TO INSTALL LINUX ON A SURFACE PRO 3
                </Text>
                <Text style={styles.cardSubstr}>
                    Hello today am gonna show you how 
                </Text>
            </View>
        </View>
    )
}

const Width = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    card: {
        width: globalStyles.width / 2.2,
        marginBottom: 12,
        elevation: 3,
        borderWidth: 0.4,
        borderColor: '#cecece'
    },

    cardImage: {
        width: "100%",
        height: 140,
        position: "relative"
    },

    cardText: {
        paddingHorizontal: 10,
        backgroundColor: colors.appWhite
    },

    cardTitle: {
        ...globalStyles.cardTitle,
        marginVertical: 17,

    },

    cardSubstr: {
        ...globalStyles.text,
        color: colors.appDark,
        marginBottom: 20
    },

    image: {
        width: "100%"
    },

    badges: {
        width: Width / 7,
        height: 20,
        position: "absolute",
        bottom: 5,
        right: 5,
        zIndex: 5,
        ...globalStyles.centeredContent,
        backgroundColor: colors.appMainColor,
        ...globalStyles.badgeRadius,

    },

    cardTime: {
        ...globalStyles.Light,
        color: colors.appWhite,
        fontSize: 10
    }
})

export default Card;
