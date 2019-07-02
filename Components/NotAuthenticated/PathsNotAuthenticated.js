import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const SignIn = (props) => {
  console.log(props)
  return <Text>Component SignIn</Text>
};
const SignUp = () => <Text>Componente SignUp</Text>;

const PathsNotAuthenticated = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
});


export { PathsNotAuthenticated }