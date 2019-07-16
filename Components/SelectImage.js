import * as React from 'react';
import { Button, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants  from 'expo-constants'
import Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };

  render() {
    let { image } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress= {this.selectImage}>
        {console.log('(if)?true:false')}
          <Image 
            source={(!image)? require('../assets/chooseImage.png') :{ uri:image}} 
            style={(!image)? {width:160, height: 160}:{ width:160, height: 160, borderRadius:80}}
          />
        </TouchableOpacity>
        {/* <Button title="Pick an image from camera roll" onPress={this._pickImage} />
        {image && (<Image source={{ uri: image }} style={{ width: 200, height: 200 }} />)} */}
      </View>
    );
  }

  componentDidMount() {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log("result",result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };
}

const styles = StyleSheet.create({ 
  container: {
    flex: 2,
    alignItems:'center',
    justifyContent: 'center' 
  },
})