import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
// import { Font } from "expo"
import { useFonts } from '@use-expo/font';
import AppLoading from 'expo-app-loading';
import { NativeBaseProvider, Box } from 'native-base';
// custom imports
import Launch from './src/Components/screens/Launch';
// import Home from './src/Components/screens/Home';
import Playground from "./src/Components/screens/Playinground";
import HomeScreen from "./src/Components/screens/HomeScreen";
import CategoriesScreen from './src/Components/screens/CategoriesScreen';

const customFonts = {
  'Poppins-Regular': require('./src/Components/assets/fonts/Poppins-Regular.ttf'),
  'Poppins-Light': require('./src/Components/assets/fonts/Poppins-Light.ttf'),
  'Poppins-Medium': require('./src/Components/assets/fonts/Poppins-Medium.ttf'),
  'Poppins-SemiBold': require('./src/Components/assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-Bold': require('./src/Components/assets/fonts/Poppins-Bold.ttf'),
  'Montserrat-Bold': require('./src/Components/assets/fonts/Montserrat-Bold.ttf'),
}

const App = () => {
  const Stack = createStackNavigator();

  let [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <NativeBaseProvider>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="launch">
            <Stack.Screen options={{ headerShown: false }} name="launch" component={Launch} />
            <Stack.Screen options={{ headerShown: false }} name="home" component={HomeScreen} />
            <Stack.Screen options={{headerShown: false}} name="Playground" component={Playground} />
            <Stack.Screen options={{headerShown: false}} name="category" component={CategoriesScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>

  );
}

export default App;
