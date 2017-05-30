import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class Grammar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>This is grammar screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ecf0f1'
  },
  header: {
    margin: 10, // Add margin
    color: '#000000', // White color
    fontFamily: 'Avenir', // Change font family
    fontSize: 26, // Bigger font size
  }
});