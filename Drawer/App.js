import React from "react";

import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Dimensions } from "react-native";
import Icon  from 'react-native-vector-icons/MaterialIcons';

import 
    Chat
 from "./screens/Chat";
import 
    Setting
 from "./screens/dua";

import SideBar from './components/SideBar';



const DrawerNavigator = createDrawerNavigator(
    {
        Chat: {    
            screen: Chat,
            navigationOptions: {
                
                drawerIcon: ({ tintColor }) => <Icon name="bug-report" size={16} color={tintColor} />
            }
        },
        Setting: {
            screen: Setting,
            navigationOptions: {
                drawerIcon: ({ tintColor }) => <Icon name="bug-report" size={16} color={tintColor} />
            }
        },
        
        
    },
    {
        contentComponent: props => <SideBar {...props} />,

        drawerWidth: Dimensions.get("window").width * 0.8,
        // hideStatusBar: true,

        contentOptions: {
            activeBackgroundColor: "#c5d0e3",
            
            
            // activeBackgroundColor: '#909096',
            activeTintColor: "white",
            inactiveTintColor: "#909096",
            itemsContainerStyle: {
                
                marginTop: 360,
            },
            itemStyle: {
                borderRadius: 4
            }
        }
    }
)


export default createAppContainer(DrawerNavigator);