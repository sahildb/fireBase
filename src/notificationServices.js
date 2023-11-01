import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';
import { getMessaging } from "firebase/messaging";

import messaging from '@react-native-firebase/messaging';
const reactNativeFirebaseConfig = {
    apiKey: 'AIzaSyCpGLa-8_P6Ufn3jHX4P89otVK6SksE1hE',
    authDomain: 'fir-b0be9.firebaseapp.com',
    databaseURL: 'https://fir-b0be9-default-rtdb.firebaseio.com',
    projectId: 'fir-b0be9',
    storageBucket: 'fir-b0be9.appspot.com',
    GCM_SENDER_ID: '56175851349',
    appId: '1:56175851349:ios:0f4e1f7a06ba24d64161dc',
  };
  
 firebase.initializeApp(reactNativeFirebaseConfig);
//    const msg = getMessaging(app)
export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission(); 
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken()
  }
}


export const getFcmToken = async() => {
    try {
        // const fcmToken = await messaging().getToken()
        // console.log('fcmToken',fcmToken);
        const fcmTokenIos = await firebase.messaging().getToken()
        console.log('fcmTokenIos',fcmTokenIos);
    } catch (error) {
        console.log('tokerError',error);
    }
}