import React from 'react';
import { View,Text, ImageBackground,Image} from 'react-native';

export default class Index extends React.Component {
    render(){
        return(
            <View style={{flex: 1}}>
                <ImageBackground style={{height:'100%',width:'100%'}} source={require('../bg.png')}>

                </ImageBackground>
            </View>
        )
    }
}