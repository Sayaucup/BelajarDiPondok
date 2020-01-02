import React from 'react'

import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Signup from '../screen/signup'
import Signin from '../screen/signin'
import menu from '../screen/home'
import Chat from '../screen/Chat'
import Account from '../screen/Account'
import EditProfile from '../screen/editProfile'
import Password from '../screen/Password'
import Contact from '../screen/contact'
import Auth from './Auth'

import Icon from 'react-native-vector-icons/SimpleLineIcons'

const AuthStack = createStackNavigator ({
    Signin:{screen:Signin,
        navigationOptions:{
            header:null
        }
    },
    Signup:{screen:Signup,
        navigationOptions:{
            header:null
        }
    },
})

const Bottom = createBottomTabNavigator ({
    
    menu:{screen:menu,
        navigationOptions: ()=>({
            title:'Beranda', 
            tabBarIcon: ({tintColor}) => (
              <Icon name="home" color={tintColor} size={25}/>
            )
          })},
    Account:{screen:Account,
        navigationOptions: ()=>({
            title:'Account',
            tabBarIcon: ({tintColor}) => (
              <Icon name="user" color={tintColor} size={25}/>
            )
          })}    
},
{
    tabBarOptions:{
        activeTintColor:'#1a1a3b',
        
        
        tabStyle:{
            backgroundColor:'#fff'
        }
    }
    
})

const Stack = createStackNavigator ({
    Bottom :{screen:Bottom,
    navigationOptions:{
        header:null
    }},
    Chat :{screen:Chat,
    navigationOptions:{
        header:null
    }},
    EditProfile :{screen:EditProfile,
    navigationOptions:{
        header:null
    }},
    Password : {screen:Password,
        navigationOptions:{
            header:null
    }},
    Contact :{screen:Contact,
    navigationOptions:{
        title:'Select Contact'
    }}
    
    
    
   
})

const Switch = createSwitchNavigator ({
    Authloading : Auth,
    AuthStack : AuthStack,
    App : Stack
})

export default createAppContainer(Switch)