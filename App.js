import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import PathsNotAuthenticated from './Components/NotAuthenticated/PathsNotAuthenticated';
import PathsAuthenticated from './Components/Authenticated/PathsAuthenticated';

const PathNotAuthenticated = createAppContainer(PathsNotAuthenticated);
const PathAuthenticated = createAppContainer(PathsAuthenticated);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <PathAuthenticated />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop:24
  },
});
