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

export default class News extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar}/>
                </View>
                <View style={styles.generalInfo}>
                    <View style={styles.infoItem}>
                        <Text>First Name:</Text>
                        <Text>Gil</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text>Last Name:</Text>
                        <Text>Adi</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text>Phone:</Text>
                        <Text>0945310653</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <Text>Email:</Text>
                        <Text>bolatatcaa@gmail.com</Text>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1'
    },
    generalInfo:{

    },
    infoItem:{

    }
});