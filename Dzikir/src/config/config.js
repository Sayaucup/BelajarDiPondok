import React from 'react'
import {StyleSheet,Image} from 'react-native'

import DzikirPagi from '../tabs/dzikirpagi'
import DzikirSore from '../tabs/dzikirsore'
import SesudahSholat from '../tabs/dzikirsholat'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

const TabNavigator = createBottomTabNavigator ({
    DzikirPagi: {
        screen:DzikirPagi,
        navigationOptions: ()=>({
        header: null,
        title:'Dzikir Pagi',
        tabBarIcon: () => (
          <Icon name="brightness-3" size={25} color='#cc7a16'   />
        )
      }),
    },
    DzikirSore: {
        screen:DzikirSore,
        navigationOptions: ()=>({
        header: null,
        title:'Dzikir Sore',
        tabBarIcon: () => (
          <Icon name="brightness-4" size={25} color='#cc7a16'  />
        )
      }),
    },
    SesudahSholat: {
        screen:SesudahSholat,
        navigationOptions: ()=>({
        header: null,
        title:'Dzikir Sesudah Sholat',
        tabBarIcon: () => (
          <Icon name="brightness-5" size={25} color='#cc7a16' />
        )
      })
    }
})

const App = createStackNavigator ({
    Tabs : {
        screen: TabNavigator,
        navigationOptions: () => ({
            header:null
        })
    }
})

export default createAppContainer(App);





         
