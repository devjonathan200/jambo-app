import React from 'react';
import {View,Text, StyleSheet, Image} from "react-native";
import { colors, globalStyles } from '../../Constants';
import Slider01 from "../../assets/images/blog-6.jpg";

const CategoryCard = () => {
    return (
        <View style={styles.categoryCardWrapper}>
            <View style={styles.imageWrapper}>
                <Image source={Slider01} style={styles.image} />
                <View style={styles.overlay}>
                    <View style={styles.substr}>
                        <Text style={styles.title}>HOW TO HACK YOUR LIFE</Text>
                        <Text style={styles.time}>Mon 6-8-2021</Text>
                    </View>
                </View>
            </View>                                   
        </View>
    )
}

const radius = 20;

const styles = StyleSheet.create({
    categoryCardWrapper: {
        width: globalStyles.width / 2.2,
        height: 125,
        ...globalStyles.testingBorder,
        borderColor: 'red',
        borderTopLeftRadius: radius,
        borderBottomRightRadius: radius,
        marginRight: 10
    },

    imageWrapper: {
        width: "100%",
        height: "100%",
        ...globalStyles.testingBorder,
        borderColor: 'white',
        position: 'relative',
        borderTopLeftRadius: radius,
        borderBottomRightRadius: radius
    },

    image: {
        width: "100%",
        height:  "100%",
        borderTopLeftRadius: radius,
        borderBottomRightRadius: radius
    },

    substr: {
        width: "100%",
        paddingHorizontal: 10,
        marginTop: 17,
        height: 50,
        position: 'absolute',
        bottom: 27,
        left: 0,
        right: 0
    },

    title: {
       ...globalStyles.cardTitle,
       color: colors.appWhite,

    },

    time: {
        ...globalStyles.Light,
        color: colors.appYellow,
        marginTop: 5
    },

    overlay: {
        ...globalStyles.overlay,
        borderTopLeftRadius: radius,
        borderBottomRightRadius: radius
    }
});

export default CategoryCard;
