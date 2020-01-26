import Signin from '../component/signin' 
import Signup from '../component/signup' 
import Menu from '../component/menu'
import Update from '../component/detail'
import Tambah from '../component/tambah'


import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

const App = createStackNavigator ({
    Signin: {
        screen: Signin,
        navigationOptions: {
            header:null
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            header:null
        }
    },
    Menu :{
        screen: Menu,
        navigationOptions: {
            header: null
        }
    },
    Update :{
        screen: Update,
        navigationOptions: {
            header:null
        }
    },
    Tambah: {
        screen: Tambah,
        navigationOptions: {
            header:null
        }
    }
    
})

export default createAppContainer(App)
