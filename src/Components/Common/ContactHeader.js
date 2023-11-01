import {
  StyleSheet,
  Image,
  Vibration,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import Colors from '../../Colors';
import {useNavigation} from '@react-navigation/native';

const ContactHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('AsyncLoginPage')}>
        <Image
          source={require('../../Assets/Images/left-arrow.png')}
          style={styles.backArrow}
        />
      </TouchableOpacity>

      <Text style={styles.nameText}> Contact </Text>
      <Image
        source={require('../../Assets/Images/phone.png')}
        style={styles.img}
      />
    </View>
  );
};

export default ContactHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 20,
  },
  backArrow: {
    width: RFValue(20),
    height: RFValue(20),
    marginHorizontal: 10,
  },
  nameText: {
    color: Colors.GRAY,
    alignSelf: 'center',
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
  img: {
    width: RFValue(25),
    height: RFValue(25),
  },
});
