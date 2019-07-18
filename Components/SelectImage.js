import * as React from 'react';
import { Button, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
// import Constants  from 'expo-constants'
// import Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'
import { CLOUDINARY_PRESET, CLOUDINARY_NAME } from '../config';


const SelectImage = (props) => {
  console.log("line 9",{...props})
  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log("result",result);

    if (!result.cancelled) {
      props.uploadImage(result)
      let base64Img = `data:image/jpg;base64,${result.base64}`
      // CLOUDINARY_NAME
    }
  };

  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress= { selectImage } >
        <Image 
          source={(!props.image)? require('../assets/chooseImage.png') :{ uri: props.image.uri}} 
          style={(!props.image)? {width:160, height: 160}:{ width:160, height: 160, borderRadius:80}}
        />
      </TouchableOpacity>
      {/* <Button title="Pick an image from camera roll" onPress={this._pickImage} />
      {image && (<Image source={{ uri: image }} style={{ width: 200, height: 200 }} />)} */}
    </View>
  );
}

export default SelectImage