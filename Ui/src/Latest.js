import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import img from './icon/Component.jpg'

import { SliderBox } from "react-native-image-slider-box";


export default class Latest extends Component {
constructor(props) {
    super(props);
    this.state = {
    images: [
        img,
        img,
        img,
        img,

    ]
    };
}
onLayout = e => {
    this.setState({
    width: e.nativeEvent.layout.width
    });
};

render() {
    return (
        <View style={styles.container} onLayout={this.onLayout}>
            <SliderBox
                images={this.state.images}
                sliderBoxHeight={200}
                dotColor="#fe696b"
                inactiveDotColor="#dddddd"
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 15,
                    backgroundColor: '#fe696b',
                }}
                paginationBoxStyle={{
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 10
                }}
                paginationBoxVerticalPadding={20}
                autoplay={true}
                circleLoop
                parentWidth={this.state.width}
                ImageComponentStyle={{borderRadius: 15, width: '90%'}}
                imageLoadingColor="#dddddd"
            />
        </View>
    );
}
}

const styles = StyleSheet.create({
container: {
    
}
});