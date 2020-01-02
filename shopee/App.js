import React from 'react';
import {Text,View,StyleSheet,Image} from 'react-native'
import Route from './src/route/route'

class App extends React.Component {
  state={
    role: true
  }
    render(){
      setTimeout(()=>{
        this.setState({
          role:false
        })
      },3000)
      if (this.state.role){
        return(
          <View style={styles.container}>
            <Image source={require('./src/asset/logo.png')} style={{height:120,width:85}}/>
          </View>
        )
      }
      return(
        <Route/>
      )
    }
    
}

export default App;

const styles = StyleSheet.create ({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  
})
