import React,{Component} from 'react';
import ActionButton from 'react-native-action-button';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={{ flex: 1, }}>

          <View>
          <View style={{ position: 'relative', paddingTop: 17, paddingLeft: 15, paddingRight: 15 }}>
            <TextInput placeholder=' What do you want ?' style={{borderWidth:1,borderRadius:20,borderColor:'gray',height:45,paddingLeft:30}} />
            <Image source={require('../asset/search.png')} style={{ top: 29, left: 25, position: 'absolute',height:20,width:20 }} />
            
          </View>
        </View>

        <View style={{ flexDirection:'row', marginTop: 17,justifyContent: 'center' }}>
          
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
            <View style={styles.View}>
            <View style={styles.View2}>
              <Image source={require('../asset/go-ride.png')} style={{ borderRadius: 8 ,height:40,width:40 }} />

            </View>
            <Text style={styles.Text}>
              GO-RIDE
          </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
             <View style={styles.View}>
            <View style={styles.View2}>
              <Image source={require('../asset/go-car.png')} style={{ borderRadius: 8,height:40,width:40 }} />

            </View>
            <Text style={styles.Text}>
              GO-CAR
          </Text>
          </View>
          </TouchableOpacity>
        </View>
  

        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
            <View style={styles.View}>
            <View style={styles.View2}>
              <Image source={require('../asset/go-food.png')} style={{ borderRadius: 8 ,height:40,width:40 }} />

            </View>
            <Text style={styles.Text}>
              GO-FOOD
          </Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
             <View style={styles.View}>
            <View style={styles.View2}>
              <Image source={require('../asset/go-send.png')} style={{ borderRadius: 8,height:40,width:40 }} />

            </View>
            <Text style={styles.Text}>
              GO-SEND
          </Text>
          </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container}> 
          <ActionButton onPress={()=> this.props.navigation.navigate('')} buttonColor='#08d198'>
           
          </ActionButton>
        </View>  

      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  View2: {
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:2,
    borderRadius:40,
    borderColor:'gray'

  },
  View:{
    borderColor:'gray',
    marginHorizontal: 25,
    marginVertical:10,
    borderRadius: 30 
  },
  Text: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
   actionButtonIcon: {
    fontSize: 20,
    height: 30,
    color: 'white',
    height:30,
    width:30
  },

})

