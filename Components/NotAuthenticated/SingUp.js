import React, { Component } from 'react'
import { StyleSheet, View, Text,TextInput, Button } from 'react-native'
import {connect} from 'react-redux'
import SignUpForm from './Forms/SignUpForm'

class SignUp extends Component {
  
  userRegister = values => {
    this.props.register (values);
  }
  render () {
  const { navigation } = this.props 
    return(
    <View style={styles.container}>
      <SignUpForm navigation={navigation} userRegister = {this.userRegister}/>
      <Button 
        title="Back"
        style={styles.button}
        onPress={() => { navigation.goBack() }}
      />
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    justifyContent: 'center',
    backgroundColor: '#90EE90',
    paddingHorizontal: 16,
  },
  input:{
    backgroundColor:'#fff',
    fontColor: 'red'
  }
})

const mapStateToProps = (state, ownProps) => ({
  numero : state.reducerPrueba
});

const mapDispatchToProps =  (dispatch, ownProps) => ({
  register:  (values) => {
    // dispatch(actionCreator)
    dispatch({type: "USER_REGISTER", data: values });
  }
});


export default connect(mapStateToProps, mapDispatchToProps)( SignUp );