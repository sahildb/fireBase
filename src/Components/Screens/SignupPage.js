import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firebase from 'firebase/compat/app';
import Colors from '../../Colors';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');

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
const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigation = useNavigation();
  const handleSignup = async () => {
    //console.log('firebase',firebase);
    try {
      if (email.length > 0 && password.length > 0 && name.length > 0) {
        const response = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        const userData = {
          id: response.user.uid,
          name: name,
          email: email,
        };
        await firestore()
          .collection('users')
          .doc(response.user.uid)
          .set(userData);
        await auth().currentUser.sendEmailVerification();
        await auth().signOut();
        Alert.alert('Please Verify Your Email Check Out Link In Your Inbox');
        navigation.navigate('LoginPage');
      } else Alert.alert('Please Enter Value');

      //  firebase
      //   .auth()
      //   .createUserWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.log('errors', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.nameTxt}>Signup Page</Text>
      <View style={[styles.card, styles.elevationBox]}>
        <View style={{padding: 20}}>
          <Text style={styles.nameText}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder=" Enter Your Name "
            placeholderTextColor={Colors.Black}
            value={name}
            onChangeText={val => setName(val)}
            autoCapitalize="none"
          />
          <Text style={styles.emailText}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder=" Enter Your Email "
            placeholderTextColor={Colors.Black}
            value={email}
            onChangeText={val => setEmail(val)}
            autoCapitalize="none"
          />
          <Text style={styles.passwordText}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder=" Enter Your Password"
            placeholderTextColor={Colors.Black}
            value={password}
            onChangeText={val => setPassword(val)}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => handleSignup()}>
            <Text style={styles.btnText}>Signup </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GRAY,
  },
  nameTxt: {
    fontSize: RFValue(20),
    marginBottom: RFValue(20),
    color: Colors.White,
    fontFamily: 'Montserrat-Bold',
  },
  input: {
    borderRadius: RFValue(15),
    borderWidth: RFValue(2),
    padding: RFValue(15),
    marginTop: RFValue(10),
  },
  btnAdd: {
    backgroundColor: Colors.GRAY,
    width: RFPercentage(20),
    alignItems: 'center',
    padding: RFValue(10),
    borderRadius: RFValue(50),
    marginTop: RFValue(20),
    alignSelf: 'center',
  },
  btnText: {
    color: Colors.White,
    fontSize: RFValue(18),
  },
  card: {
    width: width - 40,
    borderRadius: RFValue(20),

    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowColor: 'grey',
    shadowRadius: 1,
    backgroundColor: 'white',
  },
  elevationBox: {
    elevation: 50,
    shadowColor: Colors.Black,
  },
  nameText: {
    fontSize: RFValue(18),
    marginLeft: RFValue(5),
    color: Colors.GRAY,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: RFValue(18),
    marginLeft: RFValue(5),
    marginTop: RFValue(10),
    color: Colors.GRAY,
    fontWeight: 'bold',
  },
  passwordText: {
    fontSize: RFValue(18),
    marginLeft: RFValue(5),
    marginTop: RFValue(10),
    color: Colors.GRAY,
    fontWeight: 'bold',
  },
});
