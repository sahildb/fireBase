import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RFValue} from 'react-native-responsive-fontsize';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import Colors from '../../Colors';
import ContactHeader from '../Common/ContactHeader';

const AsyncContact = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [contactList, setContactList] = useState([]);
  const [dataAvl, setDataAvl] = useState(false);
  const getData = async () => {
    const Contacts = await AsyncStorage.getItem('Contacts');
    console.log('Contacts', JSON.parse(Contacts));
    setContactList(JSON.parse(Contacts));
  };

  const deleteData = async index => {
    const tempData = contactList;
    const deleteData = tempData.filter((item, ind) => {
      return ind !== index;
    });
    setContactList();
    await AsyncStorage.setItem('Contacts', JSON.stringify(deleteData));
    console.log('deleteData', deleteData);
    if (deleteData.length == 0) {
      setDataAvl(true);
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.card}>
        <View style={{flex: 0.7}}>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
        <View style={{flex: 0.5}}>
          <Text style={styles.mobileNumText}>{item.mobileNum}</Text>
        </View>

        <TouchableOpacity onPress={() => deleteData(index)}>
          <Image
            source={require('../../Assets/Images/deletebtn.png')}
            style={styles.img}
          />
        </TouchableOpacity>
      </View>
    );
  };
  useEffect(() => {
    getData();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <ContactHeader />
      <View style={styles.main}>
        {dataAvl ? (
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text style={styles.dataText}>Not Contact Available</Text>
          </View>
        ) : (
          <View>
            <FlatList data={contactList} renderItem={renderItem} />
          </View>
        )}

        {console.log('datval', dataAvl)}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('AsyncAddContact')}>
          <Text style={styles.btnText}>Add New Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AsyncContact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
  main: {
    flex: 1,
  },
  btn: {
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(20),
    borderRadius: RFValue(30),
    position: 'absolute',
    bottom: RFValue(20),
    right: RFValue(20),
    backgroundColor: Colors.Black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Colors.White,
    fontFamily: 'Montserrat-Medium',
    fontSize: RFValue(16),
  },
  dataText: {
    fontSize: RFValue(16),
    color: Colors.GRAY,
    fontWeight: 'bold',
    fontFamily: 'Montserrat-Medium',
  },
  card: {
    width: '90%',
    padding: RFValue(20),
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: RFValue(20),
    borderRadius: RFValue(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: RFValue(16),
  },
  mobileNumText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: RFValue(16),
  },
  img: {
    width: RFValue(25),
    height: RFValue(25),
  },
});
