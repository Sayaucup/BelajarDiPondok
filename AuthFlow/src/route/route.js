import React from 'react'
import {View,Image,TouchableOpacity} from 'react-native'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Authloading from '../screen/Authloading'
import Welcome from '../screen/welcome'
import Signin from '../screen/signin'
import Signup from '../screen/signup'
import Home from '../screen/home'
import Setting from '../screen/setting'

const Menu = require ('../asset/list.png')

const AuthStack = createStackNavigator ({
    Welcome : Welcome,
    Signin : Signin,
    Signup : Signup
})

const AppTab = createBottomTabNavigator ({
    Home : {
        screen : Home,
    },
    Setting : {
        screen : Setting
    }
})

const AppStack = createStackNavigator ({
    AppTab : {
        screen : AppTab,
        // navigationOptions : ({ navigation }) => ({
        //     title:'CLIO',
        //     headerLeft : (
        //         <TouchableOpacity onPress = {() => navigation.toggleDrawer()}>
        //             <View style = {{ paddingHorizontal : 10 }}>
        //                 <Image source = {Menu} style = {{width:24 , height:24}}/>
        //             </View>
        //         </TouchableOpacity>
        //     )
        // })
    }
})

// const AppDrawer = createDrawerNavigator ({
//     Home : AppStack,
// })

const AuthSwitch = createSwitchNavigator ({
    Authloading : Authloading,
    AuthStack : AuthStack,
    App : AppStack
})

export default createAppContainer (AuthSwitch)


