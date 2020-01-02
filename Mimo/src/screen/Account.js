import React,{Component} from 'react'
import {View,Text,TouchableOpacity,AsyncStorage,Image,Alert} from 'react-native'
import {SvgUri} from 'react-native-svg'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export default class Setting extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            telp:'',
            avatar:'',

        }
    }

    
    editProfile = () => {
        this.props.navigation.navigate('EditProfile')
    }

    Password = () => {
        this.props.navigation.navigate('Password')
    }

    componentDidMount(){
        
        AsyncStorage.getItem('name').then (value =>{
            if (value != null){
                this.setState({name:value})
            }
        })
        
        AsyncStorage.getItem('avatar').then (value =>{
            if (value != null){
                this.setState({avatar:value})
            }
        })
        
    }
    
    logout = () => {
        Alert.alert(
            'Alert',
            'Do you want to exit?',
            [
              {text: 'Yes', onPress: () => {
                AsyncStorage.removeItem('access_token')
                this.props.navigation.navigate('Signin')
            }},
              {text: 'Cancel', onPress: () => console.log('cancel')}
            ]
            
          );
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#e3e3e3'}}>
                <View style={{backgroundColor: '#1a1a3b'}}>
                    <View style={{alignItems:'center',marginTop:70}}>
                        <View style={{justifyContent:'center',alignItems:'center',elevation:10,borderWidth:3,borderColor:'#e3e3e3',borderRadius:150,width:100,height:100,backgroundColor:'#1a1a3b'}}>
                            <SvgUri height='80' width='80' uri={this.state.avatar}/>
                            {/* <Image source={require('../asset/ucup.jpeg')} style={{borderRadius:40,width:85,height:85}} /> */}
                        </View>
                    </View>
                    <View style={{alignItems:'center',marginBottom:100}}>
                        <Text style={{color:'#fff',fontSize:30,fontWeight:'bold'}}>{this.state.name}</Text>                    
                    </View>
                </View> 
               
                <TouchableOpacity onPress={this.editProfile}>
                    <View style={{flexDirection: 'row',height:45,backgroundColor:'white',flexDirection:'row',marginTop:10,alignItems:'center',marginHorizontal:10,borderRadius:8}}>
                        <Icon name='pencil' size={25} color='#1a1a3b' style={{marginLeft:10}}/>
                        <Text style={{marginLeft:20,color:'#1a1a3b',fontSize:25}}>Edit Profile</Text>
                    </View>
               </TouchableOpacity>

               <TouchableOpacity>
                    <View style={{flexDirection: 'row',height:45,backgroundColor:'white',flexDirection:'row',marginTop:2,alignItems:'center',marginHorizontal:10,borderRadius:8}}>
                        <Icon name='share' size={25} color='#1a1a3b' style={{marginLeft:10}}/>
                        <Text style={{marginLeft:20,color:'#1a1a3b',fontSize:25}}>Share this APP</Text>
                    </View>
               </TouchableOpacity>

               <TouchableOpacity onPress={this.Password}>
                    <View style={{flexDirection: 'row',height:45,backgroundColor:'white',flexDirection:'row',marginTop:2,alignItems:'center',marginHorizontal:10,borderRadius:8}}>
                        <Icon name='key' size={25} color='#1a1a3b' style={{marginLeft:10}}/>
                        <Text style={{marginLeft:20,color:'#1a1a3b',fontSize:25}}>Password</Text>
                    </View>
               </TouchableOpacity>

               <TouchableOpacity onPress={this.logout}>
                    <View style={{flexDirection: 'row',height:45,backgroundColor:'white',flexDirection:'row',marginTop:2,alignItems:'center',marginHorizontal:10,borderRadius:8}}>
                        <Icon name='power' size={25} color='#1a1a3b' style={{marginLeft:10}}/>
                        <Text style={{marginLeft:20,color:'#1a1a3b',fontSize:25}}>Logout</Text>
                    </View>
               </TouchableOpacity>
            </View>
        )
    }
}