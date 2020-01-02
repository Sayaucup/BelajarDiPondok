import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.item}>Akun</Text>
          <Text style={{fontSize:15,color:'gray',paddingHorizontal:20,paddingBottom:15}}>Data Diri, Alamat, Dan Keamanan Akun</Text>
          <View style={{borderBottomWidth:1,borderColor:'gray',marginLeft:20}}></View>
        </View>
        <View style={styles.container}>
          <Text style={{fontSize:18,paddingHorizontal:20,paddingBottom:15}}>Review Aplikasi</Text>
          <View style={{borderBottomWidth:1,borderColor:'gray',marginLeft:20}}></View>

        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingVertical:10
  },
  item: {
    paddingHorizontal: 20,
    fontSize: 18,
  },
})
