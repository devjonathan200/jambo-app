import React from 'react';
import {View} from "react-native";

const HeaderCard = ({children, color, cardWidth, cardHeight}) => {
    return (
        <View style={{width: cardWidth, height: cardHeight, backgroundColor: color}}>
            {children}
        </View>
    );
};

export default HeaderCard