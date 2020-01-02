import React from 'react'
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Floating from 'react-native-action-button'


export default class HomeScreen extends React.Component {
   
    render() {
        return (
            <View style={{flex: 1,}}>
                <TouchableOpacity
                        style={{ alignItems: "flex-start", margin: 16 }}
                        onPress={this.props.navigation.openDrawer}
                    >
                        <Icon name="list" size={24} color="#161924" />
                    </TouchableOpacity>
                <Text style={styles.text}>This is dua</Text>

                {/* <Floating buttonColor='#cc7a16'>
                    <Floating.Item title='New Data' onPress={()=> this.props.navigation.navigate('Profile')}>
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
   
})

