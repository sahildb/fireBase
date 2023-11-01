import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import analytics from '@react-native-firebase/analytics';
import Colors from '../../Colors'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

const AsyncStorage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>Async Storage</Text>
    </View>
  )
}

export default AsyncStorage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
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
    fontFamily: 'Montserrat-Bold',
  },
  nameText: {
    fontSize: RFValue(18),
    alignSelf: 'center',
    fontFamily: 'Montserrat-Bold',
  },
})