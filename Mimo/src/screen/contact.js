import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList} from 'react-native'
import {SvgUri} from 'react-native-svg'
import Add from 'react-native-vector-icons/SimpleLineIcons'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          data : [],
          avatar:'',
          refreshing : false,
          textinput_name:''
        }
    }  
    user = () => {
        fetch('https://chattingers.herokuapp.com/api/tampil')
        .then((res) => res.json())
        .then((resJson) => {
          console.log(resJson)
          this.setState({
            data : resJson,
            refreshing : false,
          })
        })
        .catch((error) => console.log({error,loading:false,refreshing:false}))
    }
    handleRefresh = () => {
        this.setState({
            refreshing:true,
        },()=>{
            this.user()
        })
    } 
    componentDidMount(){
        this.user()
    }




    renderItems ({item}) {
        return(   
            <View>  
                <View>
                    <View style={styles.view}>
                        <TouchableOpacity>
                            <View style={{elevation:10,marginHorizontal:10,marginVertical:10,flexDirection:'row'}}>
                                <View style={{justifyContent:'center',alignItems:'center',elevation:20,borderRadius:100,width:40,height:40}}>
                                    <SvgUri height='25' width='25' uri={item.avatar}/>
                                </View>
                                <Text style={styles.nama}> {item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
           </View>
        ) 
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#e3e3e3'}}>
                <TouchableOpacity>
                    <View style={{elevation:10,marginHorizontal:15,marginTop:10,flexDirection:'row'}}>
                        <View style={{backgroundColor:'#1a1a3b',justifyContent:'center',alignItems:'center',elevation:10,borderColor:'#f7f5f5',borderRadius:100,width:40,height:40}}>
                            <Add name='user-follow' size={25} color='white'/>
                        </View>
                        <Text style={{fontSize:15,color:'#1a1a3b',marginLeft:15,marginTop:10,fontWeight:'bold'}}>New Contact</Text>
                    </View>
                </TouchableOpacity>
                <FlatList
                    data = {this.state.data}
                    keyExtractor={item => item.toString()}
                    renderItem={this.renderItems}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                />
                
            </View>
        )
    }
    
}
export default App

const styles = StyleSheet.create ({
    
    view: {
        marginTop:2,
        marginHorizontal:5,
    },
    nama: {
        fontSize:15,
        color:'#1a1a3b',
        marginLeft:15,
        marginTop:10,
        fontWeight:'bold'
    },
    
      
})

