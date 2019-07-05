import React, { Component } from 'react'
import { StyleSheet, View, Text,TextInput, Button } from 'react-native'
import {connect} from 'react-redux'
import SignUpForm from './Forms/SignUpForm'


class SignUp extends Component {
  
  render () {
  const { navigation } = this.props 
    return(
    <View style={styles.sign}>
      <Text>Component SignUp</Text>
      <SignUpForm />
      {/* <TextInput 
        style= {styles.input}
        placeholder="correo@correo.com"
      /> */}
      <Button 
        title="Back"
        onPress={() => { navigation.goBack() }}
      />
      {/* <Button 
        title="Aumentar"
        onPress={this.props.aumentar}
      /> */}
    </View>
    )
  }
}

const styles = StyleSheet.create({
  sign:{
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
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
  aumentar:  () => {
    // dispatch(actionCreator)
    dispatch({type: "AUMENTAR_REDUCER_PRUEBA" });
  }
});


export default connect(mapStateToProps, mapDispatchToProps)( SignUp );