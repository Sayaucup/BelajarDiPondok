import React, { Component } from 'react';
import {View,Image,TouchableOpacity,StyleSheet,Text} from 'react-native';

class App extends Component{
  render() {
    return (
     <View style={{flex:1}}>
        <View style={{margin:30}}>
            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Tentang')}>
              <View>
              <Image style={{width:'100%',borderRadius:10}} source={require('../asset/ki.png')} />
              </View>
            </TouchableOpacity>
            <View>
              <View style={{ flexDirection:'row', marginTop: 70,marginHorizontal:10,justifyContent:'center'}}>
          
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Sholatt')}>
                  <View style={styles.View}>
                  <View style={styles.View2}>
                    <Image source={require('../asset/sholat.png')} style={{ borderRadius: 8 ,height:60,width:60 }} />

                  </View>
                  <Text style={styles.Text}>
                    Sholat
                </Text>
                </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Dzikir')}>
                  <View style={styles.View}>
                  <View style={styles.View2}>
                    <Image source={require('../asset/dzikir.png')} style={{ borderRadius: 8,height:60,width:60 }} />

                  </View>
                  <Text style={styles.Text}>
                    Dzikir
                </Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('NamaAllah')}>
                <View style={styles.View}>
                  <View style={styles.View2}>
                    <Image source={require('../asset/hu.png')} style={{height:60,width:60}} />
                  </View>
                  <Text style={styles.Text}>
                    Nama Allah
                  </Text>
                </View>
              </TouchableOpacity>
              </View>

              </View>
        </View> 
     </View>
    )
  }
}

export default App

const styles = StyleSheet.create({
  View2: {
    width: 85,
    height: 85,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:2,
    borderRadius:40,
    borderColor:'gray',

  },
  View:{
    borderColor:'gray',
    marginHorizontal: 15,
    marginVertical:10,
    borderRadius: 30 
  },
  Text: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'gray',
  },

})



