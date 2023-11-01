import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';
import {dataRef} from './Firebases';

const GetData = () => {
  const [first, setfirst] = useState([]);

  // const getdata = async () => {
  //   try {
  //      const data = await  dataRef.ref().child("users").on("value",data => {
  //     const getdata = Object.values(data.val())
  //     setfirst(getdata)
  //   }).call()
  //     console.log('d', data);
  //   } catch (error) {
  //    // console.log('errorss', error);
  //   }
  // };

  const getdata = () => {
    dataRef
      .ref()
      .child('users')
      .on('value', data => {
        const getdata = Object.values(data.val());
        setfirst(getdata);
      });
  };
  useEffect(() => {
    getdata();
    // dataRef.ref().child("users").on("value",data => {
    //   const getdata = Object.values(data.val())
    //   setfirst(getdata)
    // })
  }, []);

  console.log('dd', first);
  return (
    <SafeAreaView>
      <View>
      
        {first.map((val, index) => {
          return (
            <View key={index}>
              <Text>Name: {first ? val.name : 'Loading..'}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default GetData;
