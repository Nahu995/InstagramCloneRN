import React from 'react'
import { StyleSheet, Text, View, TextInput,Button } from 'react-native'
import { Field, reduxForm } from 'redux-form'

const fieldName = (props) => {
  return (
    <View style={styles.textInput}> 
      <TextInput 
        placeholder={props.ph} 
        onChangeText={props.input.onChange}
        value= {() => props.input.value}
        keyboardType= 'default'
        autoCapitalize='none'
        onBlur={props.input.onBlur}
        multiline={true}
      />
      <View />
    {props.meta.touched && props.meta.error && 
    <Text style={styles.errors}>{props.meta.error}</Text>}
    </View>
  )
}

const fieldImage = props => {
  return(
    <View 
      style={{justifyContent: "center", paddingHorizontal: '35%' }}>
      {props.meta.touched && props.meta.error &&
      <Text style={styles.errors}>{props.meta.error}</Text>}
    </View>
  )
}

const validate = (values, props) => {
  const errors = {};
  
  if(!props.image) {
    errors.image = 'Image is required'
  }
  if(values.text && values.text.length > 140) {
    errors.text = "Must be less than 140 characters"
  }

  return errors;
}

const SelectGaleryForm = (props) => {
  return (
    <View style={styles.container}>
      <Field name="image" component={fieldImage} />
      <Field name="text" component={fieldName} ph='Text from image'/>
      <Button 
        title="Publish"
        onPress={props.handleSubmit(props.userRegister)}
        style={styles.button}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:3,
  },
  textInput: {
    // marginBottom: ,
    marginHorizontal: 16
  },
  errors: {
    color: "#ff471a",
    opacity: 0.8 
  },
  lineButton: {
    height: 7
  },
  button: {
    justifyContent: 'flex-end'
  }
})

// export default reduxForm({form:"formName"})
export default reduxForm({
  form: 'SelectGaleryForm', 
  validate
})(SelectGaleryForm);