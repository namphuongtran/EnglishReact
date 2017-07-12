import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';

export default class ForgotPassword extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text>This is forgot password screen</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1'
    }
});