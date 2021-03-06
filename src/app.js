import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Splash from './splash';
import Intro from './components/home/intro';
import Home from './modules/home/home';

export default class GREApp extends Component {
  isOverSplash;

  constructor() {
    super();
    this.state = ({isOverSplash: false, isOverLogin: false});
    this.isFirstLoad();
  }

  isFirstLoad() {
    setTimeout(() => this.setState((prevState) => ({
      isOverSplash: !prevState.isOverSplash
    })), 2000);
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.isOverSplash == false
          ? <Splash/>
          : <Home/>}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
