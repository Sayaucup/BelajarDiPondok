import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Image,AsyncStorage} from 'react-native'

import Floating from 'react-native-action-button'

class App extends Component{
    constructor(props) {
        super(props);
        this.state = { 
          data : [],
          refreshing : false,
         }
      }

     
      ambildata = () => {
        fetch('http://homekomputer.000webhostapp.com/api/TampilkanData.php')
        .then((respose) => respose.json())
        .then((resposeJson) => {
          console.log(resposeJson)
          this.setState({
            data : resposeJson,
            refreshing : false,
          })
        })
        .catch((error) => console.log({error,loading:false,refreshing:false}))
      }
      handleRefresh = () => {
        this.setState({
            refreshing:true,
        },()=>{
            this.ambildata()
        })
    } 

    
      componentDidMount(){
        this.ambildata()
      }

      update = (updateItem) => {
        this.props.navigation.navigate('Update',{detail:updateItem})
    }

      logout = () => {
        AsyncStorage.removeItem('access_token')
        this.props.navigation.navigate('Signin')
    }
      
     
      renderItems = ({item}) => {
        const {
            student_id,
            student_name} = item 

        return(
            <View>
                <View style={{marginHorizontal:15,marginVertical:10}}>
                    <TouchableOpacity onPress={()=> this.update([`${item.student_id}`,`${item.student_name}`,`${item.student_class}`,`${item.student_phone_number}`,`${item.student_email}`])}>
                        <View style={styles.view2}>
                            <Text style={styles.data}>ID                        :   {student_id}</Text>
                            <Text style={styles.data}>Name                 :   {student_name}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
           </View>
        )
        
        }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flexDirection:'row',margin:15}}>
                    <Text style={{fontSize:25,color:'#cc7a16'}}>Data App</Text>
                </View>
                <FlatList
                    data = {this.state.data}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    keyExtractor={item => item.toString()}
                    renderItem={this.renderItems}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    />
                <Floating buttonColor='#cc7a16'>
                    <Floating.Item title='New Data' onPress={()=> this.props.navigation.navigate('Tambah')}>
                        <Text style={styles.floating1}>+</Text>
                    </Floating.Item>    
                    <Floating.Item title='Logout' onPress={this.logout}>
                        <Image source={require('../asset/logout.png')} style={styles.floating2}/>
                    </Floating.Item>
                </Floating>
            </View>
        )
    }
    
}
export default App

const styles = StyleSheet.create ({
    
    view: {
        borderWidth:1,
        borderRadius:10,
        borderColor:'#cc7a16',
        height:50,
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize:25,
        fontWeight:'500',
        color:'#cc7a16'
    },
    view2: {
        borderColor:'#cc7a16',
        borderWidth:2,
        height:70,
        borderRadius:5,
    },
    data: {
        fontSize:15,
        color:'#cc7a16',
        margin:5,
        fontWeight:'bold'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    floating1: {
        color:'white',
        fontSize:25,
        
      },
      floating2 : {
          height:20,
          width:20,
          color:'white'
      }
    
   
      
})

