import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList,AsyncStorage,Image} from 'react-native'
import {SvgUri} from 'react-native-svg'
import Floating from 'react-native-action-button'

class App extends Component{
    constructor(props){
        super(props)
        this.state={
           avatar:''

        }
    }
    
    componentDidMount(){
        AsyncStorage.getItem('avatar').then (value =>{
            if (value != null){
                this.setState({avatar:value})
            }
        })
    }
    Icon = () => {
        this.props.navigation.navigate('Setting')
    }
    contact = () => {
        this.props.navigation.navigate('Contact')
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#e3e3e3'}}>
                <View style={{flexDirection:'row',margin:10}}>
                    <Text style={{fontSize:25,color:'#1a1a3b',fontWeight:'bold'}}>Mimo Chat</Text>
                    <TouchableOpacity onPress={this.Icon}>
                        <View style={{marginLeft:230,justifyContent:'center',alignItems:'center',elevation:10,borderColor:'#f7f5f5',borderRadius:100,width:30,height:30,backgroundColor:'white'}}>
                            <SvgUri height='20' width='20' uri={this.state.avatar}/>
                            {/* <Image source={require('../asset/ucup.jpeg')} style={{borderRadius:15,width:25,height:25}} /> */}
                        </View>
                    </TouchableOpacity>
                    
                </View>
                <Floating onPress={this.contact} buttonColor='#1a1a3b'/>
                    
            </View>
        )
    }
    
}
export default App

const styles = StyleSheet.create ({
    
    view: {
        borderColor:'gray',
        borderWidth:1,
        borderRadius:10,
        marginTop:2,
        marginHorizontal:5,
    },
    nama: {
        fontSize:20,
        color:'#1a1a3b',
        marginLeft:15,
        marginTop:15,
        fontWeight:'bold'
    },
    
      
})

