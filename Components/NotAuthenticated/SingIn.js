import React,{Component} from 'react'
import { View, Text, StyleSheet} from 'react-native'

 export default class classSignIn extends Component {
   render () {
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
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50'
  }
})