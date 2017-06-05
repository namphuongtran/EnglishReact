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
    margin: 10, 
    color: '#000000', 
    fontFamily: 'Avenir',
    fontSize: 26, 
  }
});