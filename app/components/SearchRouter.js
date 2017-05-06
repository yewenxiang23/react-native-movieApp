import React,{Component} from 'react';
import {Text,NavigatorIOS} from 'react-native';
import {styles} from '../styles/Main.js';
import SearchForm from './SearchForm';
class SearchRouter extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    return (
      <NavigatorIOS
        style={{flex:1}}
        initialRoute={{
        title:'搜索电影',
        component:SearchForm
      }}
        shadowHidden={true}
        barTintColor="#9c27b0"
        titleTextColor="rgba(255,255,255,.8)"
        translucent={true}
     />
    )
  }
}
export default SearchRouter
