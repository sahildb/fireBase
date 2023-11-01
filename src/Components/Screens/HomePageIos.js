import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../../Colors'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useNavigation} from '@react-navigation/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const HomePageIos = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.emailText}>Email: {firebase.auth().currentUser.email}</Text> 
      <Text style={styles.uidText}>UID: {firebase.auth().currentUser.uid}</Text>
      <TouchableOpacity
          style={styles.btnAdd}
          onPress={async () => {
            await firebase.auth().signOut();
            navigation.navigate('LoginPageIos');
          }}>
          <Text style={styles.btnText}>Log Out </Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomePageIos

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