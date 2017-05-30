import React, {Component} from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Icon} from 'react-native-elements';
import Login from '../login/login';
import Register from '../register/register';
import Grammar from '../grammarEnglish/grammar';
import Academic from '../academicEnglish/academic';

export const Tabs = TabNavigator({
    Grammar: {
        screen: Grammar,
        navigationOptions: {
            tabBarLabel: 'Grammar English',
            tabBarIcon: ({tintColor}) => <Icon name="list" size={35} color={tintColor}/>
        }
    },
    Academic: {
        screen: Academic,
        navigationOptions: {
            tabBarLabel: 'Academic English',
            tabBarIcon: ({tintColor}) => <Icon name="account-circle" size={35} color={tintColor}/>
        }
    }
}, {tabBarPosition: 'bottom'});

export const Root = StackNavigator({
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
    Tabs: {
        screen: Tabs
    }

}, {
    mode: 'modal',
    headerMode: 'none'
});

export default class Home extends Component {
    render() {
        return (<Root/>);
    }
}