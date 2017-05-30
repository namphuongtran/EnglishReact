import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Splash from './splash';
import Home from './components/home/home';

export default class GREApp extends Component {
  isOverSplash;

  constructor() {
    super();
    this.state = ({isOverSplash: false});
    this.showLogin();
  }
  showLogin() {
    setTimeout(() => this.setState((prevState) => ({
      isOverSplash: !prevState.isOverSplash
    })), 2000);
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.isOverSplash == false
          ? <Splash/>
          : <Home/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
