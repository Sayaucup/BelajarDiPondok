import React from 'react';
import { Text, View,FlatList,ScrollView,StyleSheet } from 'react-native'

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        data : []
       }
    }
  
    ambildata = () => {
      return fetch('https://muslimapp.000webhostapp.com/MuslimApp/dzikirpagi.json')
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
          kedelepan,
          kesembilan,
          kesepuluh,
          kesebelas,
          keduabelas,
          ketigabelas,
          keempatbelas,
          kelimabelas,
          keenambelas,
          ketujuhbelas,
          kedelapanbelas,
          kesembilanbelas
        } = item
        return(
          <View style={{padding:15}}>
            <ScrollView>
              <Text style={styles.text1}>أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[1] </Text>
              <Text style={styles.text1}>* {pertama}</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[2] </Text>
              <Text style={{fontSize:20,color:'#cc7a16',marginBottom:5}}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</Text>
              <Text style={styles.text1}>* {kedua}</Text>
              <Text style={styles.text1}>(3x)</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[3] </Text>
              <Text style={{fontSize:20,color:'#cc7a16',marginBottom:5}}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</Text>
              <Text style={styles.text1}>* {ketiga}</Text>
              <Text style={styles.text1}>(3x)</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[4] </Text>
              <Text style={{fontSize:20,color:'#cc7a16',marginBottom:5}}>بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</Text>
              <Text style={styles.text1}>* {keempat}</Text>
              <Text style={styles.text1}>(3x)</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[5] </Text>
              <Text style={styles.text1}>* {kelima}</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[6] </Text>
              <Text style={styles.text1}>* {keenam}</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[7] </Text>
              <Text style={styles.text1}>* {ketujuh}</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[8] </Text>
              <Text style={styles.text1}>* {kedelepan}</Text>
              <Text style={styles.text1}>(3x)</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[9] </Text>
              <Text style={styles.text1}>* {kesembilan}</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[10] </Text>
              <Text style={styles.text1}>* {kesepuluh}</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[11] </Text>
              <Text style={styles.text1}>* {kesebelas}</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[12] </Text>
              <Text style={styles.text1}>* {keduabelas}</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[13] </Text>
              <Text style={styles.text1}>* {ketigabelas}</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[14] </Text>
              <Text style={styles.text1}>* {keempatbelas}</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[15] </Text>
              <Text style={styles.text1}>* {kelimabelas}</Text>
              <Text style={styles.text1}>(100x)</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[16] </Text>
              <Text style={styles.text1}>* {keenambelas}</Text>
              <Text style={styles.text1}>(1x)(10x)(100x)</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[17] </Text>
              <Text style={styles.text1}>* {ketujuhbelas}</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[18] </Text>
              <Text style={styles.text1}>* {kedelapanbelas}</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
              <Text style={styles.text2}>[19] </Text>
              <Text style={styles.text1}>* {kesembilanbelas}</Text>
              <Text style={styles.text1}>(100x)</Text>
              <View style={{borderWidth:0.5,borderColor:'#cc7a16',marginVertical:10}}></View>
  
            </ScrollView>
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
              // ListEmptyComponent={this.ListEmptyView}
  
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
  