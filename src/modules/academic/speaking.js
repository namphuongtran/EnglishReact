import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {betterSpeaking} from '../../data/data';
import SpeakingDetails from './speakingDetails';

export default class Speaking extends Component {

    onLearnMore = (dataSource) => {
        console.log(dataSource);
        console.log(this);
        this
            .props
            .navigation
            .navigate('SpeakingDetails', {
                ...dataSource
            });
    }

    render() {
        let dataSource = null;
        let academicId = this.props.navigation.state.params.id;
        console.log(academicId);
        if (academicId == 1) 
            dataSource = betterSpeaking;
        
        return (
            <View style={styles.container}>               
                <ScrollView>
                    <List>
                        {dataSource.map((dataSource) => (<ListItem
                            key={dataSource.id}
                            title={`${dataSource
                            .name
                            .toUpperCase()}`}
                            onPress={() => this.onLearnMore(dataSource)}/>))}
                    </List>
                </ScrollView>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        paddingTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerLabel: {
        fontFamily: 'Arial',
        color: '#000000',
        fontSize: 19,
        fontWeight: 'bold'
    }
});