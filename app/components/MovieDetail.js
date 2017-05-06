import React,{Component} from 'react';
import {
    Text,
    View,
    Image,
    ListView,
    ActivityIndicator,  //加载时的转动圆圈圈
    TouchableHighlight, //按下时，封装的视图的不透明度会降低(只支持一个子节点)
} from 'react-native';
import {styles} from '../styles/Main';

class MovieDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movieDetail:''
    };
    const REQUST_URL = `https://api.douban.com/v2/movie/subject/${this.props.movie.id}`;
    this.fetchData(REQUST_URL);
  }
  fetchData(REQUST_URL){
    fetch(REQUST_URL)
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        movieDetail:responseJson
      });
    })
    .done();
  }
  render(){
    if (!this.state.movieDetail){
      return (
        <View style={styles.container}>
            <View style={styles.loading}>
              <ActivityIndicator size="large" color="#6435c9"/>
            </View>
        </View>
      )
    }
    let movie = this.state.movieDetail;
    let summary = movie.summary.split('\n').map((p,index)=>{
      return (
        <View style={{marginBottom:10}} key={index}>
          <Text style={styles.itemText}>{p}</Text>
        </View>
      )
    });
    return (
      <View style={[styles.container,{paddingTop:70}]}>
        <View style={[styles.item,{flexDirection:'column'}]}>
          {summary}
        </View>
      </View>
    )
  }
}
export default MovieDetail
