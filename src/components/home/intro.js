import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Intro extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is introduction screen</Text>
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