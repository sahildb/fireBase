import {StyleSheet, Text, View,ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
    const unsubscribe =  auth().onAuthStateChanged(user => {
        const routName = user !== null ? 'HomePage' : 'LoginPage';
        unsubscribe()
        navigation.dispatch(StackActions.replace(routName));
      });

  
    },900);
  }, []);
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
     <ActivityIndicator size="large" />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
