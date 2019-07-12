import React,{Component} from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import SignInForm from './Forms/SignInForm'
console.log("try,m")
export default class SignIn extends Component {
  render () {
  const { navigation } = this.props;  
    return (
      <View style={styles.container}>
        <SignInForm />
        <Button 
          title="SignUp"
          onPress={()=> {navigation.navigate('SignUp')}}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'center',
    backgroundColor: '#90EE90',
    paddingHorizontal: 16
  },
})