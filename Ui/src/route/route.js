import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import Index from '../screen/index'
import Search from '../screen/search'
import Inbox from '../screen/inbox'
import Account from '../screen/account'

import Icon from 'react-native-vector-icons/MaterialIcons'

const Route = createBottomTabNavigator (
    {
        Index:{
            screen: Index,
            navigationOptions: ()=>({
                header: null,
                tabBarIcon: ({tintColor}) => (
                  <Icon name="restaurant-menu" color={tintColor} size={25}/>
                )
              }),
        },
        Search:{
            screen:Search,
            navigationOptions: ()=>({
                header: null,
                tabBarIcon: ({tintColor}) => (
                  <Icon name="search" color={tintColor} size={25}/>
                )
              }),
        },
        Inbox:{
            screen:Inbox,
            navigationOptions: ()=>({
                header: null,
                tabBarIcon: ({tintColor}) => (
                  <Icon name="inbox" color={tintColor} size={25}/>
                )
              }),
        },
        Account:{
            screen:Account,
            navigationOptions: {
                header: null,
                tabBarIcon: ({tintColor}) => 
                  <Icon name="account-circle" color ={tintColor}size={25}/>
                
              }
        }

    },
    {
        tabBarOptions:{
            activeTintColor:'#f27995',
            showLabel:false,
            tabStyle:{
                backgroundColor:'white'
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
    }
})

export default createAppContainer(App)