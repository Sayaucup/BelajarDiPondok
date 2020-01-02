import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Screen from '../component/Screen'
import Screenhasil from '../component/Screenhasil'

const  Route = createStackNavigator ({
    Screen: {
        screen:Screen,
        navigationOptions: {
            header: null
        }
    },
    Screenhasil: {
        screen:Screenhasil,
        
    }
})

export default createAppContainer(Route)