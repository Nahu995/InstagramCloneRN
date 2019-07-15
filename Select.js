import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import { autentication } from './Store/Services/Firebase'
import PathsAuthenticated from './Components/Authenticated/PathsAuthenticated'
import PathsNotAuthenticated from './Components/NotAuthenticated/PathsNotAuthenticated'
import { actionSetSession, actionSignOff } from './Store/Actions';

class Select extends Component{

  componentDidMount(){
    this.props.autentication()
  }

  render () {
    return (
      <View style={styles.container}>
        { this.props.user ?
        <PathsAuthenticated />
        :
        <PathsNotAuthenticated />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

const mapStateToProps = (state, ownProps) => ({
  user: state.reducerSession
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  autentication: () => {
    //dispatch(actionCreator)
    autentication.onAuthStateChanged( (user) => {
      if(user) {
        // User is signed in.
        console.log("TOJSON",user.toJSON())
        dispatch(actionSetSession(user))
        // ...
      } else {
        // User is signed out.
        console.log('No existe sesion')
        dispatch( actionSignOff() )
        // ...
      }
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);