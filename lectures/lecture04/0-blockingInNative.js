import * as React from 'react';
import {Button, Text, ScrollView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

  blockJS() {
    console.log('blocking!')
    const done = Date.now() + 5000
    while(Date.now() < done) {

    }
    console.log('unblocking!')
  }
  render() {
    return (
    <ScrollView style={styles.container}>
      <Button title="block js" onPress={() => this.blockJS()} stype={styles.paragraph} />
    </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
