import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from '../Screens/LoginPage';
import HomePage from '../Screens/HomePage';
import SignupPage from '../Screens/SignupPage';
import SplashScreen from '../Screens/SplashScreen';
import MobileVerifyScreen from '../Screens/MobileVerifyScreen';
import UploadFiles from '../Screens/UploadFiles';
import AddData from '../Screens/SignupPageIos';
import LoginPageIos from '../Screens/LoginPageIos';
const Stack = createNativeStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="mobileverifty"
          component={MobileVerifyScreen}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        
        <Stack.Screen
          name="uploadFile"
          component={UploadFiles}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
