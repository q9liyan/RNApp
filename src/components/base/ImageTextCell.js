import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import DesignConvert from '../../utils/DesignConvert';

export default class ImageTextCell extends Component {
    constructor(props) {
        
        super(props);
        this.isShowBorder = props.isShowBorder === undefined ? true : props.isShowBorder
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={{
                    width: DesignConvert.getW(345),
                    
                    backgroundColor: '#FFFFFF',
                    ...this.props.style
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: DesignConvert.getH(15),
                        marginBottom: DesignConvert.getH(15),
                        marginLeft: DesignConvert.getW(16),
                    }}
                >
                    <Image
                        source={this.props.icon}
                        style={{
                            width: DesignConvert.getW(22),
                            height: DesignConvert.getH(22),
                            resizeMode: 'contain',
                            marginRight: DesignConvert.getW(19),
                        }}></Image>


                    <Text
                        style={{
                            fontSize: DesignConvert.getF(13),
                            color: "#1D1D1D",
                        }}
                    >{this.props.title}</Text>

                    <Image
                        source={require("../../hardcode/main").icon_next()}
                        style={{
                            width: DesignConvert.getW(5.7),
                            height: DesignConvert.getH(10),
                            position: "absolute",
                            right: DesignConvert.getW(25),
                        }}></Image>
                </View>
                <View
                    style={{
                        width: DesignConvert.getW(315),
                        height: DesignConvert.getH(1),
                        backgroundColor: '#F8F8F8',
                        display: this.isShowBorder ? 'none' : 'flex'
                    }}
                />
            </TouchableOpacity >
        )
    }

}