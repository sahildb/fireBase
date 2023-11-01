import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncLoginPage from '../Screens/AsyncLoginPage';
import AsyncAddContact from '../Screens/AsyncAddContact';
import Intro from '../Screens/Intro';
import AsyncContact from '../Screens/AsyncContact';
import HomeHeadr from '../Common/HomeHeadr';
import ContactHeader from '../Common/ContactHeader';
import Colors from '../../Colors';
import AddContactHeader from '../Common/AddContactHeader';

const Stack = createNativeStackNavigator();
const AsyncNavigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerBackTitleVisible: false}}>
        {/* <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="AsyncLoginPage"
          component={AsyncLoginPage}
          options={{headerShown: false, headerBackTitleVisible: false}}
        />
        <Stack.Screen
          name="AsyncContact"
          component={AsyncContact}
          options={{
            headerShown: false,
            // headerTitle: 'Contact Page',
            // headerRight: props => <ContactHeader {...props} />,
            // headerBackTitleVisible: false,
            // headerTintColor: Colors.GRAY,
          }}
        />
        <Stack.Screen
          name="AsyncAddContact"
          component={AsyncAddContact}
          options={{
            headerShown: false,
            // headerTitle: 'Add Contact Page',
            // headerRight: props => <AddContactHeader {...props} />,
            // headerBackTitleVisible: false,
            // headerTintColor: Colors.GRAY,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AsyncNavigators;

const styles = StyleSheet.create({});
