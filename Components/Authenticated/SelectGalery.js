import React, {Component} from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import SelectImage from '../SelectImage';
import {blur} from 'redux-form'
import { connect } from 'react-redux'
import { actionUploadPublishImage, actionUploadPublish, actionCleanPublishImage,actionCleanUploadPublish } from '../../Store/Actions';
import SelectGaleryForm from './SelectGaleryForm';

class SelectGalery extends Component {
  componentWillUnmount(){
    this.props.cleanImageAdd()
  }
  
  componentWillReceiveProps(nextProps){
    if(this.props.stateUploadPublish !== nextProps.stateUploadPublish){
      switch (nextProps.stateUploadPublish) {
        case 'SUCCESS':
          console.log("SUCCESS")
          Alert.alert("SUCCES", "The publication was made successfully", [{text: 'OK', onPress: () => {
           this.props.cleanStatePublish(); 
          } }])
          this.props.navigation.goBack()
          break;
        case 'ERROR':
          console.log("ERROR")
          Alert.alert('ERROR', 'The publication was not made. Try again...', [{
            text : 'CONFIRM',
            onPress: () =>{ 
              this.props.cleanStatePublish();
              this.props.navigation.goBack();}
          }])
          break;
        default:
          break;
      }
    }
  }
  
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.image}>       
          <SelectImage image={this.props.image.image} uploadImage={this.props.uploadImage} radius/>
        </View>
        <View style={styles.text}>
          <SelectGaleryForm 
            image= {this.props.image.image}
            userRegister= {(values) => this.props.uploadPublish(values)}
          />
        </View>

      </View>
    )
  }
}

const mapStateToProps= (state, ownProps) => {
  return {
    image: state.reducerPublishImage,
    stateUploadPublish: state.reducerSuccessUploadPublish.state
  }
}
const mapDispatchToProps= (dispatch, ownProps) => {
  return {
    uploadImage: (image) => {
      dispatch(actionUploadPublishImage(image));
      dispatch(blur('SelectGaleryForm', 'image', Date.now()));
    },
    uploadPublish: (values) => {
      dispatch(actionUploadPublish(values))
    },
    cleanImageAdd: () => {
      dispatch(actionCleanPublishImage())
    },
    cleanStatePublish: () => {
      dispatch(actionCleanUploadPublish())
    },
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9'
  },
  image: {
    flex: 2
  },
  text: {
    flex: 2
  }
})



export default connect(mapStateToProps, mapDispatchToProps)(SelectGalery)