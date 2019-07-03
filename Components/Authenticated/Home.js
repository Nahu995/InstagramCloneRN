import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

export default class Home extends Component{

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button 
          title= 'Author'
          onPress= { () => {navigation.navigate( 'Author' ) }}
        />
        <Button 
          title= 'Comments'
          onPress= { () => { navigation.navigate('Comments')}}
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