import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class One extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>One</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
