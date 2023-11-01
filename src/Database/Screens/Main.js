import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Colors from '../../Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.White}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          marginBottom: RFValue(20),
          marginRight: RFValue(10),
        }}>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => navigation.navigate('AddNewUser')}>
          <Text style={styles.btnText}>Add NEW USER</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  btnAdd: {
    backgroundColor: Colors.GRAY,
    padding: RFValue(10),
    paddingHorizontal: RFValue(20),
    borderRadius: RFValue(50),
    marginTop: RFValue(20),
  },
  btnText: {
    color: Colors.White,
    fontSize: RFValue(18),
    alignSelf: 'center',
  },
});
