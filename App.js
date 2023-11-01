import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import GetData from './src/GetData';
import Todos from './src/Todos';
import LoginPage from './src/Components/Screens/LoginPage';
import MainNavigator from './src/Components/Navigations/MainNavigator';
import AddData from './src/Components/Screens/SignupPageIos';
import UploadFiles from './src/Components/Screens/UploadFiles';
import MainNavigatorIos from './src/Components/Navigations/MainNavigatorIos';
import {getFcmToken, requestUserPermission} from './src/notificationServices';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Colors from './src/Colors';
import PushNotificationAndroid from './src/PushNotificationAndroid';
import AsyncStorage from './src/Components/Screens/AsyncStorage';
import AsyncNavigators from './src/Components/Navigations/AsyncNavigator';
import GoogleLogin from './src/Components/Screens/GoogleLogin';
import DatabaseNavigation from './src/Database/Navigation/DatabaseNavigation';
import DeepLink from './src/Deeplinking/DeepLink';
import GoogleLoginWOF from './src/Components/Screens/GoogleLoginWOF';
import AppleLoginDemo from './src/AppleLogin/AppleLoginDemo';
const App = () => {
  // useEffect(() => {
  // requestUserPermission()
  // getFcmToken()
  // }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppleLoginDemo />
      {/* <GoogleLoginWOF /> */}
      {/* <DeepLink /> */}
      {/* <DatabaseNavigation /> */}
      {/* <GoogleLogin /> */}
      {/* <AsyncNavigators/> */}
      {/* <PushNotificationAndroid /> */}
      {/* <MainNavigatorIos /> */}
      {/* <UploadFiles/> */}
      {/* <MainNavigator/> */}
      {/* <AddData/> */}
      {/* <Todos /> */}
      {/* <LoginPage/> */}
      {/* <GetData /> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
