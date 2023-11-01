import {StyleSheet, Image} from 'react-native';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

const HomeHeadr = () => {
  return <Image source={require('../../Assets/Images/homeHeader.png')} style={styles.img} />;
};

export default HomeHeadr;

const styles = StyleSheet.create({
  img: {
    width: RFValue(25),
    height: RFValue(25),
    marginHorizontal: 10,
  },
});
