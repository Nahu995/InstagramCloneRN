import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SignIn from './SignIn'
import SignUp from './SignUp'





const PathsNotAuthenticated = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        header: null,
      }
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    defaultNavigationOptions:{
      title : 'Default Title "CreateStackNavigator"'
    }  
  }
);

const styles = StyleSheet.create({
  sign:{
    flex : 1,
    justifyContent: 'center'
  }
})

export default PathsNotAuthenticated