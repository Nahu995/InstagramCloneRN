import React,{ Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux'
import SignInForm from './Forms/SignInForm';
import { actionLogin } from '../../Store/Actions'

class SignIn extends Component {
  userLogin = (values) => {
    this.props.login(values)
  }

  render () {
  const { navigation } = this.props;  
    return (
      <View style={styles.container}>
        <SignInForm 
          userLogin={this.userLogin}
        />
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
    flex : 1,
    justifyContent: 'center',
    backgroundColor: '#90EE90',
    paddingHorizontal: 16
  },
})

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (values) => {
      dispatch( actionLogin(values) )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)