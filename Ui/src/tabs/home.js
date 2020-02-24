import React from 'react';
import { View,Text,ImageBackground,Image,TouchableWithoutFeedback,StatusBar,ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Feather'
import Iconn from 'react-native-vector-icons/MaterialIcons'

import Apparel from '../icon/Apprel2.png'
import Beauty from '../icon/Beauty2.png'
import Shoes from '../icon/Shoes2.png'
import seeall from '../icon/seeall2.png'

import Latest from '../componentHome/Latest'

console.disableYellowBox = true;

export default class Index extends React.Component {
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#F4F4F4'}}>
                <StatusBar backgroundColor='#F4F4F4'/>
                <View style={{padding:10,alignSelf:'flex-end',flexDirection:'row'}}>
                    <Icon name='message-circle' size={23} style={{right:15,top:2}}/>
                    <Iconn name='notifications-none' size={25}/>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{marginLeft:25,top:-11}}>
                        <Text style={{fontSize:35,color:'#575F6D',fontFamily:'nunito.bold'}}>
                            Categories
                        </Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                        <View style={{alignItems:'center',marginLeft:13}}>
                            <Image style={{height:70,width:70}} source={Apparel}/>
                            <Text style={{fontSize:16,fontFamily:'nunito.semibold',top:5}}>Apparel</Text>
                        </View>
                        <View style={{alignItems:'center',marginLeft:13}}>
                            <Image style={{height:70,width:70}} source={Beauty}/>
                            <Text style={{fontSize:16,fontFamily:'nunito.semibold',top:5}}>Beauty</Text>
                        </View>
                        <View style={{alignItems:'center',marginLeft:13}}>
                            <Image style={{height:70,width:70}} source={Shoes}/>
                            <Text style={{fontSize:16,fontFamily:'nunito.semibold',top:5}}>Shoes</Text>
                        </View>
                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Seeall')}>
                            <View style={{alignItems:'center',marginLeft:13}}>
                                <Image style={{height:70,width:70}} source={seeall}/>
                                <Text style={{fontSize:16,fontFamily:'nunito.semibold',top:5}}>See All</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        
                    </View>
                    <View style={{marginLeft:25,top:30}}>
                        <Text style={{fontSize:35,color:'#575F6D',fontFamily:'nunito.bold'}}>
                            Latest
                        </Text>
                    </View>
                    <View style={{marginTop:40}}>
                        <Latest/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}