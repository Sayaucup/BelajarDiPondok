import React, { Component } from 'react';
import { View,Text,ScrollView,TextInput,Image,Alert,TouchableOpacity,ActivityIndicator} from 'react-native'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    
      name:'',
      email:'',
      password:'',
      telp:'',
      hidePassword: true
     }
  }

  managePasswordVisibility= () => {
      this.setState({hidePassword : !this.state.hidePassword})
  }

  Signup = () => {
    const {name} = this.state
    const {email} = this.state
    const {password} = this.state
    const {telp} = this.state
    
    return fetch('https://chattingers.herokuapp.com/api/register',
    {
      method: 'POST',
      headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "name" : name,
        "email" : email,
        "password" : password,
        "telp" : telp,
        })
    })
    .then((res) => res.json(),
    <ActivityIndicator size='small'/>,
    Alert.alert('Succes Register'),
    this.props.navigation.navigate('Signin')
    ).catch((error) => console.log(error))

  }
 

  render() { 
    return ( 
        <View style={{flex:1,backgroundColor: '#1a1a3b',}}>
        <ScrollView>

        <View>
            <View style={{marginHorizontal:50,marginTop:50,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:35,fontWeight:'bold',color:'#e3e3e3',fontStyle:'normal'}}>
                    Create Account
                </Text>
            </View> 
        </View>
    
        <View>
            <View style={{marginTop:50,marginHorizontal:25}}>
                <TextInput 
                    onChangeText={text => this.setState({name:text})} 
                    placeholder='Username' 
                    placeholderTextColor='#e3e3e3' 
                    style={{paddingLeft:15,alignSelf:'stretch',color:'#e3e3e3',borderRadius:5,borderWidth:1,borderColor:'#e3e3e3'}}/>
            </View>
            <View style = {{marginHorizontal: 25}}>
                <TextInput 
                    onChangeText={text => this.setState({email:text})} 
                    placeholder='Email' 
                    placeholderTextColor='#e3e3e3'
                    style = { {marginTop:4.5,paddingLeft:15,alignSelf:'stretch',color:'#e3e3e3',borderRadius:5,borderWidth:1,borderColor:'#e3e3e3'}}/>
            </View>
            <View style = {{position: 'relative',justifyContent: 'center',marginHorizontal: 25}}>
                <TextInput 
                    onChangeText={text => this.setState({password:text})} 
                    placeholder='Password' 
                    placeholderTextColor='#e3e3e3'
                    secureTextEntry = { this.state.hidePassword } 
                    style = { {marginTop:4.5,paddingLeft:15,alignSelf:'stretch',color:'#e3e3e3',borderRadius:5,borderWidth:1,borderColor:'#e3e3e3'}}/>
                    <TouchableOpacity 
                            activeOpacity = { 0.8 } 
                            style = {{position: 'absolute', right: 10, height: 40,  width: 35, padding: 5}} 
                            onPress = { this.managePasswordVisibility }>
                            <Image 
                                source = { ( this.state.hidePassword ) ? require('../asset/hide.png') : require('../asset/eye.png') } 
                                style = {{resizeMode: 'contain', height: '100%', width: '100%',  tintColor:'#e3e3e3',}} />
                        </TouchableOpacity>
            </View>
            <View style = {{marginHorizontal: 25}}>
                <TextInput 
                    onChangeText={text => this.setState({telp:text})} 
                    placeholder='Phone Number' 
                    placeholderTextColor='#e3e3e3'
                    keyboardType='numeric' 
                    style = { {marginTop:4.5,paddingLeft:15,alignSelf:'stretch',color:'#e3e3e3',borderRadius:5,borderWidth:1,borderColor:'#e3e3e3'}}/>
            </View>
            
        </View>


        <View style={{marginTop:35}}>
            <TouchableOpacity onPress={this.Signup} >
                <View style={{height:50,backgroundColor:'#e3e3e3',justifyContent:'center',alignItems:'center',marginHorizontal:100,borderRadius:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold',color:'#1a1a3b'}}>Create Account</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={{marginTop:67}}>
                <View style={{height:50,backgroundColor:'#e3e3e3',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                    <Text style={{fontSize:15,fontWeight:'bold',color:'#8a8080'}}>Already have an account?</Text>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Signin')}>
                        <Text style={{fontSize:15,fontWeight:'bold',color:'#1a1a3b'}}> Sign In</Text>
                    </TouchableOpacity>
                </View>
        </View> 
        </ScrollView>

    </View>
     );
  }
}
 
export default App;