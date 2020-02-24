import React,{Component} from 'react';
import { View,Text,ScrollView,Image,StatusBar,TouchableWithoutFeedback,FlatList,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import ApparelJS from './category/Apparel'
import BeautyJS from './category/Beauty'
import ShoesJS from './category/Shoes'
import ElectronicyJS from './category/Electronic'
import FurnitureJS from './category/Furniture'
import StationaryJS from './category/Stationary'



import Apparel from '../icon/Apprel2.png'
import Beauty from '../icon/Beauty2.png'
import Shoes from '../icon/Shoes2.png'
import Electronic from '../icon/electronics2.png'
import Furniture from '../icon/furniture2.png'
import Stationary from '../icon/Stationary2.png'

console.disableYellowBox = true;

const data = [
    {
        uri : Apparel,
        text : 'Apparel',
        card : '1'
    },
    {
        uri : Beauty,
        text : 'Beauty',
        card : '2'
    },
    {
        uri : Shoes,
        text : 'Shoes',
        card : '3'
    },
    {
        uri : Electronic,
        text : 'Electronic',
        card : '4'
    },
    {
        uri : Furniture,
        text : 'Furniture',
        card : '5'
    },
    {
        uri : Stationary,
        text : 'Stationary',
        card : '6'
    }
]

class Seeall extends Component {
    state={
        card:''
    }
    category = ({item}) => {
        const {uri,text} = item;
        return(
                <TouchableWithoutFeedback onPress={()=> this.setState({card: item.card})}>
                    <View style={{height:90,alignItems:'center',marginVertical:10}}>
                        <Image style={{height:70,width:70}} source={uri}/>
                        <Text style={{color:'#5B5D7D',fontFamily:'nunito.semibold'}}>{text}</Text>
                    </View>
                </TouchableWithoutFeedback>
        )
    }
    card = () => {
        if (this.state.card === '1' ) {
            return(
                <ApparelJS/>
            )
        }else if (this.state.card === '2'){
            return(
                <BeautyJS/>
            )
        }else if (this.state.card === '3'){
            return(
                <ShoesJS/>
            )
        }else if (this.state.card === '4'){
            return(
                <ElectronicyJS/>
            )
        }else if (this.state.card === '5'){
            return(
                <FurnitureJS/>
            )
        }else if (this.state.card === '6'){
            return(
                <StationaryJS/>
            )
        }
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'#F4F4F4'}}>
                <StatusBar backgroundColor='#F4F4F4'/>
                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Home')}>
                    <View style={{marginTop:10,marginRight:25,alignSelf:'flex-end'}}>
                        <Icon name='x' size={25} color='red'/>
                    </View>
                </TouchableWithoutFeedback>
                <View style={{marginLeft:25}}>
                    <Text style={{fontSize:35,color:'#5B5D7D',fontFamily:'nunito.bold'}}>
                        All Categories
                    </Text>
                </View>
                <View style={{flex:1,flexDirection:'row',marginTop:20}}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={this.category}
                        keyExtractor={item => item.toString()}
                    />
                    <View style={{width:'65%',margin:10}}>
                        {this.card()}
                    </View>            
                </View>
            </View>
        );
    }
}

export default Seeall;