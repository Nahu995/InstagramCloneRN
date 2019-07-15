import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native'
import { autentication } from '../../Store/Services/Firebase';

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
        <Button 
          title="Sign Out"
          onPress={() => {autentication.signOut()}}
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