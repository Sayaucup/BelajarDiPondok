import React from "react";
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image,TouchableOpacity} from "react-native";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import  Icon  from 'react-native-vector-icons/MaterialIcons';


export default SideBar = props => (
    
    
        
        
              <View>
                    <ImageBackground style={{width:undefined,backgroundColor:'#1a1a3b'}}>
                   
                   <View style={styles.container}>
                       <Image source={require("../assets/profile.jpg")} style={styles.profile} />
                       <Text style={{ color: "white",fontSize: 20,fontWeight:'bold',marginVertical: 2}}>Yusuf Hadi</Text>
                       <View style={{flexDirection:'row'}}>
                           <Icon name='phone' size={17} color='white'/>
                           <Text style={styles.hp}> :  230801</Text>
                       </View>
                       <Text style={styles.bio}>" Hope you are having a good day Cup !</Text>
                   </View>
                   <View  forceInset={{ top: "always", horizontal: "never" }}>
                       <DrawerNavigatorItems {...props} />
                   </View>
           </ImageBackground>
{/* 
           <View style={{ flexDirection:'row'}}>
               <Text style={styles.followers}>734 Followers</Text>
               <Icon name='people' size={16} color="black" />
           </View> */}

              </View>
       
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:100
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: 'white',
        marginTop: 30,
    },
    name: {
        color: "white",
        fontSize: 20,
        marginTop: 35,
        marginRight:5
    },
    hp : {
        color: "white",
        fontSize: 13,
        fontWeight:'bold',
        marginBottom: 10,
       
    },
    bio : {
        color: "white",
        fontSize: 13,
        fontWeight:'bold',
        marginTop: 30,
        marginHorizontal:10,
        textAlign:'center'
    },
    followers: {
        color: "black",
        fontSize: 13,
        marginRight: 4
    }
});
