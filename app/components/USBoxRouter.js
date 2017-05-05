import React,{Component} from 'react';
import {styles} from '../styles/Main';
import USBoxList from './USBoxList';
import {
    Text,
    View,
    NavigatorIOS,
} from 'react-native';

class USBoxRouter extends React.Component {
  render(){
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
        title:'北美电影',
        component:USBoxList
      }}
        shadowHidden={true}
        barTintColor="#9c27b0"
        titleTextColor="rgba(255,255,255,.8)"
        translucent={true}
     />
    )
  }
}
export default USBoxRouter
