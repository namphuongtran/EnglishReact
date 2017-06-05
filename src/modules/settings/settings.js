import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Settings extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is settings screen</Text>
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