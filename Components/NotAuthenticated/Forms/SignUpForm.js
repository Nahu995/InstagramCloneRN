import React from 'react'
import { StyleSheet, Text, View, TextInput,Button } from 'react-native'
import { Field, reduxForm } from 'redux-form'

const fieldName = (props) => {
  console.log("onBlur====>>> \n",props)
  // console.log("Rebundle!!")
  return (
    <View>  
      <TextInput 
        placeholder={props.ph} 
        value= {()=> props.input.value}
        onChangeText={props.input.onChange}
        keyboardType={props.input.name === "email" ? 'email-address' : 'default'}
        autoCapitalize='none'
        secureTextEntry={!!(props.input.name === "password" || props.input.name === "passwordConfirm")}
        onBlur={props.input.onBlur}
      />
    {props.meta.touched && props.meta.error && 
    <Text 
      style={{
        color: "black", 
        backgroundColor:"lightblue",
        opacity: 0.5,
        borderRadius:2.5,
      }}>{props.meta.error}</Text>}
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
  // console.log("signupProps\n" , props)
  return (
    <View>
      <Field name="name" component= {fieldName} ph='name'/>
      <Field name="email" component= {fieldName} ph='email@email.com'/>
      <Field name="password" component= {fieldName} ph='password'/>
      <Field name="passwordConfirm" component= {fieldName} ph='confirm password'/>
      <Text>Redux Form</Text>
      <Button 
        title="Register"
        onPress={ props.handleSubmit((values) => { console.log("HANDLESUBMIT ===>> ", values) })}
      />
    </View>
  )
}

// export default reduxForm({form:"formName"})
export default reduxForm({
  form: 'SignUpForm', 
  validate
})(SignUpForm);