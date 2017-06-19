import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
          <Text style={styles.welcome}>
            Welcome to Academic English!
          </Text>
        </View>
        <View>
          <Text style={styles.copyright}>
            <Text>© {new Date().getFullYear()} </Text>
            <Text>
              Power by Southern</Text>
          </Text>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    color: '#ffffff'
  },
  copyright: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 10
  },
  logo: {
    width: 250,
    height: 120
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  }
});
