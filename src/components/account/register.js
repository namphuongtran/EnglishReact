import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import FBSDK, {LoginManager} from 'react-native-fbsdk';
// import uuid from 'react-native-uuid'; import User from
// '../../data/models/user'; import UserRepository from
// '../../data/database/userRepository';

export default class Register extends Component {

  constructor() {
    super();
    // this.user = new User(this.guid(), 'a', 'b', 'ab@gmail.com', '123456', new
    // Date(), '0123456789', 'Hanoi', new Date(), new Date(), true);
    // this.user.confirmPassword = '';
  };

  guid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x'
          ? r
          : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  register = () => {
    if (true) {
      try {
        // let user = UserRepository.createUser(this.user); console.log('user: ' +
        // user);
      } catch (error) {
        console.log('catch error: ' + error);
      }
      //register as normal console.log(this.user);
      /*let user = {
        id: '1',
        firstName: 'a',
        lastName: 'b',
        email: 'ab@gmail.com',
        password: '123456',
        dateOfBirth: new Date(),
        phone: '0123456789',
        address: 'Hanoi',
        createdDate: new Date(),
        updatedDate: new Date(),
        isActive: true
      };*/

    }
  };

  registerFacebook = () => {
    LoginManager
      .logInWithReadPermissions(['public_profile'])
      .then(function (result) {
        if (result.isCancelled) {
          console.log('Login was cancelled!');
        } else {
          console.log('Login was a success ' + result.grantedPermissions.toString());
        }
      }, function (error) {
        console.log('An error occured: ' + error);
      });
  };

  registerTwitter = () => {
    if (true) {
      //register by google plus account
    }
  };

  changeAvatar = () => {
    if (true) {
      //change avatar
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <TouchableOpacity style={styles.avatarButton} onPress={this.changeAvatar}>
              <Image
                style={styles.camera}
                source={require('../../../assets/images/camera.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.generalInfoContainer}>
            <TextInput
              style={styles.inputFirstName}
              placeholder="First name"
              placeholderTextColor="#2c3e50"
              returnKeyType="next"
              underlineColorAndroid="transparent"/>
            <TextInput
              style={styles.inputLastName}
              placeholder="Last name"
              placeholderTextColor="#2c3e50"
              returnKeyType="next"
              underlineColorAndroid="transparent"/>
          </View>
          <View style={styles.secureInfoContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#2c3e50"
              returnKeyType="next"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              underlineColorAndroid="transparent"/>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#2c3e50"
              returnKeyType="next"
              secureTextEntry
              underlineColorAndroid="transparent"/>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#2c3e50"
              returnKeyType="go"
              secureTextEntry
              underlineColorAndroid="transparent"/>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={this.register}>
              <Text style={styles.buttonLabel}>Register</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.registerDescription}>or register with</Text>
        </View>
        <View style={styles.extraButtonContainer}>
          <View style={styles.facebookButtonContainer}>
            <TouchableOpacity style={styles.facebookButton} onPress={this.registerFacebook}>
              <Text style={styles.buttonLabel}>Facebook</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.twitterButtonContainer}>
            <TouchableOpacity style={styles.twitterButton} onPress={this.registerTwitter}>
              <Text style={styles.buttonLabel}>Twitter</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    height: '32%'
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 95,
    width: '41%',
    height: '72%'
  },
  formContainer: {
    padding: 10
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonLabel: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#ffffff'
  },
  button: {
    backgroundColor: '#c0392b',
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#c0392b',
    width: '50%'
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
  },
  registerDescription: {
    paddingTop: 10,
    textAlign: 'center',
    color: '#2c3e50'
  },
  facebookButtonContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5
  },
  twitterButtonContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5
  },
  facebookButton: {
    backgroundColor: '#3B5998',
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#3B5998',
    width: '100%'
  },
  twitterButton: {
    backgroundColor: '#1C9BEA',
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#1C9BEA',
    width: '100%'
  },
  extraButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },
  generalInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  },
  secureInfoContainer: {
    // borderColor: 'red', borderWidth: 1
  },
  inputFirstName: {
    width: '47%',
    borderWidth: 1,
    borderRadius: 30,
    height: 40,
    marginRight: 10,
    borderColor: '#3498db',
    paddingHorizontal: 10,
    fontStyle: 'italic'
  },
  inputLastName: {
    width: '47%',
    borderWidth: 1,
    borderRadius: 30,
    height: 40,
    marginLeft: 10,
    borderColor: '#3498db',
    paddingHorizontal: 10,
    fontStyle: 'italic'
  },
  avatarButton: {
    alignItems: 'center',
    padding: '15%'
  }
});