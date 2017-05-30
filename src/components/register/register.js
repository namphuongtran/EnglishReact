import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
export default class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <TouchableOpacity></TouchableOpacity>
          </View>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="First name"
            placeholderTextColor="#2c3e50"
            onSubmitEditing={() => this.inputSurname.focus()}
            underlineColorAndroid="transparent"/>
          <TextInput
            style={styles.input}
            placeholder="Sur name"
            placeholderTextColor="#2c3e50"
            onSubmitEditing={() => this.inputEmail.focus()}
            underlineColorAndroid="transparent"/>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#2c3e50"
            returnKeyType="next"
            onSubmitEditing={() => this.inputPassword.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"/>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#2c3e50"
            returnKeyType="go"
            secureTextEntry
            ref={(password) => this.inputPassword = password}
            underlineColorAndroid="transparent"/>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1'
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    flexGrow: 1
  },
  avatar: {    
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 100
  },
  formContainer: {
    padding: 10
  },
  input: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#3498db',
    height: 40,
    color: '#000000',
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 10,
    fontStyle: 'italic',
    textDecorationLine: 'none'
  }
});