import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import Colors from './Colors';
import {dataRef} from './Firebases';
const {height, width} = Dimensions.get('screen');
const Todos = () => {
  const [name, setName] = useState('');
  const [state, setState] = useState(null);
  const [list, setList] = useState([]);
  const [isUpdateData, setIsUpdateData] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const getdata = () => {
    dataRef
      .ref()
      .child('todos')
      .on('value', data => {
        setList(data.val());
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  const handleAddData = () => {
    if (name.length > 0) {
      let index = list.length;
      dataRef.ref(`todos/${index}`).set({
        City: name,
        //   State: state,
      });
      setName('');
    } else {
      Alert.alert('Please Enter Value');
    }
  };

  const handleUpdateData = () => {
    if (name.length > 0) {
      dataRef.ref(`todos/${selectedCardIndex}`).update({
        City: name,
      });
      setName('');
      setIsUpdateData(false);
    } else {
      Alert.alert('Please Enter Value');
    }
  };
  const handleCartPress = (cardIndex, cardValue) => {
    try {
      // console.log('index',cardIndex);
      setIsUpdateData(true);
      setSelectedCardIndex(cardIndex);
      setName(cardValue);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleDelete = (cardIndex, cardValue) => {
    try {
     Alert.alert("Alert",`Are You Sure To Delete ${cardValue} ?`,[
        
        {
            text:"Cancle",
            onPress:() => {
                console.log('Cancle Press');
            }
        },{
            text:"Ok",
            onPress:() => {
                console.log('cardindex',cardIndex);
                dataRef.ref().child(`todos/${cardIndex}`).remove()
            }

        }
     ])
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.nameTxt}>Todos</Text> */}
      <View>
        <TextInput
          style={styles.input}
          placeholder=" Enter City Name"
          placeholderTextColor={Colors.Black}
          value={name}
          onChangeText={val => setName(val)}
        />
        {/* <TextInput
          style={styles.input}
          placeholder=" Enter State Name"
          placeholderTextColor={Colors.Black}
          value={state}
          onChangeText={val => setState(val)}
        /> */}
        {!isUpdateData ? (
          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => handleAddData()}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => handleUpdateData()}>
            <Text style={styles.btnText}>Update </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.cardContainer}>
        <Text style={styles.listText}>Todo List</Text>
        <FlatList
          data={list}
          renderItem={item => {
            const cardIndex = item.index;
            if (item.item !== undefined) {
              return (
                <View
                  style={{
                    
                    marginBottom: RFValue(20),
                    marginHorizontal: RFValue(16),
                  }}>
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() => handleCartPress(cardIndex, item.item.City)}>
                    <Text style={styles.cityText}>{item.item.City}</Text>
                    <TouchableOpacity onPress={() => handleDelete(cardIndex,item.item.City)}>
                      <Image
                        source={require('./Assets/Images/delete.png')}
                        style={styles.img}
                      />
                    </TouchableOpacity>
                  </TouchableOpacity>
                </View>
              );
            }
          }}
        />
      </View>
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  nameTxt: {
    fontSize: RFValue(20),
  },
  input: {
    width: width - 30,
    borderRadius: RFValue(15),
    borderWidth: RFValue(2),
    padding: RFValue(15),
    marginTop: RFValue(10),
  },
  btnAdd: {
    backgroundColor: Colors.GRAY,
    width: RFPercentage(20),
    alignItems: 'center',
    padding: RFValue(10),
    borderRadius: RFValue(50),
    marginTop: RFValue(20),
    alignSelf: 'center',
  },
  btnText: {
    color: Colors.White,
    fontSize: RFValue(18),
  },
  listText: {
    marginTop: RFValue(15),
    marginBottom: RFValue(20),
    marginHorizontal: RFValue(22),
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
  cardContainer: {
    marginVertical: RFValue(0),
  },
  card: {
    backgroundColor: Colors.GRAY,
    width: width - 40,
    padding: RFValue(20),
    borderRadius: RFValue(20),
  },
  cityText: {
    color: Colors.White,
    fontSize: RFValue(18),
  },
  img: {
    height: RFValue(20),
    width: RFValue(20),
    position:"absolute",
    right:0,
    top:-21
  },
});
