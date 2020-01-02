import React from 'react';
import {
    View,
    Text,
    
} from 'react-native'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() { 
        return ( 
            <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text> HomeScreen</Text>
            </View>
         );
    }
}