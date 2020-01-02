import React,{Component} from 'react'
import {View,Text,TouchableOpacity,AsyncStorage,TextInput,Image,Alert,ScrollView} from 'react-native'
import {SvgUri} from 'react-native-svg'
import Icon from 'react-native-vector-icons/AntDesign'
import ImagePicker from 'react-native-image-picker'

export default class Setting extends Component {
    constructor(props){
        super(props)
        this.state={
            id:'',   
            name:'',
            email:'',
            telp:'',
            avatar:'',
            filePath:{},
        }
    }

    EditProfile = () =>{
        const{id,name,email,telp} = this.state
        return fetch('https://chattingers.herokuapp.com/api/mobile/edit', 
        {
            method: 'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        body: JSON.stringify({
          "id" : id,
          "name" : name,
          "email" : email,
          "telp" : telp,
        })
        }).then( (response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson){
                    Alert.alert(responseJson)
                    this.props.navigation.navigate('Account')
                }
                
            }).catch((error) => {
              console.error(error)

            });
        }
    chooseFile = () => {
        var options = {
            title: 'Select Image',
            customButtons : [
                {name : 'costumOptionKey', title:'Choose Photo From Custom Options'},
            ],
            storageOptions : {
                skipBackup: true,
                path: 'images',
            },
        }
        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response)

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                let source = response
                this.setState({
                    filePath:source
                })
            } 
        })
    }
    
    back = () => {
        this.props.navigation.navigate('Account')
    }

    componentDidMount(){  
        AsyncStorage.getItem('id').then (value =>{
            if (value != null){
                this.setState({id:value})
            }
        })
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
        AsyncStorage.getItem('email').then (value =>{
            if (value != null){
                this.setState({email:value})
            }
        })
        AsyncStorage.getItem('telp').then (value =>{
            if (value != null){
                this.setState({telp:value})
            }
        })
    }

    render() {
        return (                    
            <View style={{flex:1,backgroundColor:'#e3e3e3'}}>
                <View style={{height:53,backgroundColor: 'white',flexDirection:'row'}}>
                    <TouchableOpacity onPress={this.back}>
                        <View style={{marginTop:11,marginLeft:10}}>
                            <Icon name='close' size={30} color='#1a1a3b'/>
                        </View>
                    </TouchableOpacity>
                    <View style={{marginLeft:25,marginTop:13}}>
                        <Text style={{fontSize:20,color:'#1a1a3b'}}>Edit Profile</Text>
                    </View>
                    <TouchableOpacity onPress={this.EditProfile}>
                        <View style={{marginTop:11,marginLeft:155}}>
                            <Icon name='check' size={30} color='#1a1a3b'/>
                        </View>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                <View style={{alignItems:'center',marginTop:30,fjustifyContent:'center'}}>
                    <View style={{justifyContent:'center',alignItems:'center',elevation:10,borderColor:'#f7f5f5',borderRadius:100,width:110,height:110,backgroundColor:'white'}}>
                        <SvgUri height='80' width='80' uri={this.state.avatar}/>

                        <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.filePath.data,}} style={{borderRadius:60,width:100,height:100}} />
                    </View>
                    <TouchableOpacity onPress={this.chooseFile.bind(this)}>
                        <Text style={{color:'#1a1a3b',fontSize:20,marginTop:10}}>Change Profile Photo</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginHorizontal:20,marginTop:30}}>
                    <View>
                        <Text style={{fontSize:15,color:'gray'}}>Name</Text>
                        <TextInput 
                        value={this.state.name}
                        onChangeText={text => this.setState({name:text})}
                        style={{color:'#1a1a3b',fontSize:18,borderBottomWidth:1,borderBottomColor:'#1a1a3b'}}/>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={{fontSize:15,color:'gray'}}>email</Text>
                        <TextInput 
                        value={this.state.email}
                        onChangeText={text => this.setState({email:text})}
                        style={{color:'#1a1a3b',fontSize:18,borderBottomWidth:1,borderBottomColor:'#1a1a3b'}}/>
                    </View>
                    <View style={{marginTop:10}}>
                        <Text style={{fontSize:15,color:'gray'}}>telp</Text>
                        <TextInput 
                        value={this.state.name}
                        onChangeText={text => this.setState({telp:text})}
                        style={{color:'#1a1a3b',fontSize:18,borderBottomWidth:1,borderBottomColor:'#1a1a3b'}}/>
                    </View>
                </View>

                </ScrollView>
            </View>
        )
        
    }
    
}