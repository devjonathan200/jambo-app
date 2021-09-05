import React from 'react';
import {View, Text, AppState, StyleSheet, StatusBar, FlatList, Animated, TouchableOpacity, Alert} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect } from 'react/cjs/react.production.min';
import { colors, icons, measurements, Posts } from '../Constants';

// custom module
import Header from './includes/Header';
import Slider from './includes/Slider';
import BannerSlider from "./includes/BannerSlider";
import Slider01 from "../assets/images/image02.jpg";

const Home = () => {
	// useEffect(() => {
	// 	AppState.addEventListener('change', appStateChange);
	// }, []);
	
	// const appStateChange = (currentAppState) => {
	// 	console.log('App sate', appState);
	// }
    //
	const showAlert = () => {
		Alert.alert('Update is here', 'A new update of the Jambo is here, please update', [
			{
				text: 'Cancel',
				onPress: () => console.log('You have just canceled '),
				style: 'Destructive'
			},

			{
				text: 'Update',
				onPress: () => console.log('Updating please wait')
			}
		]);
	}
    return (
        <View style={styles.appContainer}>
            <StatusBar hidden={false} barStyle="light-content" backgroundColor={colors.appMainColor} />
            <Header />
            <ScrollView>
                <View style={styles.sliderWrapper}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={Posts}
                        renderItem={({item, index}) => {
                            return (
                                <BannerSlider key={index} title={item.title} image={Slider01} timeStamp={item.timeStamp} />
                            )
                        }}
                    />
                </View>

                {/*<ScrollView style={{borderWidth: 2, borderColor: 'red', height: 200}}>*/}
                {/*    <BannerSlider title={"HOW TO INSTALL LINUX ON A SURFACE PRO 3"} image={Slider01} timeStamp={"10-20-2021"} />*/}
                {/*    <BannerSlider title={"HOW TO INSTALL LINUX ON A SURFACE PRO 3"} image={Slider01} timeStamp={"10-20-2021"} />*/}
                {/*    <BannerSlider title={"HOW TO INSTALL LINUX ON A SURFACE PRO 3"} image={Slider01} timeStamp={"10-20-2021"} />*/}
                {/*</ScrollView>*/}

                <View style={styles.content}>
                    <View style={styles.sectionTitleContainer}>
                        <Text style={styles.sectionTitle}>Hot News</Text>
                        <View style={styles.line} />
                        <Text style={styles.viewAll}>View All</Text>
                    </View>
                </View>
                <View>
                <TouchableOpacity onPress={showAlert}>
                        <Text>Update is here</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
    },

    sliderWrapper: {
        marginTop: 20,
        borderWidth: 1
    },

    content: {
        borderWidth: 1,
        marginTop: 20,
        paddingHorizontal: 10
    },

    sectionTitleContainer: {
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    sectionTitle: {
        color: colors.appBlack,
        fontSize: 20,
    },
    line: {
        width: 150,
        borderBottomWidth: 1,
        borderColor: colors.appBlack,
        marginLeft: 20
    },
    viewAll: {
        color: colors.appRed,
        fontSize: 10,
        
    }
});

export default Home;
