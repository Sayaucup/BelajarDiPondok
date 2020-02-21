import React,{Component} from 'react';
import { View,Text,ScrollView,Image,StatusBar,TouchableWithoutFeedback,FlatList,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'

import Apparel from './icon/Apprel2.png'
import Beauty from './icon/Beauty2.png'
import Shoes from './icon/Shoes2.png'
import Electronic from './icon/electronics2.png'
import Furniture from './icon/furniture2.png'
import Stationary from './icon/Stationary2.png'

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
            <TouchableOpacity onPress={()=> this.setState({card: item.card})}>
                <View style={{height:90,alignItems:'center'}}>
                    <Image style={{height:69,width:70}} source={uri}/>
                    <Text style={{color:'#5B5D7D',fontFamily:'nunito.semibold'}}>{text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    card = () => {
        if (this.state.card === '1' ) {
            alert('satu')
        } else if (this.state.card === '2'){
            return(
                <View>
                    <Text>halaman 2</Text>
                </View>
            )
        } else if (this.state.card === '3'){
            return(
                <View>
                    <Text>halaman 3</Text>
                </View>
            )
        }else if (this.state.card === '4'){
            return(
                <View>
                    <Text>halaman 4</Text>
                </View>
            )
        }else if (this.state.card === '5'){
            return(
                <View>
                    <Text>halaman 5</Text>
                </View>
            )
        }else if (this.state.card === '6'){
            return(
                <View>
                    <Text>halaman 6</Text>
                </View>
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
                    <Text style={{fontSize:35,color:'#5B5D7D',fontFamily:'Bariol_Bold'}}>
                        All Categories
                    </Text>
                </View>
                {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                    <View style={{flexDirection:'row'}}>
                        <FlatList
                            // showsVerticalScrollIndicator={false}
                            data={data}
                            renderItem={this.category}
                            keyExtractor={item => item.toString()}
                        />
                        <View style={{width:'65%',marginLeft:10}}>
                            {this.card()}
                        </View>
                    </View>
                    {/*<View style={{width:'28%',marginRight:10,alignItems:'center'}}>
                        
                        <View style={{marginVertical:5,height:90,alignItems:'center'}}>
                            <Image style={{height:69,width:70}} source={Apparel}/>
                            <Text style={{color:'#FF8967',fontFamily:'nunito.semibold'}}>Apparel</Text>
                        </View>
                        <View style={{marginVertical:5,height:90,alignItems:'center'}}>
                            <Image style={{height:69,width:70}} source={Beauty}/>
                            <Text style={{color:'#69CAFD',fontFamily:'nunito.semibold'}}>Beauty</Text>
                        </View>
                        <View style={{marginVertical:5,height:90,alignItems:'center'}}>
                            <Image style={{height:69,width:70}} source={Shoes}/>
                            <Text style={{color:'#55D346',fontFamily:'nunito.semibold'}}>Shoes</Text>
                        </View>
                        <View style={{marginVertical:5,height:90,alignItems:'center'}}>
                            <Image style={{height:69,width:70}} source={Electronic}/>
                            <Text style={{color:'#829EF9',fontFamily:'nunito.semibold'}}>Electronic</Text>
                        </View>
                        <View style={{marginVertical:5,height:90,alignItems:'center'}}>
                            <Image style={{height:69,width:70}} source={Furniture}/>
                            <Text style={{color:'#EDC252',fontFamily:'nunito.semibold'}}>Furniture</Text>
                        </View>
                        <View style={{marginVertical:5,height:90,alignItems:'center'}}>
                            <Image style={{height:69,width:70}} source={Stationary}/>
                            <Text style={{color:'#6A6F76',fontFamily:'nunito.semibold'}}>Stationary</Text>
                        </View> 
                    </View>
                    <View style={{width:'65%',backgroundColor:'red',marginLeft:10}}>
                        <Text>
                            eqw
                        </Text>
                    </View>  */}
                {/* </ScrollView> */}
            </View>
        );
    }
}

export default Seeall;