import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import { colors, globalStyles } from '../../Constants';

const CategoryTitle = ({title}) => {
    return (
        <View style={styles.categoryParent}>
            <Text style={styles.catTitle}>{title}</Text>
            <View style={{...globalStyles.line}} />
        </View>
    )
}

const styles = StyleSheet.create({
    categoryParent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },  

    catTitle: {
        ...globalStyles.categoryTitle
    },
})
export default CategoryTitle;
