import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Menu from '../component/menu'
import Sholat from '../component/sholat'
import Dzikir from '../component/dzikirpagipetang'
import NamaAllah from '../component/namaallah'
import Tentang from '../component/tentang'

const App = createStackNavigator({
    Menu :{
        screen :Menu ,
        navigationOptions:{
            header:null
        }
    },
    Sholatt :{
        screen :Sholat,
        navigationOptions:{
            title :'Sholat'
        }
    },
    Dzikir :{
        screen :Dzikir,
        navigationOptions: {
            title:'Dzikir'
        }
    },
    NamaAllah:{
        screen :NamaAllah,
        navigationOptions: {
            title :'Asmaulhusna'
        }
    },
    Tentang : {
        screen: Tentang,
        navigationOptions: {
            title: 'Tentang'
        }
    }
    
})



export default createAppContainer(App)
