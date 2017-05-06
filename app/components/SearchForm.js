import React from 'react';
import {View,Text,TextInput,ActivityIndicator} from 'react-native';
import {styles} from '../styles/Main';
import SearchResult from './SearchResult';
class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      query:'',
      show:false,
    }
  }
  fetchData(){
    this.setState({
      show:true,
    })
    const REQUST_URL = `https://api.douban.com/v2/movie/search?q=${this.state.query}`
    fetch(REQUST_URL)
    .then((response)=>response.json())
    .then((responseJson)=>{
      this.setState({
        show:false,
      })
      this.props.navigator.push({
        title:responseJson.title,
        component:SearchResult,
        passProps:{
          results:responseJson.subjects
        }
      })
    })
    .done();
  }
  render(){
    let IsShowActivityIndicator = this.state.show?(
      <ActivityIndicator size="small" color="#6435c9" style={{
        position:'absolute',
        right:10,
        top:20,
      }} animating={true}/>
    ):null
    return (
      <View style={{paddingTop:60}}>
        <View style={{paddingTop:7,paddingLeft:7,paddingRight:7,borderColor:'rgba(100,53,201,.1)',borderBottomWidth:1}}>
          <TextInput
            style={{height:50}}
            placeholder="搜索..."
            placeholderTextColor="#6435c9"
            // autoFocus={true} 文本框默认会选中
            autoCorrect={true} //打开或者关闭自动修正
            keyboardType="web-search" //弹出哪种类型的虚拟键盘
            clearButtonMode="while-editing" //ios专用编辑后有个清空叉叉
            clearTextOnFocus={true} //每次聚焦后会清除文本框以前编辑的内容
            //enablesReturnKeyAutomatically={true} true 键盘会在文本框没有内容的时候禁用回车键
            returnKeyType="next" //定义回车键上的文字内容
            onChangeText={(query) => {
              this.setState({
                query
              });
            }}
            onSubmitEditing={this.fetchData.bind(this)}
          />
          {IsShowActivityIndicator}
        </View>
      </View>
    )
  }
}
export default SearchForm
