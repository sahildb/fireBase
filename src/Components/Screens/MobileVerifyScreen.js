import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../Colors';
import auth from '@react-native-firebase/auth';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';

const MobileVerifyScreen = () => {
  const [num, setNum] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmData, setConfirmData] = useState('');
  const sendOtp = async () => {
    try {
        const mobileNum = '+91' + num;
        const response = await auth().signInWithPhoneNumber(mobileNum)
        setConfirmData(response)
        console.log('response',response);
        Alert.alert("Otp Is Sent Please Verify It..")
    } catch (error) {
      console.log('error', error);
    }
  };
  const submitOtp = async () => {
    try {
        const response = await confirmData.confirm(otp)
        console.log('res',response);
        Alert.alert("Your Number Is Verify")
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder=" Enter Your Phone Number"
        placeholderTextColor={Colors.Black}
        value={num}
        onChangeText={val => setNum(val)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.btnAdd} onPress={() => sendOtp()}>
        <Text style={styles.btnText}>Send</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder=" Enter Your OTP"
        placeholderTextColor={Colors.Black}
        value={otp}
        onChangeText={val => setOtp(val)}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.btnAdd} onPress={() => submitOtp()}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MobileVerifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderRadius: RFValue(15),
    borderWidth: RFValue(2),
    paddingVertical: RFValue(10),
    paddingHorizontal: RFValue(20),
    marginTop: RFValue(10),
    fontFamily: 'Montserrat-Medium',
  },
  btnAdd: {
    backgroundColor: Colors.GRAY,
    width: RFPercentage(20),
    padding: RFValue(10),
    borderRadius: RFValue(50),
    marginVertical: RFValue(20),
  },
  btnText: {
    color: Colors.White,
    fontSize: RFValue(18),
    alignSelf: 'center',
  },
});
