import {
  Alert,
  SafeAreaView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

import dynamickLinks from '@react-native-firebase/dynamic-links';
import Colors from '../Colors';
import Clipboard from '@react-native-clipboard/clipboard';

const DeepLink = () => {
  const [generateLink, setgenerateLink] = useState('');

  const buildLink = async () => {
    const link = await dynamickLinks().buildLink({
      link: 'https://invertase.io/offer',
      // domainUriPrefix is created in your Firebase console
      domainUriPrefix: 'https://deeplinkingdemo12.page.link',
      // optional setup which updates Firebase analytics campaign
      // "banner". This also needs setting up before hand
      analytics: {
        campaign: 'banner',
      },
    });

    setgenerateLink(link);
  };

  const handleDynamicLink = link => {
    // Handle dynamic link inside your own application
    if (link.url === 'https://invertase.io/offer') {
      // ...navigate to your offers screen
      Alert.alert('matched');
    } else {
      Alert.alert('not Matched');
    }
  };

  useEffect(() => {
    const unsubscribe = dynamickLinks().onLink(handleDynamicLink);
    // When the component is unmounted, remove the listener
    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: RFValue(18)}}>{generateLink} </Text>
        {console.log('link', generateLink)}
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => {
            buildLink();
          }}>
          <Text style={styles.btnText}>Generate Deep Link</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => {
            Clipboard.setString(generateLink);
          }}>
          <Text style={styles.btnText}>Copy Deep Link</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DeepLink;

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
