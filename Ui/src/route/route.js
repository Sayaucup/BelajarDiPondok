import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Home from '../screen/home'
import Search from '../screen/search'
import Cart from '../screen/cart'
import Profile from '../screen/profile'
import More from '../screen/more'
import Latest from '../Latest'
import Seeall from '../Seeall'

import Icon from 'react-native-vector-icons/AntDesign'
import Iconn from 'react-native-vector-icons/Ionicons'

const Route = createBottomTabNavigator (
    {
        Home:{
                screen: Home,
                navigationOptions: ()=>({
                    header: null,
                    tabBarIcon: ({tintColor}) => (
                    <Icon name="home" color={tintColor} size={20}/>
                    )
                }),
        },
            Search:{
                screen:Search,
                navigationOptions: ()=>({
                    header: null,
                    tabBarIcon: ({tintColor}) => (
                    <Icon name="search1" color={tintColor} size={20}/>
                    )
                }),
        },
            Cart:{
                screen:Cart,
                navigationOptions: ()=>({
                    header: null,
                    tabBarIcon: ({tintColor}) => (
                    <Icon name="shoppingcart" color={tintColor} size={20}/>
                    )
                }),
        },
            Profile:{
                screen:Profile,
                navigationOptions: {
                    header: null,
                    tabBarIcon: ({tintColor}) => 
                    <Icon name="user" color ={tintColor}size={20}/>
                    
                }
            },
            More:{
                screen:More,
                navigationOptions: {
                    header: null,
                    tabBarIcon: ({tintColor}) => 
                    <Iconn name="md-more" color ={tintColor}size={20}/>
                    
                }
            }

    },
    {
        tabBarOptions:{
            activeTintColor:'#F33030',
            inactiveTintColor:'#181818',
            tabStyle:{
                backgroundColor:'#fff'
            }
        }
    }
)

const App = createStackNavigator ({
    Menu:{
        screen:Route,
        navigationOptions:{
            header:null
        }
    },
    Latest:{
        screen:Latest,
        navigationOptions:{
            header:null
        }
    },
    Seeall:{
        screen:Seeall,
        navigationOptions:{
            header:null
        }
    },
})

export default createAppContainer(App)