import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPageIos from '../Screens/LoginPageIos';
import SignupPageIos from '../Screens/SignupPageIos';
import HomePageIos from '../Screens/HomePageIos';
import {RFValue} from 'react-native-responsive-fontsize';
import HomeHeadr from '../Common/HomeHeadr';
import Colors from '../../Colors';

const Stack = createNativeStackNavigator();
const MainNavigatorIos = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerBackTitleVisible:false,
          headerTitleStyle: {
            fontSize: RFValue(20),
          },
        }}>
        <Stack.Screen
          name="LoginPageIos"
          component={LoginPageIos}
          options={{headerShown: false,headerBackTitleVisible: false,}}
        />
        <Stack.Screen name="SignupPageIos" component={SignupPageIos} />
        <Stack.Screen
          name="HomePageIos"
          component={HomePageIos}
          options={{
            headerTitle: 'Home Page',
            headerRight: props => <HomeHeadr {...props} />,
            headerBackTitleVisible: false,
            headerTintColor: Colors.YANKEES_BLUE,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigatorIos;

const styles = StyleSheet.create({});
