import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const reactNativeFirebaseConfig = {
  apiKey: 'AIzaSyCpGLa-8_P6Ufn3jHX4P89otVK6SksE1hE',
  authDomain: 'fir-b0be9.firebaseapp.com',
  projectId: 'fir-b0be9',
  storageBucket: 'fir-b0be9.appspot.com',
  GCM_SENDER_ID: '56175851349',
  appId: '1:56175851349:ios:0f4e1f7a06ba24d64161dc',
};

firebase.initializeApp(reactNativeFirebaseConfig);
export const dataRef = firebase.database();
export default firebase;
