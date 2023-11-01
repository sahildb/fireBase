import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../Screens/Main';
import AddNewUser from '../Screens/AddNewUser';
import UpdateUser from '../Screens/UpdateUser';

const Stack = createNativeStackNavigator();
const DatabaseNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AddNewUser" component={AddNewUser} />
        <Stack.Screen name="UpdateUser" component={UpdateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DatabaseNavigation;

const styles = StyleSheet.create({});
