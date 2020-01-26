import React from 'react';
import { Text, View,FlatList,StyleSheet  } from 'react-native'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        data : []
       }
    }
    ambildata = () => {
      return fetch('https://muslimapp.000webhostapp.com/MuslimApp/dzikirshoolat.json')
      .then((respose) => respose.json())
      .then((resposeJson) => {
        console.log(resposeJson)
        this.setState({
          data : resposeJson
        })
      } )
      .catch((error) => console.log(error))
    }
    componentDidMount(){
      this.ambildata()
    }
    renderItems = ({item}) => {
        const {
          pertama,
          kedua,
          ketiga,
          keempat,
          kelima,
          keenam,
          ketujuh,
          kedelapan,
          kesembilan,
          kesepuluh
        } = item
        return(
          <View style={{padding:15}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#cc7a16'}}>[1] </Text>
            <Text style={{fontSize:20,color:'#cc7a16',marginTop:5}}>* {pertama}</Text>
            <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#cc7a16'}}>[2] </Text>
            <Text style={{fontSize:20,color:'#cc7a16',marginTop:5}}>* {kedua}</Text>
            <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#cc7a16'}}>[3] </Text>
            <Text style={{fontSize:20,color:'#cc7a16',marginTop:5}}>* {ketiga}</Text>
            <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#cc7a16'}}>[4] </Text>
            <Text style={{fontSize:20,color:'#cc7a16',marginTop:5}}>* {keempat}</Text>
            <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#cc7a16'}}>[5] </Text>
            <Text style={{fontSize:20,color:'#cc7a16',marginTop:5}}>* {kelima}</Text>
            <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#cc7a16'}}>[6] </Text>
            <Text style={{fontSize:20,color:'#cc7a16',marginTop:5}}>* {keenam}</Text>
            <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#cc7a16'}}>[7] </Text>
            <Text style={{fontSize:20,color:'#cc7a16',marginTop:5}}>* {ketujuh}</Text>
            <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#cc7a16'}}>[8] </Text>
            <Text style={{fontSize:20,color:'#cc7a16',marginTop:5}}>* {kedelapan}</Text>
            <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#cc7a16'}}>[9] </Text>
            <Text style={{fontSize:20,color:'#cc7a16',marginTop:5}}>* {kesembilan}</Text>
            <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#cc7a16'}}>[10] </Text>
            <Text style={{fontSize:20,color:'#cc7a16',marginTop:5}}>* {kesepuluh}</Text>
          </View>
        )
     
    }
  
  
    render() {
      return (
        <View>
        <FlatList
          data = {this.state.data}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          keyExtractor={item => item.toString()}
          renderItem={this.renderItems}
  
        />
    </View>
      );
    }
  }

export default App

const styles = StyleSheet.create({
    icon:{
        height: 30,
        width: 30,
    },
    text1: {
      fontSize:20,
      color:'#cc7a16'
    },
    text2: {
      fontSize:20,
      color:'#cc7a16',
      fontWeight:'bold',
      marginTop:5
    }
  })