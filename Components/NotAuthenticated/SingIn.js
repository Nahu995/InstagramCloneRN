import React,{Component} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import SignInForm from './Forms/SignInForm'
export default class SignIn extends Component {
  render () {
  const { navigation } = this.props;  
    return (
      <View style={styles.sign}>
        <SignInForm />
        <Text>Component SignIn</Text>
        <Button 
          title="SignUp"
          onPress={()=> {navigation.navigate('SignUp')}}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  sign:{
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
})