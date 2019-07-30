import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
export default class Publishing extends Component{

  render() {
    const { navigation, item, author} = this.props
    const { width } = Dimensions.get('window');
    const factor = item.width / width
    const height = item.height / factor
    return (
      <View>
        <View style={styles.header}>
          <Image
            source={{uri: author.profileImage}}
            style={{width: 48, height: 48, borderRadius: 24, marginRight: 8}}
          />
          <Text>{author.name}</Text>
        </View>
        <Image 
          source={{uri: item.secure_url}}
          style={{ width, height }}
        />
        <View style={styles.footer}>
          <View style={styles.icons}>
            <Ionicons name="md-heart-empty" color='#000000' size={30} style={styles.icon} />
            <Ionicons name="md-chatboxes" color='#000000' size={30} style={styles.icon} />
          </View>
            <Text>{item.text}</Text>
          <View></View>
          <Text>Comments</Text>
        </View>
        {/* <Text>Publishing</Text>
        <Button 
          title= 'Author'
          onPress= { () => { navigation.navigate('Author') }}
        />
        <Button 
          title= 'Comments'
          onPress= { () => { navigation.navigate('Comments') }}
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
    backgroundColor: '#2c3e50',
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 5,
    marginLeft: 8,
  },
  footer: {
    marginHorizontal: 8,
  },
  icons: {
    flexDirection: 'row'
  },
  icon: {
    // margin: 8,
    marginRight: 8,
    marginVertical:8
  },
  text:{
    marginBottom: 8
  }
});