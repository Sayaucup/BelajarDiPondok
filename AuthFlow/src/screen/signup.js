import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() { 
        return ( 
            <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text> SignUp</Text>
            </View>
         );
    }
}