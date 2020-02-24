import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Home from '../tabs/home'
import Search from '../tabs/search'
import Cart from '../tabs/cart'
import Profile from '../tabs/profile'
import More from '../tabs/more'

import Latest from '../componentHome/Latest'
import Seeall from '../componentHome/Seeall'


import Apparel from '../componentHome/category/Apparel'
import Beauty from '../componentHome/category/Beauty'
import Shoes from '../componentHome/category/Shoes'
import Electronic from '../componentHome/category/Electronic'
import Furniture from '../componentHome/category/Furniture'
import Stationary from '../componentHome/category/Stationary'


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
    Apparel:{
        screen:Apparel,
        navigationOptions:{
            header:null
        }
    },
    Beauty:{
        screen:Beauty,
        navigationOptions:{
            header:null
        }
    },
    Shoes:{
        screen:Shoes,
        navigationOptions:{
            header:null
        }
    },
    Electronic:{
        screen:Electronic,
        navigationOptions:{
            header:null
        }
    },
    Furniture:{
        screen:Furniture,
        navigationOptions:{
            header:null
        }
    },
    Stationary:{
        screen:Stationary,
        navigationOptions:{
            header:null
        }
    },
})

export default createAppContainer(App)