import React from 'react'
import {View,Text,TextInput,AsyncStorage,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default class Password extends React.Component {
    constructor(props){
        super(props)
        this.state={   
            password:''
        }
    }

    back = () => {
        this.props.navigation.navigate('Account')
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor: '#e3e3e3',}}>
                <View style={{height:53,backgroundColor: 'white',flexDirection:'row'}}>
                    <TouchableOpacity onPress={this.back}>
                        <View style={{marginTop:11,marginLeft:10}}>
                            <Icon name='close' size={30} color='#1a1a3b'/>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:25,marginTop:13}}>
                        <Text style={{fontSize:20,color:'#1a1a3b'}}>Password</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{marginTop:11,marginLeft:155}}>
                            <Icon name='check' size={30} color='#1a1a3b'/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{marginHorizontal:15,marginTop:20}}>
                        <TextInput
                        placeholder='Current password' 
                        onChangeText={password => this.setState({password})}
                        style={{borderWidth:1,borderColor: '#1a1a3b',borderRadius:5,paddingLeft:15}}/>
                    </View>
                    <View style={{marginHorizontal:15,marginTop:10}}>
                        <TextInput
                        placeholder='New password' 
                        onChangeText={password => this.setState({password})}
                        style={{borderWidth:1,borderColor: '#1a1a3b',borderRadius:5,paddingLeft:15}}/>
                    </View>
                    <View style={{marginHorizontal:15,marginTop:10}}>
                        <TextInput
                        placeholder='Re-enter new password' 
                        onChangeText={password => this.setState({password})}
                        style={{borderWidth:1,borderColor: '#1a1a3b',borderRadius:5,paddingLeft:15}}/>
                    </View>
                </View>
            </View>   
        )
    }
}

