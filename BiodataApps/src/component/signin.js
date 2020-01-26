import React from 'react';
import {View,Text,Image,TextInput,TouchableOpacity,ScrollView,Alert,AsyncStorage} from 'react-native'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
           name:'',
           email:'',
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
        this.props.navigation.navigate('Menu')
      }
    })
  }
  FunctionLogin=()=>{
        const { name, password} = this.state;
        fetch('https://aqueous-hollows-28311.herokuapp.com/login',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
               name:name,
               password:password
            })
        }).then((respons)=>respons.json())
            .then((responsJson)=>{
                if (responsJson.access_token)
                {
                    AsyncStorage.setItem('id',JSON.stringify(responsJson.login.id))
                    AsyncStorage.setItem('name',responsJson.login.name)
                    AsyncStorage.setItem('email',responsJson.login.email)
                    AsyncStorage.setItem('access_token', responsJson.access_token)
                 
                }
                    this.props.navigation.navigate('Menu')

            })
        }
    // constructor(props){
    //     super(props)
    //     this.state= {
    //         student_name:'',
    //         student_class:''
            
    //     }
    // }

    // FunctionLogin = () => {
    //     const {student_name} = this.state
    //     const {student_class} = this.state
       
    //     fetch ('http://homekomputer.000webhostapp.com/api/Login.php',
    //     {
    //         method:'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             student_name: student_name,
    //             student_class: student_class
                
    //         })
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
    //         if(responseJson === 'Login Sukses')
    //         {
    //             this.props.navigation.navigate('Update',{detail:student_name})
    //         }
    //         else{
    //             Alert.alert(responseJson);
    //         }
    //         }).catch((error) => {
    //         console.error(error);
    //         })
    // }
    
    render(){
        return(
            <View style={{flex:1}}>
                <ScrollView>
                <View>
                    <View style={{marginHorizontal:50,marginTop:100,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:35,fontWeight:'bold',color:'#cc7a16',fontStyle:'normal'}}>
                            Sign In 
                        </Text>
                        
                    </View> 
                </View>
            
                <View>
                    <View style={{marginTop:70,marginHorizontal:25}}>
                        <TextInput 
                            onChangeText={name => this.setState({name})} 
                            placeholder='Username' 
                            placeholderTextColor='#cc7a16' 
                            style={{paddingLeft:15,alignSelf:'stretch',color:'#cc7a16',borderRadius:5,borderWidth:1,borderColor:'#cc7a16'}}/>
                    </View>
                    <View style = {{position: 'relative',justifyContent: 'center',marginHorizontal: 25,top:4.5}}>
                        <TextInput 
                            onChangeText={password => this.setState({password})} 
                            placeholder='Password' 
                            placeholderTextColor='#cc7a16'
                            secureTextEntry = { this.state.hidePassword } 
                            style = { {paddingLeft:15,alignSelf:'stretch',color:'#cc7a16',borderRadius:5,borderWidth:1,borderColor:'#cc7a16'}}/>
                        <TouchableOpacity 
                            activeOpacity = { 0.8 } 
                            style = {{position: 'absolute', right: 10, height: 40,  width: 35, padding: 5}} 
                            onPress = { this.managePasswordVisibility }>
                            <Image 
                                source = { ( this.state.hidePassword ) ? require('../asset/hide.png') : require('../asset/eye.png') } 
                                style = {{resizeMode: 'contain', height: '100%', width: '100%',  tintColor:'#cc7a16',}} />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={{marginTop:35}}>
                    <TouchableOpacity onPress={this.FunctionLogin} >
                        <View style={{height:50,backgroundColor:'#cc7a16',justifyContent:'center',alignItems:'center',marginHorizontal:100,borderRadius:10}}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop:113.5}}>
                        <View style={{height:50,backgroundColor:'#e3e3e3',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
                            <Text style={{fontSize:15,fontWeight:'bold',color:'#8a8080'}}>Dont have an account?</Text>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Signup')}>
                                <Text style={{fontSize:15,fontWeight:'bold',color:'#cc7a16'}}> Create account</Text>
                            </TouchableOpacity>
                        </View>
                </View> 
                </ScrollView>

            </View>
        )
    }
    
}

export default App

