import {
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
const {height, width} = Dimensions.get('screen');

const AddNewUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.White,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
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

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.btnAdd}>
              <Text style={styles.btnText}>Save Data </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddNewUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GRAY,
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
  signupText: {
    color: Colors.Black,
    fontWeight: 'bold',
    color: Colors.GRAY,
  },
});
