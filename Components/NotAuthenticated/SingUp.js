import React, { Component } from 'react'
import { StyleSheet, View, Text,TextInput, Button } from 'react-native'
import {connect} from 'react-redux'
import { actionRegister } from '../../Store/Actions'
import SignUpForm from './Forms/SignUpForm'

class SignUp extends Component {
  
  userRegister = values => (
    this.props.register (values));
  

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
    color: 'red'
  }
})

const mapStateToProps = (state, ownProps) => ({
  numero : state.reducerPrueba
});

const mapDispatchToProps =  (dispatch, ownProps) => ({
  register:  (values) => {
    // dispatch(actionCreator)
    dispatch( actionRegister(values) );
  }
});


export default connect(mapStateToProps, mapDispatchToProps)( SignUp );