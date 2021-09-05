import React from 'react';
import {View, Text, FlatList, ScrollView, TouchableOpacity, Image, StyleSheet, Dimensions, SafeAreaView, StatusBar} from "react-native";
import {displayFlex, AppContainer, colors, globalStyles, Posts, icons} from "../Constants";
import Slider01 from "../assets/images/image02.jpg";
import BannerSlider from "./includes/BannerSlider";
import Slider from "./includes/Slider";
import Card from './includes/Card';
import Header from './includes/Header';
import CategoryTitle from './includes/CategoryTitle';
import CategoryCard from './includes/CategoryCard';
import BtnTransparent from './includes/BtnTransparent';

const HomeScreen = ({navigation}) => {

    return (

        <View style={{flex: 1}}>
            <StatusBar hidden />
            <Header />

            <ScrollView>
             <View style={styles.content}>
                     <View style={styles.banner}>
                        <BannerSlider title={"HOW TO INSTALL LINUX ON A SURFACE PRO 3"}
                         image={Slider01} timeStamp={"10-20-2021"} />
                    </View>

                    <View style={styles.mainSection}>
                        <View style={styles.categorySection}> 
                            <CategoryTitle title="What's up" />
                            <View style={{...globalStyles.separator}} />
                            <ScrollView  horizontal >
                                <View style={styles.categoriesWrapper}>
                                    <CategoryCard />
                                    <CategoryCard />
                                    <CategoryCard />
                                    <CategoryCard />
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.ArticlesContainer}>
                            <View style={styles.politics}>
                                <View style={{...globalStyles.category}}>
                                    <CategoryTitle title="Politics" />
                                    <View style={{...globalStyles.separator}} />
                                </View>
                                <View style={{...globalStyles.flexWrap}}>
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                </View>
                                <View style={{...globalStyles.flex}}> 
                                    <View style={styles.empty} />
                                    <BtnTransparent navigation={() => navigation.navigate('category')} title="View more" />
                                </View>
                            </View>

                            <View style={styles.economy}>
                                <View style={{...globalStyles.category}}>
                                    <CategoryTitle title="Economy" />
                                    <View style={{...globalStyles.separator}} />
                                </View>
                                <View style={{...globalStyles.flexWrap}}>
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                </View>
                                <View style={{...globalStyles.flex}}> 
                                    <View style={styles.empty} />
                                    <BtnTransparent navigation={() => navigation.navigate('category')} title="View more" />
                                </View>
                            </View>

                            <View style={styles.technology}>
                                <View style={{...globalStyles.category}}>
                                    <CategoryTitle title="Technology" />
                                    <View style={{...globalStyles.separator}} />
                                </View>
                                <View style={{...globalStyles.flexWrap}}>
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                </View>
                                <View style={{...globalStyles.flex}}> 
                                    <View style={styles.empty} />
                                    <BtnTransparent navigation={() => navigation.navigate('category')} title="View more" />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    banner: {
        height: 400,
        overflow: 'hidden'
    },

    menuBtn: {
        marginTop: 12,
        top: 30
    },

    content: {
        flex: 1,
        paddingBottom: 100,
        marginBottom: 20
    },

    mainSection: {
        marginTop: 40,
        paddingHorizontal: 16
    },

    categorySection: {
        marginBottom: 30
    },

    categoriesWrapper: {
        flexDirection: 'row',
    },

    politics: {
        
    }
});

export default HomeScreen;