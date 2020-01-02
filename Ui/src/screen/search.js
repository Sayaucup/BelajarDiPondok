import React from 'react';
import { View,Text, ImageBackground,Image} from 'react-native';

export default class Index extends React.Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground style={{height:'100%',width:'100%'}} source={require('../bg.png')}>
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:30,backgroundColor:'white',marginHorizontal:140,padding:10,borderRadius:100/2}}>
                        <Image style={{height:60,width:60,tintColor:'#f27995'}} source={require('../chef.png')}/>
                    </View>
                    <View style={{height:160,backgroundColor: 'white',borderRadius:10,marginHorizontal:8,marginTop:30,elevation:10}}>

                    </View>
                    <View style={{flexDirection:'row',marginTop:15,marginHorizontal:8}}>
                        <View style={{height:120,width:162,backgroundColor: 'white',borderRadius:10,elevation:10}}>
                        
                        </View>
                        <View style={{height:120,width:162,backgroundColor: 'white',borderRadius:10,elevation:10,left:15}}>

                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:5,marginHorizontal:8}}>
                        <View style={{height:75,width:50,backgroundColor: 'white',borderRadius:10,elevation:10}}>
                        
                        </View>
                        
                        <View style={{height:75,width:50,backgroundColor: 'white',borderRadius:10,elevation:10,left:15}}>

                        </View>
                        
                    </View>
                </ImageBackground>
            </View>
        )
    }
}