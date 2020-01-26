import React from 'react';
import {View,Image,StyleSheet,ActivityIndicator} from 'react-native'

import Routes from './src/config/routes'

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
            <Image source={require('./src/asset/keyhole.png')}/>
          </View>
        )
      }
      return(
        <Routes/>
      )
    }
    
}

export default App;

const styles = StyleSheet.create ({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  
})

