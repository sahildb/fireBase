import {StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import Colors from '../../Colors';
import {RFValue, RFPercentage} from 'react-native-responsive-fontsize';
import storage from '@react-native-firebase/storage';
import FilePicker, {types} from 'react-native-document-picker';
const UploadFiles = () => {
  const [data, setData] = useState(null);
  const [fullImgPath,setFullImgPath] = useState("")
  const [imgDownloadUrl,setImgDownloadUrl] = useState("")
  const pickImage = async () => {
    try {
      const response = await FilePicker.pick({
        presentationStyle: 'fullScreen',
        allowMultiSelection: true,
        copyTo:"cachesDirectory"
      });
      setData(response[0]);
     
      console.log('response', response[0]);
    } catch (error) {
      console.log('error', error);
    }
  };

  const uploadImage = async () => {
    try {
      const responseImg = await storage().ref(`/profile/${data.name}`).putFile(data.fileCopyUri)
      console.log('resImg',responseImg);
     setFullImgPath(responseImg.metadata.fullPath);
     Alert.alert("Image Successfully Uploaded")
    //  const url = await responseImg.ref.getDownloadURL();
    //   setImgDownloadUrl(url)
    } catch (error) {
      console.log('error', error);
    }
  };
  const deleteImage = async () => {
    try {
     const responseDelete = await storage().ref(fullImgPath).delete();
     console.log('responseDelete',responseDelete);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <View style={styles.container}>
      {/* {data.length > 0
        ? data.map((val, index) => {
            return (
              <View key={index}>
                <Image source={val} style={styles.img} />
              </View>
            );
          })
        : null} */}
      {data ? (<Image source={{uri:data.uri}} style={styles.img}/>) : (<Text style={styles.imgText}>Image Not Found</Text>)}
      <View style={{flexDirection: 'row',marginBottom:RFValue(20)}}>
        <TouchableOpacity style={styles.btnAdd} onPress={() => pickImage()}>
          <Text style={styles.btnText}>Select Image</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnUpload} onPress={() => uploadImage()}>
          <Text style={styles.btnText}>Upload Image</Text>
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity style={styles.btnDelete} onPress={() => deleteImage()}>
          <Text style={styles.btnText}>Delete Image</Text>
        </TouchableOpacity>

          
    </View>
  );
};

export default UploadFiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnAdd: {
    backgroundColor: Colors.GRAY,
    paddingHorizontal:RFValue(25),
    paddingVertical: RFValue(10),
    borderRadius: RFValue(50),
    marginRight: RFValue(10),
  },
  btnUpload: {
    backgroundColor: Colors.Blue_Orchid,
    paddingHorizontal:RFValue(25),
    paddingVertical: RFValue(10),
    borderRadius: RFValue(50),
   
  },
  btnDelete: {
    backgroundColor: Colors.RED ,
    paddingHorizontal:RFValue(25),
    paddingVertical: RFValue(10),
    borderRadius: RFValue(50),
   
  },
  btnText: {
    color: Colors.White,
    fontSize: RFValue(18),
    alignSelf: 'center',
  },
  img: {
    height: RFValue(200),
    width: RFValue(200),
    borderWidth: RFValue(2),
    marginBottom:RFValue(20),
    borderColor: Colors.Black,
    backgroundColor: Colors.White,
    alignSelf: 'center',
  },
  imgText:{
    fontSize:RFValue(18),
    fontFamily: 'Montserrat-Bold',
    marginVertical:RFValue(10),
  }
});
