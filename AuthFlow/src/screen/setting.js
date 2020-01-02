import React from 'react'
import {View, Button, AsyncStorage} from 'react-native'

export default class Setting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    Logout = async () => {
        AsyncStorage.clear()
        this.props.navigation.navigate('Authloading')
    }
    render() {
      return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Button title= 'Sign Out' onPress={this.Logout}/>
        </View>
      )
    };
}