import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    AsyncStorage,
    Image
} from 'react-native';
import Login from '../login/login';

const ACCESS_TOKEN = 'access_token';

export default class AccountInfo extends Component {

    logout = () => {        
        this.removeToken();
        this
            .props
            .navigation
            .navigate('Login');
    };

    async removeToken() {
        try {
            await AsyncStorage.removeItem(ACCESS_TOKEN);
        } catch (error) {
            console.log('Can not remove data access token.');
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar}/>
                </View>
                <View style={styles.generalInfo}>
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>First Name:</Text>
                        <Text style={styles.value}>Gil</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>Last Name:</Text>
                        <Text style={styles.value}>Adi</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>Phone:</Text>
                        <Text style={styles.value}>0945310653</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>Email:</Text>
                        <Text style={styles.value}>bolatatcaa@gmail.com</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.logout} style={styles.logoutButton}>
                        <Text style={styles.labelButton}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutButton: {
        backgroundColor: '#2980b9',
        padding: 20
    },
    labelButton: {
        color: '#fff',
        fontWeight: 'bold'
    },
    infoItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20
    },
    label: {
        width: '25%'
    },
    value: {
        width: '75%'
    }
});