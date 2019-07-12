import React from 'react'
import { StyleSheet, Text, View, TextInput,Button } from 'react-native'
import { Field, reduxForm } from 'redux-form'

const fieldName = (props) => {
  console.log("inputs")
  return (
    <View style={styles.textInput}> 
      <TextInput 
        placeholder={props.ph} 
        onChangeText={props.input.onChange}
        value= {() => props.input.value}
        keyboardType={props.input.name === "email" ? 'email-address' : 'default'}
        autoCapitalize='none'
        secureTextEntry={!!(props.input.name === "password" || props.input.name === "passwordConfirm")}
        onBlur={props.input.onBlur}
      />
      <View style= {styles.line}/>
    {props.meta.touched && props.meta.error && 
    <Text style={styles.errors}>{props.meta.error}</Text>}
    </View>
  )
}

const validate = (values) => {
  const errors = {};
  if(!values.name) {
    errors.name= "This field is required"
  } else if(values.name.length <5) {
    errors.name = "Must be at least 5 characters"
  } else if(values.name.length >10) {
    errors.name = "Must be less than 10 characters"
  }

  if (!values.email){
    errors.email = "This field is required"
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email"
  }

  if(!values.password){
    errors.password = "This field is required"
  } else if (values.password.length < 5) {
    errors.password = "Must be at least 5 characters"
  } else if (values.password.length > 15) {
    errors.password = "Must be less than 15 characters"
  }

  if(!values.passwordConfirm) {
    errors.passwordConfirm = "This field is required"
  } else if(values.passwordConfirm !== values.password) {
    errors.passwordConfirm = "The password does not match"
  }
  return errors;
}

const SignUpForm = (props) => {
  return (
    <View>
      <Field name="name" component= {fieldName} ph='name'/>
      <Field name="email" component= {fieldName} ph='email@email.com'/>
      <Field name="password" component= {fieldName} ph='password'/>
      <Field name="passwordConfirm" component= {fieldName} ph='confirm password'/>
      <Button 
        title="Register"
        onPress={props.handleSubmit(props.userRegister)}
      />
      <View style={styles.lineButton} />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 16,
  },
  line: {
    backgroundColor: '#66b3ff',
    height: 1.5,
    opacity: 0.8
  },
  errors: {
    color: "#ff471a",
    opacity: 0.8 
  },
  lineButton: {
    height: 7
  }
})

// export default reduxForm({form:"formName"})
export default reduxForm({
  form: 'SignUpForm', 
  validate
})(SignUpForm);