import React from 'react'
import { View,Text,ActivityIndicator,AsyncStorage } from 'react-native'

export default class Authloading extends React.Component {
    constructor() {
        super()
        this.loadApp()
    }

    loadApp = async () => {
        const userToken = await AsyncStorage.getItem('userToken')
        this.props.navigation.navigate ( userToken ? 'App' : 'AuthStack' )
    }

    render() {
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size='small' />
            </View>
        )
    }
}