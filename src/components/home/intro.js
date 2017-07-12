import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Intro extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.backgroundScreen}
                    source={require('../../../assets/images/about.jpg')}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.facebookButton}>
                            <Icon style={styles.facebookButtonIcon} size={30} name="facebook"/>
                            <Text style={styles.facebookButtonLabel}>CONTINUE WITH FACEBOOK</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.googleButton}>
                            <Icon style={styles.googleButtonIcon} size={30} name="google"/>
                            <Text style={styles.googleButtonLabel}>CONTINUE WITH GOOGLE</Text>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1'
    },
    backgroundScreen: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        padding: 10
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    facebookButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#3B5998',
        width:'60%'
    },
    facebookButtonIcon: {
        color: '#fff',
        padding: 10
    },
    facebookButtonLabel: {
        color: '#fff',
        paddingLeft: 0,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 10
    },
    googleButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        width:'60%'
    },
    googleButtonIcon: {
        color: '#c0392b',
        padding: 10
    },
    googleButtonLabel: {
        color: '#7f8c8d',
        paddingLeft: 0,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 10
    }
});