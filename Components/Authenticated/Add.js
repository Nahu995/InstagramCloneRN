import React, { Component } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native'

export default class Add extends Component{

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Button 
          title="Select from Galery"
          onPress={ ()=> {navigation.navigate('Selection')}}
        />
        <Text>Add</Text>
        <Button 
          title="Take Photo"
          onPress={ ()=> {navigation.navigate('Selection')}}
        />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  }
});