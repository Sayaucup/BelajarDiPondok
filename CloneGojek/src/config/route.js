import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../component/home'
import GoRide from '../component/go-ride'
import GoCar from '../component/go-car'
import GoFood from '../component/go-food'
import Profil from '../component/profil'
import Setting from '../component/setting'
import Wallet from '../component/wallet'

const App = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions :{
            title:'MENU'
        }
    },
    GoRide: {
        screen: GoRide,
        navigationOptions: {
            title: 'Go-Ride',
        }
    },
    GoCar: {
        screen: GoCar,
        navigationOptions :{
            title: 'Go-Car',
        }
    },
    GoFood: {
        screen: GoFood,
        navigationOptions: {
            title: 'GoFood',
        }
    },
    Profil: {
         screen: Profil,
         navigationOptions: {
             title: 'Profil',
             }
     },
     Setting :{
        screen: Setting,
        navigationOptions:{
            title:'Pengaturan'
        }
     },
     Wallet :{
         screen: Wallet,
         navigationOptions:{
             title:'Wallet'
         }
     }


})

export default createAppContainer(App)