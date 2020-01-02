import React from 'react';
import {View,Text,Image,TextInput,TouchableOpacity,ScrollView,AsyncStorage} from 'react-native'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            telp:"",
            password:'',
            hidePassword: true
        }
    }
managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword })
}

    componentDidMount(){
        AsyncStorage.getItem('access_token').then(value=>{
      if (value!=null){
        this.props.navigation.navigate('menu')
      }
    })
  }

  SigIn=()=>{

        const { name, password} = this.state;
        fetch('https://chattingers.herokuapp.com/api/login',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
               name:name,
               password:password
            })
        }).then((res)=>res.json())
            .then((resJson)=>{
                    AsyncStorage.setItem('id',JSON.stringify(resJson.id))
                    AsyncStorage.setItem('name',resJson.login.name)
                    AsyncStorage.setItem('email',resJson.login.email)
                    AsyncStorage.setItem('telp',resJson.login.telp)
                    AsyncStorage.setItem('avatar',resJson.login.avatar)
                    AsyncStorage.setItem('access_token', resJson.access_token)
                    this.props.navigation.navigate('menu')
            }).catch((error) => console.log(error))

        }

    
    
    render(){
        return(
            <View style={{flex:1,backgroundColor: '#1a1a3b',}}>
                <ScrollView>
                <View>
                    <View style={{marginHorizontal:50,marginTop:100,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:35,fontWeight:'bold',color:'#e3e3e3',fontStyle:'normal'}}>
                            Sign In 
                        </Text>
                        
                    </View> 
                </View>
            
                <View>
                    <View style={{marginTop:70,marginHorizontal:25}}>
                        <TextInput 
                            onChangeText={name => this.setState({name})} 
                            placeholder='Username' 
                            placeholderTextColor='#e3e3e3' 
                            style={{paddingLeft:15,alignSelf:'stretch',color:'#e3e3e3',borderRadius:5,borderWidth:1,borderColor:'#e3e3e3'}}/>
                    </View>
                    <View style = {{position: 'relative',justifyContent: 'center',marginHorizontal: 25,top:4.5}}>
                        <TextInput 
                            onChangeText={password => this.setState({password})} 
                            placeholder='Password' 
                            placeholderTextColor='#e3e3e3'
                            secureTextEntry = { this.state.hidePassword } 
                            style = { {paddingLeft:15,alignSelf:'stretch',color:'#e3e3e3',borderRadius:5,borderWidth:1,borderColor:'#e3e3e3'}}/>
                        <TouchableOpacity 
                            activeOpacity = { 0.8 } 
                            style = {{position: 'absolute', right: 10, height: 40,  width: 35, padding: 5}} 
                            onPress = { this.managePasswordVisibility }>
                            <Image 
                                source = { ( this.state.hidePassword ) ? require('../asset/hide.png') : require('../asset/eye.png') } 
                                style = {{resizeMode: 'contain', height: '100%', width: '100%',  tintColor:'#e3e3e3',}} />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{marginTop:35}}>
                    <TouchableOpacity onPress={this.SigIn} >
                        <View style={{height:50,backgroundColor:'#e3e3e3',justifyContent:'center',alignItems:'center',marginHorizontal:100,borderRadius:10}}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'#1a1a3b'}}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:113.5}}>
                        <View style={{height:50,backgroundColor:'#e3e3e3',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Text style={{fontSize:15,fontWeight:'bold',color:'#8a8080'}}>Dont have an account?</Text>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Signup')}>
                                <Text style={{fontSize:15,fontWeight:'bold',color:'#1a1a3b'}}> Create account</Text>
                            </TouchableOpacity>
                        </View>
                </View> 
                </ScrollView>

            </View>
        )
    }
    
}

export default App

