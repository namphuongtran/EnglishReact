import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import {List, ListItem} from 'react-native-elements';
import {academicCates} from '../../data/data';
import Speaking from './speaking';

export default class Academic extends Component {

  onLearnMore = (academicCate) => {
    console.log(academicCate);
    console.log(this);
    this.props.navigation.navigate('Speaking',{...academicCate});
  }

  render() {
    return (
      <View style={styles.container}>        
        <ScrollView>
          <List>
            {academicCates.map((academicCate) => (<ListItem
              key={academicCate.id}
              title={`${academicCate
              .name
              .toUpperCase()}`}
              subtitle={academicCate.description}
              onPress={() => this.onLearnMore(academicCate)}/>))}
          </List>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },  
  headerLabel:{
    fontFamily: 'Arial',
    color: '#000000',
    fontSize: 19,
    fontWeight:'bold'
  }
});