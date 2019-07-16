import React, { Component } from 'react'
import { StyleSheet, View, Text,TextInput, Button } from 'react-native'
import {connect} from 'react-redux'
import { actionRegister, actionUploadSignUpImage, actionCleanSignUpImage } from '../../Store/Actions'
import SignUpForm from './Forms/SignUpForm'
import SelectImage from '../SelectImage'

class SignUp extends Component {
  
  componentWillUnmount(){
    this.props.cleanImage()
  }
  
  userRegister = values => (
    this.props.register (values)
  );

  render () {
    console.log("imagen", this.props)
  const { navigation } = this.props 
    return(
    <View style={styles.container}>
      <SelectImage 
        image={this.props.image.image}
        uploadImage={this.props.uploadImage}
      />
      <SignUpForm navigation={navigation} userRegister = {this.userRegister}/>
      {/* <Button 
        title="Back"
        style={styles.button}
        onPress={() => { navigation.goBack() }}
      /> */}
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
  image: state.reducerSignUpImage
});

const mapDispatchToProps =  (dispatch, ownProps) => ({
  register:  (values) => {
    dispatch( actionRegister(values) );
  },
  uploadImage: (image) => {
    dispatch(actionUploadSignUpImage(image));
  },
  cleanImage: () => {
    dispatch(actionCleanSignUpImage())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)( SignUp );