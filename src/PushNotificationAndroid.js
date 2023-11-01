import {
  SafeAreaView,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from './Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  handleScheduledNotification,
  showNotification,
} from './notificatiAndroid';
import dynamickLinks from '@react-native-firebase/dynamic-links';
const PushNotificationAndroid = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: RFValue(18)}}>PushNotificationAndroid </Text>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => showNotification('hello', 'GM')}>
          <Text style={styles.btnText}>Push Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() =>
            handleScheduledNotification('hello', 'showed after % sec')
          }>
          <Text style={styles.btnText}>Scheduled Notification</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PushNotificationAndroid;

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
