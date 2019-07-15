import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignIn from './SingIn'
import SignUp from './SingUp'

const PathsNotAuthenticated = createStackNavigator(
  {
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        // header: null,
      }
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    defaultNavigationOptions:{
      // title : 'Default Title "CreateStackNavigator"'
      header: null,
    }  
  }
);

export default createAppContainer(PathsNotAuthenticated)