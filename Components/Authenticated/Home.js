import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import {actionDownloadPublications} from '../../Store/Actions'
import Publishing from './Publishing';

class Home extends Component{
  
  componentDidMount(){
    this.props.downloadPublications()
  }

  render() {
    // console.log("RenderHome", this.props.publications)
    const { navigation, authors } = this.props
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.props.publications}
          renderItem= {({ item, index }) => 
            <Publishing 
              item= { item }
              author= {authors[index]}
            />
          }
          ItemSeparatorComponent= {() => 
            <View style={styles.separator}/>
          }
        />
        {/* <Text>Home</Text>
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
        /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9'
  },
  separator:{
    borderWidth: 1,
    borderColor: '#C0C0C0',
  }
})

const mapStateToProps = (state, ownProps) => {
  return{
    publications: state.reducerPublicationsUnloaded,
    authors: state.reducerAuthorsUnloaded
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