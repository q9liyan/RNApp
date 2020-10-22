/**
 * 主界面 -> 首页 -> Card
 */

'use strict';

import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import DesignConvert from '../../utils/DesignConvert';


export default class HotCardView extends Component {
    constructor(props) {
        super(props);

    }

    _onItemPress = () => {
        if (!this.props.item) {
            this.props.onPress();
            return
        }
        this.props.onPress(this.props.item);
    }

    _titlePress = () => {

    }

    _cardItem = () => {
        return (
            <View
                style={{
                    flex: 1,
                    marginTop: DesignConvert.getH(39)
                }}>

                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Text
                        style={{
                            color: "#E8FFFD",
                            fontSize: DesignConvert.getF(11),
                        }}
                    >{"今日收入 (元)"}</Text>

                    <Text
                        style={{
                            color: "white",
                            fontSize: DesignConvert.getF(20),
                            fontWeight: "bold",
                            marginTop: DesignConvert.getH(6),
                        }}
                    >{'注册认证后,查看具体收入'}</Text>
                </View>

                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                    }}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>

                        <Text
                            style={{
                                color: "#E8FFFD",
                                fontSize: DesignConvert.getF(11),
                            }}
                        >{"今日成单"}</Text>

                        <Text
                            style={{
                                color: "white",
                                fontSize: DesignConvert.getF(13),
                                fontWeight: "bold",
                                marginTop: DesignConvert.getH(10),
                            }}
                        >{'0'}</Text>
                    </View>

                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Text
                            style={{
                                color: "#E8FFFD",
                                fontSize: DesignConvert.getF(11),
                            }}
                        >{"接单量"}</Text>

                        <Text
                            style={{
                                color: "white",
                                fontSize: DesignConvert.getF(13),
                                fontWeight: "bold",
                                marginTop: DesignConvert.getH(10),
                            }}
                        >{'0'}</Text>


                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <ImageBackground 
                source={require('../../hardcode/main.js').home_hotsection_bg()}
            style={style.container}>
                {this._cardItem()}
            </ImageBackground>
        )
    }
}



function ImageTitleItem(props) {
    const { onPress, isShowBackground, title } = props


    return (
        <View
            style={{
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {isShowBackground ?
                <TouchableOpacity
                    onPress={onPress}
                    style={{
                        marginTop: DesignConvert.getH(10),
                        width: DesignConvert.getW(200),
                        height: DesignConvert.getH(22),
                        borderTopRightRadius: DesignConvert.getW(11),
                        borderBottomRightRadius: DesignConvert.getW(11),
                        backgroundColor: 'rgba(0, 0, 0, 0.3)'
                    }}
                >
                    <Image
                        style={{
                            width: DesignConvert.getW(22),
                            height: DesignConvert.getH(22)
                        }}
                    />
                    <Text
                        style={{
                            color: 'white',
                            fontSize: DesignConvert.getW(11),
                            fontWeight: 'bold'
                        }}
                    >
                        {title}
                    </Text>
                </TouchableOpacity> :
                (<TouchableOpacity
                    onPress={onPress}
                    style={{
                        marginTop: DesignConvert.getH(10),
                        width: DesignConvert.getW(220),
                        height: DesignConvert.getH(35)
                    }}
                >
                    <Image
                        style={{
                            width: DesignConvert.getW(35),
                            height: DesignConvert.getH(35)
                        }}
                    />
                    <Text
                        style={{
                            color: 'white',
                            fontSize: DesignConvert.getW(14),
                            fontWeight: 'bold'
                        }}
                    >
                        {title}
                    </Text>
                </TouchableOpacity>)}

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: DesignConvert.getW(345),
        height: DesignConvert.getH(162),
        marginTop: DesignConvert.getH(16)
    }
})
