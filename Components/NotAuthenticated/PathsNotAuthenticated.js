import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const SignIn = ( props ) => {
  const { navigation } = props;  
  return (
    <View style={styles.sign}>
      <Text>Component SignIn</Text>
      <Button 
        title="SignUp"
        onPress={()=> {navigation.navigate('SignUp')}}
      />
    </View>
  )
};

const SignUp = ( props ) => {
  const { navigation } = props
  return(
  <View style={styles.sign}>
    <Text>Component SignUp</Text>
    <Button 
      title="Back"
      onPress={() => {navigation.goBack()}}
    />
  </View>
)};


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