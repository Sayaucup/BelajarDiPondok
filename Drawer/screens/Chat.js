import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Floating from 'react-native-action-button'

export default class Chat extends React.Component {
    
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        style={{ alignItems: "flex-start", margin: 16}}
                        onPress={this.props.navigation.openDrawer}>
                        <Icon name="list" size={24} color="#1a1a3b" />
                    </TouchableOpacity>
                    <Text style={{fontSize:20,color:'#1a1a3b',top:14.5,fontWeight:'800'}}>CLIO</Text>
                </View>

                
                {/* <Floating buttonColor='#1a1a3b'>
                    <Floating.Item title='New Data' onPress={()=> this.props.navigation.navigate('Setting')}>
                        <Text style={styles.floating1}>+</Text>
                    </Floating.Item>    
                </Floating> */}
            </View>
        )
    }
}

const styles = StyleSheet.create ({
   
    text : {
        fontSize : 26,
        color : 'purple'
    },
    floating1: {
        color:'white',
        fontSize:25,
        
    },
    view2: {
        borderColor:'#53115B',
        borderWidth:2,
        height:70,
        borderRadius:5,
    },
    data: {
        fontSize:15,
        color:'#53115B',
        margin:5,
        fontWeight:'bold'
    },
   
})