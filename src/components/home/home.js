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
import Login from '../login/login';
import Register from '../account/register';
import ForgotPassword from '../account/forgotPassword';
import Grammar from '../grammarEnglish/grammar';
import Academic from '../academicEnglish/academic';
import Favorites from '../favorites/favorites';
import Settings from '../../modules/settings/settings';
import About from './about';
import AccountInfo from '../account/info';
import News from '../news/news';

export const Tabs = TabNavigator({
    Grammar: {
        screen: Grammar,
        navigationOptions: {
            tabBarLabel: 'Grammar',
            tabBarIcon: (<Icon name="assignment" size={24} color="#900"/>)
        }
    },
    Academic: {
        screen: Academic,
        navigationOptions: {
            tabBarLabel: 'Academic',
            tabBarIcon: (<Icon name="dashboard" size={24} color="#8e44ad"/>)
        }
    },
    News: {
        screen: News,
        navigationOptions: {
            tabBarLabel: 'News',
            tabBarIcon: (<Icon name="dvr" size={24} color="#34A853"/>)
        }
    },
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: (<Icon name="favorite" size={24} color="#16a085"/>)
        }
    },
    AccountInfo: {
        screen: AccountInfo,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: (<Icon name="account-circle" size={24} color="#FBBC05"/>)
        }
    }
}, {
    initialRouteName: 'Grammar',
    tabBarPosition: 'bottom',
    lazyLoad: true, // render the tabs lazily
    backBehavior: 'none', // back button doesn't take you to the initial tab
    tabBarOptions: {
        activeTintColor: '#2c3e50',
        inactiveTintColor: 'blue',
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'white',
        labelStyle: {
            fontSize: 11,
            margin: 0
        },
        tabStyle: {
            height: 45,
            margin: 0
        },
        style: {
            backgroundColor: '#ffffff',
            borderTopColor: 'blue',
            borderTopWidth: 0.5
        },
        upperCaseLabel: false,
        showIcon: true,
        indicatorStyle: {
            backgroundColor: 'red'
        }
    }
});

const ACCESS_TOKEN = 'access_token';

export class InitScene extends Component {

    constructor() {
        super();
        this.getToken();
    }

    async getToken() {
        let _this = this;
        try {
            const value = await AsyncStorage.getItem(ACCESS_TOKEN);
            if (value !== null) {
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
        } catch (error) {
            console.log('Error retrieving data, can not get data access token.');
        }
    };

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

const customComponent = (props) => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            {/*<Image style={styles.logo} source={require('../../../assets/images/logo.png')}/>*/}
            <Icon name="account-circle" size={100} color="#8e44ad"/>
        </View>
        <View style={styles.body}>
            <DrawerItems {...props}/>
        </View>
    </View>
);

export const Root = DrawerNavigator({
    HomeRoute: {
        screen: Main,
        navigationOptions: {
            drawerLabel: 'Main App',
            drawerIcon: (<Icon name="dashboard" size={24} color="#8e44ad"/>)
        }
    },
    SettingsRoute: {
        screen: Settings,
        navigationOptions: {
            drawerLabel: 'Settings',
            drawerIcon: (<Icon name="settings" size={24} color="#8e44ad"/>)
        }
    },
    AboutRoute: {
        screen: About,
        navigationOptions: {
            drawerLabel: 'About Academic English',
            drawerIcon: (<Icon name="info" size={24} color="#8e44ad"/>)
        }
    }
}, {
    contentComponent: customComponent,
    initialRouteName: 'HomeRoute',
    drawerPosition: 'left',
    contentOptions: {
        activeBackgroundColor: '#ffffff',
        inactiveBackgroundColor: '#ffffff',
        activeTintColor: '#2c3e50',
        inactiveTintColor: '#2980b9',
        labelStyle: {
            fontFamily: 'Arial',
            fontSize: 12
        },
        style: {
            marginVertical: 0,
            backgroundColor: '#ffffff'
        }
    }
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