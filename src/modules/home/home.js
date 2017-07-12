import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {DrawerNavigator, DrawerItems, TabNavigator, StackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Grammar from '../grammar/grammar';
import Academic from '../academic/academic';
import Favorites from '../favorites/favorites';
import Setting from '../setting/setting';
import About from '../home/about';
import AccountInfo from '../account/info';
import News from '../news/news';
import Speaking from '../academic/speaking';

export const AcademicStack = StackNavigator({
    Academic: {
        screen: Academic,
        navigationOptions: {
            title: 'Academic English in Speaking'
        }
    },
    Speaking: {
        screen: Speaking,
        navigationOptions: ({navigation}) => ({
            title: `${navigation
                .state
                .params
                .description
                .toUpperCase()}`
        })
    }
});

export const Main = TabNavigator({
    Grammar: {
        screen: Grammar,
        navigationOptions: {
            tabBarLabel: 'Grammar',
            tabBarIcon: (<Icon name="assignment" size={24} color="#900"/>)
        }
    },
    Academic: {
        screen: AcademicStack,
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

const customComponent = (props) => (
    <View style={styles.container}>
        {/* <Image
             style={styles.backgroundScreen}
             source={require('../../../assets/images/about-background.jpeg')}>
         </Image>*/}
        <View style={styles.headerContainer}>
            <View style={styles.avatar}>
                <Icon name="account-circle" size={100} color="#ecf0f1"/>
            </View>
            <View style={styles.accountInfo}>
                <Text style={styles.infoLabel}>littlegiladi@gmail.com</Text>
                <Text style={styles.infoLabel}>Gil Adi</Text>
            </View>
        </View>
        <View style={styles.body}>
            <DrawerItems {...props}/>
        </View>
    </View>
);

export const Root = DrawerNavigator({
    Home: {
        screen: Main,
        navigationOptions: {
            drawerLabel: 'Main App',
            drawerIcon: (<Icon name="dashboard" size={24} color="#8e44ad"/>)
        }
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
            drawerLabel: 'Settings',
            drawerIcon: (<Icon name="settings" size={24} color="#8e44ad"/>)
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            drawerLabel: 'About Academic English',
            drawerIcon: (<Icon name="info" size={24} color="#8e44ad"/>)
        }
    }
}, {
    contentComponent: customComponent,
    initialRouteName: 'Home',
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
    headerContainer: {
        height: '15%',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#ccc'
    },
    avatar: {
        width: '40%'
    },
    accountInfo: {
        width: '60%'
    },
    backgroundScreen: {
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    infoLabel: {
        color: '#000',
        fontFamily: 'Arial',
        fontSize: 12
    }
});