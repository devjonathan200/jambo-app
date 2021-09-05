import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {Dimensions} from 'react-native';


// custom image
import slider1 from "../assets/images/blog-1.jpg";
import slider2 from "../assets/images/blog-6.jpg";
import slider3 from "../assets/images/building-6.jpg";
import slider4 from "../assets/images/img_bg_3.jpg";

export const colors = {
    appRed: '#bd111f',
    appWhite: '#ffffff',
    appYellow: '#f8da46',
    appBlack: '#18234E',
    appMainColor: '#0082f4',
    appGray: '#707070',
    appGrayish: '#312d2d',
    appRgba: 'rgba(0,0,0,0.6)',
    appDark: "#000000"
}

export const icons = {
    AntDesign,
    Fontisto,
    MaterialIcons,
    MaterialCIcons
}

export const displayFlex = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
}

const Width = Math.round(Dimensions.get('window').width);

export const globalStyles = {
    padding: {
        paddingLeft: 20,
        paddingRight: 20,
    },

    spacing: 20,

    AppTitle: {
        fontSize: Width / 18,
        color: colors.appWhite,
        fontFamily: 'Montserrat-Bold'   
    },

    cardTitle: {
        fontSize: Width / 27,
        color: colors.appDark,
        fontFamily: 'Montserrat-Bold' 
    },

    categoryTitle: {
        fontSize: Width / 19,
        color: colors.appDark,
        fontFamily: 'Montserrat-Bold'
    },

    category: {
        marginTop: 30,
    },

    testingBorder: {
        borderWidth: 0
    },

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

    separator: {
        height: 20
    },

    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    flexWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    line: {
        borderBottomWidth: 0.4,
        borderColor: "#9a9a9a",
        width: 240,
        height: 2,
        top: 2
    },

    centeredContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    width: Width,

    text: {
        color: colors.appWhite,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: 'Poppins-Regular'
    },

    Light: {
        color: colors.appWhite,
        fontSize: 13,
        fontFamily: 'Poppins-Light'
    },

    image: {
        width: "100%",
        height: "100%"
    },

    badgeRadius: {
        borderTopLeftRadius: 7,
        borderBottomRightRadius: 7,
    },

    typography: {
        extraSmall: {
            fontSize: 12,
            fontFamily: 'Poppins-Light',
        }
    }
}

export const AppContainer = {

}

export const measurements = {
    radius: 15
}

export const Posts = [
    {
        id: "1",
        title: 'Joseph Kabila est revenue au congo avec son armees',
        timeStamp: '9 Nov',
        image: slider1
    },
    {
        id: "2",
        title: 'Tsisekedi went to talk to the minister of education',
        timeStamp: '13 Nov',
        image: slider2
    },
    {
        id: "3",
        title: 'The congolese army is getting ready to fight the rebels',
        timeStamp: '12 Nov',
        image: slider3
    },
    {
        id: "4",
        title: 'Bukavu is the best place in the whole of congo, ',
        timeStamp: '20 Nov',
        image: slider4
    },
]