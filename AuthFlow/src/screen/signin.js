import React from 'react'
import {View, Button, AsyncStorage} from 'react-native'

export default class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state= {}
    }

    signIn = async () => {
        await AsyncStorage.setItem('userToken', 'yusuf')
        this.props.navigation.navigate('App')
    }

    render() {
        return (
            <View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Button title= 'Sign in' onPress= {this.signIn}/>
            </View>
        )
    }
}