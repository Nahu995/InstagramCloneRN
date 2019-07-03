import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native'

export default class Profile extends Component{

  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button 
          title= 'Publishing'
          onPress= { () => { navigation.navigate('Publishing') }}
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
    backgroundColor: '#2c3e50',
  }
});