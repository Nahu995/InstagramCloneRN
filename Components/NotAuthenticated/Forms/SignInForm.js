import React from 'react'
import { StyleSheet, Text, View, TextInput,Button } from 'react-native'
import { Field, reduxForm } from 'redux-form'

const fieldName = (props) => {
  // console.log("onBlur====>>> \n",props)
  return (
    <View style={styles.textInput}>  
      <TextInput 
        placeholder={props.ph} 
        value= {()=> props.input.value}
        onChangeText={props.input.onChange}
        keyboardType={props.input.name === "email" ? 'email-address' : 'default'}
        autoCapitalize='none'
        secureTextEntry={!!(props.input.name === "password" || props.input.name === "passwordConfirm")}
        onBlur={props.input.onBlur}
      />
      <View style={styles.line} />
    {props.meta.touched && props.meta.error && 
      <Text style={styles.errors}>{props.meta.error}</Text>
    }
    </View>
  )
}

const validate = (values) => {
  const errors = {};

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

  return errors;
}
const SignInForm = (props) => {
  return (
    <View>
      <Field name="email" component= {fieldName} ph='email@email.com'/>
      <Field name="password" component= {fieldName} ph='password'/>
      <Button 
        title="SignIn"
        style={styles.button}
        onPress={ props.handleSubmit((values) => { console.log("HANDLESUBMIT ===>> ", values) })}
      />
      <View style={styles.lineButton} />
    </View>
  )
}
console.log("EXPOSTART")

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

// export default reduxForm({form:"formName",validate})(Component)
export default reduxForm({
  form: 'SignInForm', 
  validate
})(SignInForm);