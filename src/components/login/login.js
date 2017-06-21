import React, {Component} from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    TouchableOpacity,
    Text,
    StatusBar,
    KeyboardAvoidingView,
    Image
} from 'react-native';
import Grammar from '../grammarEnglish/grammar';
import Register from '../account/register';
import ForgotPassword from '../account/forgotPassword';

export default class Login extends Component {

    goHome = () => {
        if (true) {
            this
                .props
                .navigation
                .navigate('Grammar');
        }
    };

    goRegister = () => {
        this
            .props
            .navigation
            .navigate('Register');
    };

    goForgot = () => {
        this
            .props
            .navigation
            .navigate('ForgotPassword');
    };

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../../../assets/images/logo.png')}/>
                </View>
                <View style={styles.formContainer}>
                    <StatusBar barStyle="light-content"/>
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
                    <View style={styles.loginContainer}>
                        <TouchableOpacity style={styles.loginButtonContainer} onPress={this.goHome}>
                            <Text style={styles.buttonLabel}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.forgotConatiner}>
                        <TouchableOpacity style={styles.forgotButtonContainer} onPress={this.goForgot}>
                            <Text style={styles.forgotButtonLabel}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerContainer}>
                        <TouchableOpacity
                            style={styles.registerButtonContainer}
                            onPress={this.goRegister}>
                            <Text style={styles.buttonLabel}>Register</Text>
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
        backgroundColor: '#fff'
    },
    logo: {
        width: 250,
        height: 120
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    formContainer: {
        padding: 20
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
    loginContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginButtonContainer: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#3498db',
        width: '50%'
    },
    buttonLabel: {
        textAlign: 'center',
        fontWeight: '700',
        color: '#ffffff'
    },
    forgotButtonLabel: {
        textAlign: 'center',
        fontWeight: '700',
        color: '#2c3e50'
    },
    registerContainer: {
        paddingTop: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    registerButtonContainer: {
        backgroundColor: '#c0392b',
        paddingVertical: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#c0392b',
        width: '50%'
    },
    forgotConatiner: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    forgotButtonContainer: {
        paddingTop: 10,
        width: '50%'
    }
});
