import React, { Component } from 'react';
import { StyleSheet, Alert, Button, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

const App = () => {
  return(
    <View>
      <View style={styles.view}>
        <TouchableHighlight>
          <Button title='TouchableHighlight' onPress={() => Alert.alert('TouchableHighlight')} />
        </TouchableHighlight>
      </View>
      <View style={styles.view}>
        <TouchableOpacity>
          <Button title='TouchableOpacity' onPress={() => Alert.alert('TouchableOpacity')} />
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <TouchableNativeFeedback>
          <Button title='TouchableNativeFeedback' onPress={() => Alert.alert('TouchableNativeFeedback')} />
        </TouchableNativeFeedback>
      </View>
      <View style={styles.view}>
        <TouchableWithoutFeedback>
          <Button title='TouchableWithoutFeedback' onPress={() => Alert.alert('TouchableWithoutFeedback')} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  view :{
    marginHorizontal:10,
    marginVertical:10
  }
})