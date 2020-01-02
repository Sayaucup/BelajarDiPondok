import React from 'react';
import { View,Text,ImageBackground,Image} from 'react-native';

export default class Index extends React.Component {
    render(){
        return(
            <View style={{flex:1}}>
                <ImageBackground style={{height:'100%',width:'100%'}} source={require('../bg.png')}>
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:60,backgroundColor:'white',marginHorizontal:140,padding:10,borderRadius:100/2}}>
                        <Image style={{height:60,width:60,tintColor:'#f27995'}} source={require('../chef.png')}/>
                    </View>
                    <View style={{flex:1,flexWrap:'wrap',flexDirection:'row',justifyContent:'center'}}>
                        <View style={{width:'30.6%',height:'13%',margin:5,marginTop:50,paddingVertical:40,alignItems:'center',justifyContent:'center',backgroundColor:'#fff',elevation:10, borderRadius:10}}>
                            <View style={{borderColor:'#34ebd9',borderRadius:200,borderWidth:3,marginRight:85}}/>
                            <Image style={{height:35,width:35,tintColor:'#34ebd9'}} source={require('../dish.png')}/>
                            <Text style={{color:'#8a8a8a',fontWeight:'bold',fontSize:12}}>Food</Text>
                        </View>
                        <View style={{width:'30.6%',height:'13%',margin:5,marginTop:50,paddingVertical:40,alignItems:'center',justifyContent:'center',backgroundColor:'#fff',elevation:10, borderRadius:10}}>
                            <View style={{borderColor:'#e3db46',borderRadius:200,borderWidth:3,marginRight:85}}/>
                            <Image style={{height:35,width:35,tintColor:'#e3db46'}} source={require('../juice.png')}/>
                            <Text style={{color:'#8a8a8a',fontWeight:'bold',fontSize:12}}>Juice</Text>
                        </View>
                        <View style={{width:'30.6%',height:'13%',margin:5,marginTop:5,paddingVertical:40,alignItems:'center',justifyContent:'center',backgroundColor:'#fff',elevation:10, borderRadius:10}}>
                            <View style={{borderColor:'#eb34cc',borderRadius:200,borderWidth:3,marginRight:85}}/>
                            <Image style={{height:35,width:35,tintColor:'#eb34cc'}} source={require('../sandwich.png')}/>
                            <Text style={{color:'#8a8a8a',fontWeight:'bold',fontSize:12}}>Sandwich</Text>
                        </View>
                        <View style={{width:'30.6%',height:'13%',margin:5,marginTop:5,paddingVertical:40,alignItems:'center',justifyContent:'center',backgroundColor:'#fff',elevation:10, borderRadius:10}}>
                            <View style={{borderColor:'#3437eb',borderRadius:200,borderWidth:3,marginRight:85}}/>
                            <Image style={{height:35,width:35,tintColor:'#3437eb'}} source={require('../wine.png')}/>
                            <Text style={{color:'#8a8a8a',fontWeight:'bold',fontSize:12}}>wine</Text>
                        </View>
                        <View style={{width:'30.6%',height:'13%',margin:5,marginTop:5,paddingVertical:40,alignItems:'center',justifyContent:'center',backgroundColor:'#fff',elevation:10, borderRadius:10}}>
                            <View style={{borderColor:'#eb3434',borderRadius:200,borderWidth:3,marginRight:85}}/>
                            <Image style={{height:35,width:35,tintColor:'#eb3434'}} source={require('../hot-dog.png')}/>
                            <Text style={{color:'#8a8a8a',fontWeight:'bold',fontSize:12}}>Hot-Dog</Text>
                        </View>
                        <View style={{width:'30.6%',height:'13%',margin:5,marginTop:5,paddingVertical:40,alignItems:'center',justifyContent:'center',backgroundColor:'#fff',elevation:10, borderRadius:10}}>
                            <View style={{borderColor:'#40eb34',borderRadius:200,borderWidth:3,marginRight:85}}/>
                            <Image style={{height:35,width:35,tintColor:'#40eb34'}} source={require('../ice-cream.png')}/>
                            <Text style={{color:'#8a8a8a',fontWeight:'bold',fontSize:12}}>Ice-Cream</Text>
                        </View>
                    </View>
                </ImageBackground>
        </View>
        )
    }
}