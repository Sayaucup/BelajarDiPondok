import React,{Component} from 'react'
import {View,Text,FlatList,Image,ScrollView} from 'react-native';
import kiri from '../../icon/next.png'

const dataList = [
    {
        text : 'satu',
        img :  kiri
    },
    {
        text : 'dua',
        img :  kiri
    },
    {
        text : 'tiga',
        img :  kiri
    },
    {
        text : 'empat',
        img :  kiri
    },
    {
        text : 'lima',
        img :  kiri
    },
    {
        text : 'enam',
        img :  kiri
    },
    {
        text : 'tujuh',
        img :  kiri
    },
]

class Stationary extends Component {
    state = {  }

    list = ({item}) => {
        const {text,img} = item
        return(
            <View>
                <View style={{marginVertical:6,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{fontSize:15,fontFamily:'nunito.semibold',color:'#5B5D7D'}}>{text}</Text>
                    <View style={{height:20,width:20,alignItems:'center',justifyContent:'center',backgroundColor:'#F1F1F1',borderRadius:20}}>
                        <Image style={{height:8,width:8}} source={img}/>
                    </View>
                </View>
                <View style={{height:2,width:'100%',backgroundColor:'#F1F1F1'}}/>

            </View>
        )
    }

    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{fontFamily:'nunito.bold',fontSize:11,color:'#9FA2A9'}}>
                        STATIONARY
                    </Text>
                    <FlatList 
                        style={{marginTop:10,backgroundColor:'#fff',borderRadius:10,paddingHorizontal:10}}
                        data={dataList}
                        renderItem={this.list}
                        keyExtractor={item => item.toString()}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default Stationary;