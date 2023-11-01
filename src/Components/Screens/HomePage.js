import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import Colors from '../../Colors';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.emailText}>Email: {auth().currentUser.email}</Text> 
      <Text style={styles.uidText}>UID: {auth().currentUser.uid}</Text>
      <View style={{alignItems: 'center'}}>
      <TouchableOpacity
          style={styles.btnAdd}
          onPress={async () => {
            navigation.navigate('uploadFile');
          }}>
          <Text style={styles.btnText}>Go to Profile </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={async () => {
            await auth().signOut();
            navigation.navigate('LoginPage');
          }}>
          <Text style={styles.btnText}>Log Out </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GRAY,
  },
  emailText: {
    color: Colors.White,
    fontSize: RFValue(16),
    marginBottom: RFValue(10),
  },
  uidText: {
    color: Colors.White,
    fontSize: RFValue(16),
  },
  btnAdd: {
    backgroundColor: Colors.White,
    paddingHorizontal: RFValue(50),
    paddingVertical: RFValue(10),
    borderRadius: RFValue(50),
    marginTop: RFValue(20),
  },
  btnText: {
    color: Colors.GRAY,
    fontSize: RFValue(18),
    alignSelf: 'center',
    fontFamily: 'Montserrat-Bold',
  },
});
