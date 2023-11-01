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
import Colors from '../../Colors';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const {height, width} = Dimensions.get('screen');

const AsyncLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const saveEmailPass = async () => {
    try {
      await AsyncStorage.setItem('Email', email);
      await AsyncStorage.setItem('Password', password);
      navigation.navigate("AsyncContact")
      setEmail("")
      setPassword("")
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.nameTxt}>Login Page</Text>
      <View style={[styles.card, styles.elevationBox]}>
        <View style={{padding: 20}}>
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

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={styles.btnAdd}
              onPress={() => saveEmailPass()}>
              <Text style={styles.btnText}>Login </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AsyncLoginPage;

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
    fontFamily: 'Montserrat-Bold',
    color: Colors.White,
  },
  input: {
    borderRadius: RFValue(15),
    borderWidth: RFValue(2),
    padding: RFValue(15),
    marginTop: RFValue(10),
    fontFamily: 'Montserrat-Medium',
  },
  btnAdd: {
    backgroundColor: Colors.GRAY,
    width: RFPercentage(20),

    padding: RFValue(10),
    borderRadius: RFValue(50),
    marginTop: RFValue(20),
  },
  btnText: {
    color: Colors.White,
    fontSize: RFValue(18),
    alignSelf: 'center',
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
  emailText: {
    fontSize: RFValue(18),
    marginLeft: RFValue(5),
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
