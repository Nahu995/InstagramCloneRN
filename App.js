import React from 'react';
import { Provider } from 'react-redux'
import Store from './Store/Store.js'
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
        <Provider store={Store} >
          <PathNotAuthenticated />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    // alignItems: 'center',
    justifyContent: 'center',
    marginTop:24
  },
});
