import React, { Component } from 'react';
import { 
    View,
    Text,
    TextInput,
    ScrollView,
    Image,
    } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''}
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40,borderWidth:1,borderColor:'black',borderRadius:10,paddingHorizontal:15}}
          placeholder="Type here !"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} />
        
        <Text style={{padding:5, fontSize: 35}}>
          {this.state.text}
        </Text>
        <Image source={require('../me.jpg')} style={{ height: 100, width: 100, marginBottom: 20 }} />
        
        <ScrollView>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            <Text>contoh scroolView</Text>
            
        
        </ScrollView>    

      </View>
    );
  }
}

