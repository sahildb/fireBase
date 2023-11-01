import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../Colors';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import AddContactHeader from '../Common/AddContactHeader';

const {height, width} = Dimensions.get('screen');
let contacts = [];
const AsyncAddContact = () => {
  const [name, setName] = useState('');
  const [mobileNum, setMobileNum] = useState('');
  const navigation = useNavigation();
  const saveContact = async () => {
    if (name.length > 0 && mobileNum.length > 0) {
      let tempContact = [];
      contacts = [];
      let data = JSON.parse(await AsyncStorage.getItem('Contacts'));
      tempContact = data;
      tempContact.map(item => {
        contacts.push(item);
      });
      contacts.push({name: name, mobileNum: mobileNum});
      await AsyncStorage.setItem('Contacts', JSON.stringify(contacts));
      navigation.goBack();
    }else{
      Alert.alert("Please Enter Data")
    }
  };
  return (
    <View style={styles.container}>
      <AddContactHeader />
      <View style={styles.main}>
        <TextInput
          style={styles.input}
          placeholder=" Enter Your Name "
          placeholderTextColor={Colors.Black}
          value={name}
          onChangeText={val => setName(val)}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder=" Enter Your Password"
          placeholderTextColor={Colors.Black}
          value={mobileNum}
          onChangeText={val => setMobileNum(val)}
        />

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity style={styles.btnAdd} onPress={() => saveContact()}>
            <Text style={styles.btnText}>Save Contact </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AsyncAddContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: RFValue(15),
    borderWidth: RFValue(2),
    padding: RFValue(15),
    marginVertical: RFValue(20),
    fontFamily: 'Montserrat-Medium',
    marginHorizontal: RFValue(20),
  },
  btnAdd: {
    backgroundColor: Colors.GRAY,

    paddingHorizontal: RFValue(50),
    paddingVertical: RFValue(10),
    borderRadius: RFValue(50),
    marginTop: RFValue(20),
  },
  btnText: {
    color: Colors.White,
    fontSize: RFValue(18),
    alignSelf: 'center',
  },
});
