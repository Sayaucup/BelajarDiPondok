import React from 'react';
import { View,Text,TouchableOpacity,Image,ScrollView,StyleSheet} from 'react-native';

class App extends React.Component {
    render(){
        return(
            <View style={{flex:1}}>
                {/* atas sampe shope pay*/}
                <View style={{backgroundColor:'red',height:175}}>
                    <View style={{margin:15}}>
                        <View style={{height:40,borderWidth:1,borderColor:'gray',width:210,backgroundColor:'white'}}>
                            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Search')}>
                                <Image style={{left:8,top:11,height:15,width:16}} source={require('../asset/search.png')}/>
                                <Text style={{left:30,fontSize:14,bottom:6,color:'red'}}>Shopee</Text>
                            </TouchableOpacity>
                            <Image style={{height:20,width:20,left:180,bottom:24}} source={require('../asset/camera.png')}/>
                            <Image style={{height:25,width:25,left:235,bottom:46}} source={require('../asset/shopping.png')}/>
                            <Image style={{height:25,width:25,left:295,bottom:71}} source={require('../asset/chat.png')}/>
                        </View>

                        <View style={{top:110}}>
                        <View style={{elevation:5,backgroundColor:'#fafafa',height:60,borderRadius:5}}>
                            <View style={{borderRightWidth:1,borderRightColor:'gray',width:60,top:11}}>
                                <Image style={{height:35,width:35,left:13}} source={require('../asset/qr.png')}/>
                            </View>
                            <View style={{bottom:18}}>
                                <Image style={{height:27,width:27,left:68,bottom:9.5}} source={require('../asset/wallet.png')}/>
                                <Text style={{left:98,bottom:32.5,fontSize:13.5,color:'black'}}>Shopee Pay</Text>
                                <Text style={{left:70,bottom:30,fontSize:10,color:'#4f4f4f'}}>Top Up Shopee Pay</Text>
                            </View>
                            <View style={{borderRightWidth:1,borderRightColor:'gray',width:195,height:33,bottom:83}}>
                                <Image style={{height:20,width:20,left:205}} source={require('../asset/coin.png')}/>
                                <Text style={{left:231,bottom:19.5,fontSize:13.5,color:'black'}}>500 Koin</Text>
                                <Text style={{left:204,bottom:18,fontSize:10,color:'#4f4f4f'}}>Kumpulkam Koin Shopee</Text>
                            </View>
                        </View>
                    </View> 
                    </View>
                </View>
                {/* ScrollView horizantal */}
                <View>
                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection:'row', marginTop: 55,justifyContent:'center'}}>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            
                        </View>
                        <View style={{ flexDirection:'row', marginTop: 55,justifyContent:'center'}}>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            
                        </View>
                        </ScrollView>

                        
                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection:'row', marginTop: 5,justifyContent:'center'}}>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            <View style={styles.view}>
                                <View style={styles.view2}>
                                    <Image source={require('../asset/bag.png')} style={{height:25,width:25}} />
                                </View>
                                <Text style={styles.text}>Shopee Mall</Text>
                            </View>
                            
                        </View>
                        
                    </ScrollView>

                </View>
            </View>
        )
    }

}

export default App

const styles = StyleSheet.create ({
    view: {
        marginHorizontal: 10,
        marginVertical:10,
    },
    view2: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1.5,
        left:13,
        borderRadius:8,
        borderColor:'gray'
    },
    text: {
        fontSize: 12, 
        textAlign: 'center',
        justifyContent:'center'
    }
})

