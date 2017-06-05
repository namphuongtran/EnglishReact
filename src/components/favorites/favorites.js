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

export default class Favorites extends Component {    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>This is favorites screen</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1'
    },
    header: {
        alignItems:'center',
        justifyContent:'center'
    }    
});
