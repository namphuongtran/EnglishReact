import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class About extends Component {
    gotoWeb = () => {
        Linking
            .canOpenURL('http://google.com')
            .then(supported => {
                if (supported) {
                    Linking.openURL('http://google.com');
                } else {
                    console.log('Don\'t know how to open URI: http://google.com');
                }
            });
    };

    gotoFacebook = () => {
        Linking
            .canOpenURL('https://www.facebook.com/nongsansachhanoi/')
            .then(supported => {
                if (supported) {
                    Linking.openURL('https://www.facebook.com/nongsansachhanoi/');
                } else {
                    console.log('Don\'t know how to open URI: http://google.com');
                }
            });
    };

    gotoTwitter = () => {
        Linking
            .canOpenURL('http://google.com')
            .then(supported => {
                if (supported) {
                    Linking.openURL('http://google.com');
                } else {
                    console.log('Don\'t know how to open URI: http://google.com');
                }
            });
    };

    gotoLinedin = () => {
        Linking
            .canOpenURL('http://google.com')
            .then(supported => {
                if (supported) {
                    Linking.openURL('http://google.com');
                } else {
                    console.log('Don\'t know how to open URI: http://google.com');
                }
            });
    };

    gotoGoogle = () => {
        Linking
            .canOpenURL('http://google.com')
            .then(supported => {
                if (supported) {
                    Linking.openURL('http://google.com');
                } else {
                    console.log('Don\'t know how to open URI: http://google.com');
                }
            });
    };

    gotoInstagram = () => {
        Linking
            .canOpenURL('http://google.com')
            .then(supported => {
                if (supported) {
                    Linking.openURL('http://google.com');
                } else {
                    console.log('Don\'t know how to open URI: http://google.com');
                }
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.backgroundScreen}
                    source={require('../../../assets/images/about.jpg')}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require('../../../assets/images/logo.png')}/>
                        <Text style={styles.slogan}>Gateway to success in Academic English!</Text>
                    </View>
                    <View style={styles.versionContainer}>
                        <Text style={styles.version}>Version 1.0.01</Text>
                    </View>
                    <View style={styles.socialMediaContainer}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.gotoFacebook}>
                            <Icon name="facebook" size={30} color="#3b5998"></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.gotoTwitter}>
                            <Icon name="twitter" size={30} color="#3498db"></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.gotoLinedin}>
                            <Icon name="linkedin" size={30} color="#0077B5"></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.gotoGoogle}>
                            <Icon name="google" size={30} color="#c0392b"></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer} onPress={this.gotoInstagram}>
                            <Icon name="instagram" size={30} color="#D82F7F"></Icon>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.versionContainer}>
                        <TouchableOpacity onPress={this.gotoWeb}>
                            <Text style={styles.version}>academicenglish.com.vn</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.aboutInfo}>
                        <Text style={styles.footerTitle}>© {new Date().getFullYear() - 1}
                            - {new Date().getFullYear()}
                            Academic English
                        </Text>
                    </View>
                </Image>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    backgroundScreen: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
        padding: 10
    },
    logo: {
        width: 250,
        height: 120
    },
    logoContainer: {
        alignItems: 'center'
    },
    slogan: {
        paddingTop: 70,
        fontSize: 20,
        fontStyle: 'italic'
    },
    socialMediaContainer: {
        paddingTop: '50%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    versionContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 35
    },
    version: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonContainer: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        minWidth: '15%',
        borderColor: '#ececec',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 3,
    },
    aboutInfo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    footerTitle: {
        fontWeight: 'bold'
    }
});