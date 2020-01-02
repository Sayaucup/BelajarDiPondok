import React from 'react'
import {View,Text,StyleSheet,FlatList,Image} from 'react-native'
import {connect} from 'react-redux'
import {Changename,Changeemail,Changesekolah,getData} from '../redux/action'

class Screenhasil extends React.Component{

    componentDidMount(){
        this._fetchItem()
    }

    _fetchItem = async () => {
        try {
            let response = await fetch(
                'https://masukajakan.000webhostapp.com/brand.json'
            )
            let responseJson = await response.json()
            await this.props.getData(responseJson)
        } catch (error) {
            console.log(error)
        }
    }

    renderItem ({item}) {
        return(
            <View>
                <Text style={{fontSize:20}}>{item.name_brand}</Text>
                <Image style={{width:50,height:50}} source={{uri : item.image}}/>
                <Text style={{fontSize:16}}>{item.url}</Text>
                <Text style={{fontSize:16}}>{item.description}</Text>
            </View>
        )
    }

    render(){
        return(
            <View>
                 <FlatList 
                    data={this.props.dataSource}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.toString()}
                />
            </View>
        )
    }
}
const mapStateToProps = state => {
    let {name,email,sekolah,dataSource} = state.Reduce
    return {name,email,sekolah,dataSource}
}

export default connect(mapStateToProps,{Changename,Changeemail,Changesekolah,getData})(Screenhasil)

const styles = StyleSheet.create({
    Component:{
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    Card:{
        width:'90%',
        paddingVertical:50,
        paddingHorizontal:10,
        backgroundColor:'#fff',
        elevation:10,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    TextBio:{
        fontSize:16,
        marginVertical:10
    },
    TextTitle:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    }
})