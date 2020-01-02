import React from 'react'
import {View, Text, Button} from 'react-native'

export default class Welcome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
      return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Button title='Sign in' onPress={() => this.props.navigation.navigate('Signin')}/>
            <Button title='Sign up' onPress={() => this.props.navigation.navigate('Signup')}/>
        </View> 
      )
    };
}