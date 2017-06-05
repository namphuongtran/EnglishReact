import React, {Component} from 'react';
import {Button, ScrollView, View, StyleSheet} from 'react-native';
import {DrawerNavigator, DrawerItems, TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from '../login/login';
import Register from '../account/register';
import ForgotPassword from '../account/forgotPassword';
import Grammar from '../grammarEnglish/grammar';
import Academic from '../academicEnglish/academic';
import Favorites from '../favorites/favorites';
import Settings from '../../modules/settings/settings';

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
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            tabBarIcon: (<Icon name="favorite" size={24} color="#16a085"/>)
        }
    }
}, {
    tabBarPosition: 'bottom',
    lazyLoad: true, // render the tabs lazily
    backBehavior: 'none', // back button doesn't take you to the initial tab
    tabBarOptions: {
        activeTintColor: '#2c3e50',
        inactiveTintColor: 'blue',
        activeBackgroundColor: 'blue',
        inactiveBackgroundColor: 'white',
        labelStyle: {
            fontSize: 10
        },
        tabStyle: {
            height: 45
        },
        style: {
            backgroundColor: '#ffffff'
        },
        upperCaseLabel: false,
        showIcon: true
    }
});

export const Main = StackNavigator({
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
    initialRouteName: 'Login',
    mode: 'modal',
    headerMode: 'none'
});

const customComponent = (props) => (
    <View style={styles.container}>
        <DrawerItems {...props}/>
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
    }
}, {
    contentComponent: customComponent,
    initialRouteName: 'HomeRoute',
    drawerPosition: 'left',
    contentOptions: {
        activeBackgroundColor: '#ffffff',
        inactiveBackgroundColor: '#ecf0f1',
        activeTintColor: '#2c3e50',
        inactiveTintColor: 'blue',
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
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bdc3c7'
    }
});