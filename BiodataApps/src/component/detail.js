import React, { Component } from 'react';
import {View,TextInput,ScrollView,Alert,Image,TouchableOpacity,Text} from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          data : [],
            student_id: "",
            student_name: "",
            student_class: "",
            student_phone_number: "",
            student_email: ""
         }
      }
      ambildata = () => {
        return fetch('http://homekomputer.000webhostapp.com/api/TampilkanData.php')
        .then((respose) => respose.json())
        .then((resposeJson) => {
          console.log(resposeJson)
          this.setState({
            data : resposeJson
          })
        } )
        .catch((error) => console.log(error))
      }
    
      componentDidMount(){
        this.ambildata()
        this.setState({
            student_id: this.props.navigation.state.params.detail[0],
            student_name: this.props.navigation.state.params.detail[1],
            student_class: this.props.navigation.state.params.detail[2],
            student_phone_number: this.props.navigation.state.params.detail[3],
            student_email: this.props.navigation.state.params.detail[4]
        })
      }

      Updatesiswa = () =>{
        return fetch('http://homekomputer.000webhostapp.com/api/EditData.php', 
        {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          student_id : this.state.student_id,
          student_name : this.state.student_name,
          student_class : this.state.student_class,
          student_phone_number : this.state.student_phone_number,
          student_email : this.state.student_email
        })
        }).then((response) => response.json())
            .then((responseJson) => {
                this.props.navigation.navigate('Menu')
                Alert.alert(responseJson)
            }).catch((error) => {
              console.error(error)

            });
        }
        DeleteSiswa = () =>{
          return fetch('http://homekomputer.000webhostapp.com/api/HapusData.php', 
          {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            student_id : this.state.student_id
          })
          }).then((response) => response.json(),
          this.props.navigation.navigate('Menu')
          )
              .catch((error) => {
                console.error(error);
              });
          }
          Back = () => {
            this.props.navigation.navigate('Menu')
          }
          
    render(){
        return(
            <View style={{flex:1}}>
              <View style={{marginHorizontal:15,marginVertical:15,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity onPress={this.Back}  style={{top: 5, tintColor:'#cc7a16',left: 12,position: 'absolute'}}>
                  <Icon name="keyboard-backspace" size={35} color='#cc7a16' 
                  style={{height:25,width:25 , tintColor:'#cc7a16'}}/>
                </TouchableOpacity>
                 <Text style={{fontSize:25,color:'#cc7a16'}}>Detail</Text>
              </View>      
                <ScrollView>
                
                <View style={{marginTop:15,marginHorizontal:25}}>
                  <Text style={{fontSize:20 ,color:'#cc7a16'}}>Name :</Text>
                  <TextInput 
                    style={{fontSize:20,textAlign:'center',color:'#cc7a16',borderBottomWidth:1,borderBottomColor:'#cc7a16'}}
                    placeholder = 'Insert data'
                    onChangeText = { text => this.setState({student_name: text})}
                    value = {this.state.student_name}
                    />
                  <Image style={{top: 38, left: 270, position: 'absolute',height:25,width:25 }} source={require('../asset/keyhole.png')}/>
                </View>

                <View style={{marginTop:20,marginHorizontal:25}}>
                  <Text style={{fontSize:20 ,color:'#cc7a16'}}>Class :</Text>
                  <TextInput 
                    style={{fontSize:20,textAlign:'center',color:'#cc7a16',borderBottomWidth:1,borderBottomColor:'#cc7a16'}}
                    placeholder = 'Insert data'
                    onChangeText = { text => this.setState({student_class: text})}
                    value = {this.state.student_class}
                    />
                  <Image style={{top: 38, left: 270, position: 'absolute',height:25,width:25 }} source={require('../asset/keyhole.png')}/>
                </View>
                <View style={{marginTop:20,marginHorizontal:25}}>
                  <Text style={{fontSize:20 ,color:'#cc7a16'}}>Phone Number :</Text>
                  <TextInput 
                    style={{fontSize:20,textAlign:'center',color:'#cc7a16',borderBottomWidth:1,borderBottomColor:'#cc7a16'}}
                    placeholder = 'Insert data'
                    onChangeText = { text => this.setState({student_class: text})}
                    value = {this.state.student_phone_number}
                    />
                  <Image style={{top: 38, left: 270, position: 'absolute',height:25,width:25 }} source={require('../asset/keyhole.png')}/>
                </View>
                <View style={{marginTop:20,marginHorizontal:25}}>
                  <Text style={{fontSize:20 ,color:'#cc7a16'}}>Email :</Text>
                  <TextInput 
                    style={{fontSize:20,textAlign:'center',color:'#cc7a16',borderBottomWidth:1,borderBottomColor:'#cc7a16'}}
                    placeholder = 'Insert data'
                    onChangeText = { text => this.setState({student_email: text})}
                    value = {this.state.student_email}
                    />
                  <Image style={{top: 38, left: 270, position: 'absolute',height:25,width:25 }} source={require('../asset/keyhole.png')}/>
                </View>
                


                <View style={{height:60,flexDirection:'row',marginTop:61}}>
                    <TouchableOpacity onPress={this.DeleteSiswa}>
                        <View style={{flex:1,height:60,backgroundColor:'#cc7a',justifyContent:'center',alignItems:'center',paddingHorizontal:56}}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>DELETE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.Updatesiswa}>
                        <View style={{flex:1,height:60,backgroundColor:'#cc7a16',justifyContent:'center',alignItems:'center',paddingHorizontal:56}}>
                            <Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>UPDATE</Text>
                        </View>
                    </TouchableOpacity>
                </View> 
                        
                </ScrollView>
            </View>
        )
    }
    
}
export default App

