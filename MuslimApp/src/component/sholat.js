import React from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet
} from 'react-native'

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator} from 'react-navigation-tabs';


class Sholats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data1 : []
     }
  }
  ambildata1 = () => {
    return fetch('https://muslimapp.000webhostapp.com/MuslimApp/bacaanshoolat.json')
    .then((respose1) => respose1.json())
    .then((resposeJson1) => {
      console.log(resposeJson1)
      this.setState({
        data1 : resposeJson1
      })
    } )
    .catch((error) => console.log(error))
  }

  componentDidMount(){
    this.ambildata1()
  }

  renderItems = ({item}) => {
    const {
      takbir,
      ruku,
      itidal,
      sujud,
      duduk,
      tasyahudawal,
      shalawatnabi,
      doaperlindungan4perkara} = item
    return(
      <View style={{padding:15}}>
        <ScrollView>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>1 . Takbiratul Ikhram : </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{takbir}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>2 . Ruku : </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{ruku}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>3 . Itidal : </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{itidal}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>4 . Sujud : </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{sujud}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>5 . Duduk diantara 2 sujud : </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{duduk}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>6 . Tasyahud Awal : </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{tasyahudawal}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>7 . Shalawat kepada nabi : </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{shalawatnabi}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>8 . Doa Perlindungan kepada Allah dari empat perkara : </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{doaperlindungan4perkara}</Text>
        </ScrollView>
      </View>
    ) 
  }

  render() {
    return (
      <View>
          <FlatList
            data = {this.state.data1}
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            keyExtractor={item1 => item1.toString()}
            renderItem={this.renderItems}/>
      </View>
    )
  }
}

class dzikirSholat extends React.Component {
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
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>[1] </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{pertama}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>[2] </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{kedua}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>[3] </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{ketiga}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>[4] </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{keempat}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>[5] </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{kelima}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>[6] </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{keenam}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>[7] </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{ketujuh}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>[8] </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{kedelapan}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>[9] </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{kesembilan}</Text>
          <View style={{borderWidth:1,borderColor:'#ccc',marginVertical:10}}></View>
          <Text style={{fontSize:20,fontWeight:'bold',color:'gray'}}>[10] </Text>
          <Text style={{fontSize:20,color:'gray',marginTop:5}}>{kesepuluh}</Text>
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

const TabNavigator = createMaterialTopTabNavigator({
 BacaanSholat:Sholats,
 DzikirSesudahSholat:dzikirSholat

})

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  icon:{
      height: 30,
      width: 30,
  },
  text1: {
    fontSize:20,
    fontWeight:'bold',
    color:'gray'
  },
  text2: {
    fontSize:20,
    color:'gray',
    marginTop:5
  }
})