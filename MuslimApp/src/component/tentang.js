import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
 
} from 'react-native';

class App extends Component  {
    render() {
        return (
            <View>
                <View style={{alignItems:'center',marginTop:40}}>
                    <Image source={require('../asset/name.jpg')} style={{ height: 150, width: 150, borderRadius: 100, borderWidth: 2, borderColor: 'lightgray' }} />
                </View>
                <View>
                    <View style={{borderRadius:10,marginHorizontal:50,borderWidth:1,borderColor:'black',height:55,marginTop:50,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:25}}>Nama : Yusuf Hadi</Text>
                    </View>
                </View>
                <View>
                    <View style={{borderRadius:10,marginHorizontal:50,borderWidth:1,borderColor:'black',height:55,marginTop:10,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:25}}>Lahir : Jakarta</Text>
                    </View>
                </View>
                <View>
                    <View style={{borderRadius:10,marginHorizontal:50,borderWidth:1,borderColor:'black',height:55,marginTop:10,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:25}}>React-Native</Text>
                    </View>
                </View>
                
            </View>
        )
    }
}

export default App;
