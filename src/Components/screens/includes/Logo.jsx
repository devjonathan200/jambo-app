import React from 'react';
import {Text} from "react-native";
import { colors } from '../../Constants';

const Logo = () => {
    return (
        <Text  style={{color: colors.appRed, fontSize: 24, fontFamily: 'Montserrat-Bold', top: 37}}>Congo
             <Text style={{color: colors.appMainColor}}>News</Text>
        </Text>
    )
}

export default Logo;
