import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import {actionDownloadPublications} from '../../Store/Actions'

class Home extends Component{
  
  componentDidMount(){
    this.props.downloadPublications()
  }

  render() {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button 
          title= 'Author'
          onPress= { () => {
            navigation.navigate( 'Author' ) 
          }}
        />
        <Button 
          title= 'Comments'
          onPress= { () => {
            navigation.navigate('Comments')
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  }
});

const mapStateToProps = (state, ownProps) => {
  return{
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    downloadPublications: () => {
      dispatch(actionDownloadPublications())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)