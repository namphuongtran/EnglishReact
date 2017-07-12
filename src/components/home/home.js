import React, {Component} from 'react';
import {
    Button,
    ScrollView,
    View,
    StyleSheet,
    Image,
    AsyncStorage,
    Text
} from 'react-native';
import {DrawerNavigator, DrawerItems, TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Helper from '../../common/helper';
import Login from '../../modules/account/login';
import Register from '../../modules/account/register';
import ForgotPassword from '../../modules/account/forgotPassword';
import Grammar from '../../modules/grammar/grammar';
import Academic from '../../modules/academic/academic';
import Favorites from '../../modules/favorites/favorites';
import Setting from '../../modules/setting/setting';
import About from '../../modules/home/about';
import AccountInfo from '../../modules/account/info';
import News from '../../modules/news/news';


export class InitScene extends Component {

    constructor() {
        super();
        let _this = this;

        Helper
            .getToken()
            .then((token) => {
                if (token !== null || token !== undefined) {
                    setTimeout(function () {
                        _this
                            .props
                            .navigation
                            .navigate('Grammar');
                    }, 50);
                } else {
                    setTimeout(function () {
                        _this
                            .props
                            .navigation
                            .navigate('Login');
                    }, 50);
                }
            });
    }

    render() {
        return null;
    };
}

export const Main = StackNavigator({
    InitScene: {
        screen: InitScene
    },
    Login: {
        screen: Login
    },
    ForgotPassword: {
        screen: ForgotPassword
    },
    Register: {
        screen: Register
    },
    Tabs: {
        screen: Tabs
    }
}, {
    initialRouteName: 'InitScene',
    mode: 'modal',
    headerMode: 'none'
});

export default class Home extends Component {

    render() {
        return (<Root/>);
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECF0F1'
    },
    logoContainer: {
        height: '15%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#ccc'
    },
    logo: {
        width: 200,
        height: 100
    },
    body: {}
});