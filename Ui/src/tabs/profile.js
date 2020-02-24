import React from 'react';
import {View,Text,ImageBackground,Image,TouchableWithoutFeedback,StatusBar,ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Feather'
import Iconn from 'react-native-vector-icons/MaterialIcons'

console.disableYellowBox = true;

export default class Index extends React.Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <StatusBar backgroundColor='#F4F4F4'/>
                <View style={{padding:10,alignSelf:'flex-end',flexDirection:'row'}}>
                    <Icon name='message-circle' size={23} style={{right:15,top:2}}/>
                    <Iconn name='notifications-none' size={25}/>
                </View>
            </View>
        )
    }
}