import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
// import {Icon} from 'react-native-elements';
export default class Register extends Component {
  render() {
    register = () => {
      if (true) {
        //register
      }
    }

    registerFacebook = () => {
      if (true) {
        //register by facebook account
      }
    }

    registerGoogle = () => {
      if (true) {
        //register by google plus account
      }
    }

    changeAvatar = () => {
      if (true) {
        //change avatar
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <TouchableOpacity style={styles.avatarButton} onPress={this.changeAvatar}>
              <Image style={styles.camera} source={require('../../../assets/images/camera.png')}/>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.formContainer}>
          <View style={styles.generalInfoContainer}>
            <TextInput
              style={styles.inputFirstName}
              placeholder="First name"
              placeholderTextColor="#2c3e50"
              onSubmitEditing={() => this.inputSurname.focus()}
              returnKeyType="next"
              underlineColorAndroid="transparent"/>
            <TextInput
              style={styles.inputLastName}
              placeholder="Last name"
              placeholderTextColor="#2c3e50"
              onSubmitEditing={() => this.inputEmail.focus()}
              returnKeyType="next"
              underlineColorAndroid="transparent"/>
          </View>
          <View style={styles.secureInfoContainer}>
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
          <View style={styles.googleButtonContainer}>
            <TouchableOpacity style={styles.googleButton} onPress={this.registerGoogle}>
              <Text style={styles.buttonLabel}>Google</Text>
            </TouchableOpacity>            
          </View>
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
    // borderColor: 'red', borderWidth: 1,
    height: '40%'
  },
  avatar: {
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 95,
    width: '50%',
    height: '71%'
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
    backgroundColor: '#2c3e50',
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#2c3e50',
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
  facebookButton: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#3498db',
    width: '100%'
  },
  googleButton: {
    backgroundColor: '#c0392b',
    paddingVertical: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#c0392b',
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
    marginBottom: 20,
    // borderColor: 'red', borderWidth: 1
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
  facebookButtonContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5
  },
  googleButtonContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5
  },
  avatarButton: {
    alignItems: 'center',
    padding: '22%'
  }
});