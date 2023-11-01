import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Colors from '../../Colors';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Intro = () => {
    const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
        checkLogin()
    }, 1000);
  },[]);

  const checkLogin = async () => {
    const email = await AsyncStorage.getItem("Email");
    const password = await AsyncStorage.getItem("Password");
   if(email !== null || email !== undefinedcc|| email !== ""){
    navigation.navigate("AsyncContact")
   }else{
    navigation.navigate("AsyncLoginPage")
   }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.nameTxt}>My Contact App</Text>
    </View>
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameTxt: {
    fontSize: RFValue(20),
    marginBottom: RFValue(20),
    fontFamily: 'Montserrat-Bold',
    
  },
});
