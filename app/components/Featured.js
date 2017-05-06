import React,{Component} from 'react';
import {styles} from '../styles/Main';
import MovieList from './MovieList';
import {
    Text,
    View,
    NavigatorIOS,
} from 'react-native';

class Featured extends React.Component {
  render(){
    return (
      <NavigatorIOS
        style={{flex:1}}
        initialRoute={{
        title:'推荐电影',
        component:MovieList
      }}
        shadowHidden={true}
        barTintColor="#9c27b0"
        titleTextColor="rgba(255,255,255,.8)"
        translucent={true}
     />
    )
  }
}
export default Featured
