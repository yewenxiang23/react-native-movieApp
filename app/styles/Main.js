import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    itemText:{
      fontSize:14,
      fontFamily:'Helvetica Neue',
      fontWeight:'300',
      color:'rgba(0,0,0,.8)',
      lineHeight:26,
      padding:10
    },
    item:{
      flexDirection:'row',
      flex:1,
      borderBottomWidth:1,
      borderColor:'rgba(100,53,201,0.1)',
      paddingBottom:6,
      paddingTop:6,
    },
    itemContent:{
      flex:1,
      marginLeft:13,
      marginTop:6,
    },
    loading:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    },
    image:{
      width:99,
      height:138,
      margin:6,
    },
    itemHeader:{
      fontSize:18,
      fontFamily:'Helvetica Neue',
      fontWeight:'300',
      color:'#6435c9',
      marginBottom:6,
    },
    itemMeta:{
      fontSize:16,
      color:'rgba(0,0,0,0.6)',
      marginBottom:6,
    },
    redText:{
      color:'#db2828',
      fontSize:15,
    },
    container: {
        flexDirection:'row',
        flex: 1,
        backgroundColor: '#eae7ff',
    },
});
