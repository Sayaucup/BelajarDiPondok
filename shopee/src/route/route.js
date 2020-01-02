import React from 'react'
import {StyleSheet,Image} from 'react-native';

import Beranda from '../menu/beranda'
import Feed from '../menu/feed'
import Shopeelive from '../menu/shopeelive'
import Notifikasi from '../menu/notifikasi'
import Saya from '../menu/saya' 
import Coba from '../menu/menu/coba'

import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'

const BerandaIcon = require ('../asset/home.png')
const FeedIcon = require ('../asset/bag.png')
const LiveIcon = require ('../asset/live.png')
const NotificationIcon = require ('../asset/notification.png')
const SayaIcon = require ('../asset/user.png')

const TabNavigator = createBottomTabNavigator({
    Beranda : {
        screen : Beranda,
        navigationOptions: ()=>({
            header: null,
            tabBarIcon: ({ tintColor }) => (
              <Image source={BerandaIcon} style={{height:25,width:25,tintColor}}/>
            )
          })
    },
    Feed : {
        screen : Feed,
        navigationOptions: ()=>({
            header: null,
            tabBarIcon: ({ tintColor }) => (
              <Image source={FeedIcon} style={{height:25,width:25,tintColor}}/>
            )
          })
    },
    Shopeelive : {
        screen : Shopeelive,
        navigationOptions: ()=>({
            header: null,
            tabBarIcon: ({ tintColor }) => (
              <Image source={LiveIcon} style={{height:25,width:25,tintColor}}/>
            )
          })
    },
    Notifikasi : {
        screen : Notifikasi,
        navigationOptions: ()=>({
            header: null,
           
            tabBarIcon: ({ tintColor }) => (
              <Image source={NotificationIcon} style={{height:25,width:25,tintColor}}/>
            )
          })
    },
    Saya : {
        screen : Saya,
        navigationOptions: ()=>({
            header: null,
            tabBarIcon: ({ tintColor }) => (
              <Image source={SayaIcon} style={{height:25,width:25,tintColor}}/>
            )
          })
    },
   
    
  })

  const App = createStackNavigator ({
    Menu : {
        screen : TabNavigator,
        navigationOptions: () => ({
            header : null
        })
    },
    Coba : {
        screen: Coba
    },
    
  })
  
  export default createAppContainer(App);

  

  const styles = StyleSheet.create ({
    icon:{
        height: 25,
        width: 25
    }
  })

           