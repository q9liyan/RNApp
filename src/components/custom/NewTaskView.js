import React, { Component } from 'react';
import { Image, ImageBackground, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import DesignConvert from '../../utils/DesignConvert';

export default class HotCardView extends Component {
    constructor(props) {
        super(props);
        this.newTaskList = props.newTaskList
    }

    _renderHorseLampItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={this._onHorseLampPress}
                style={{
                    width: DesignConvert.getW(345),
                    height: DesignConvert.getW(40),
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor:'#00D8C9',
                    borderRadius: DesignConvert.getW(12),
                }}>

                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>

                <Image
                    style={{
                        width: DesignConvert.getW(19),
                        height: DesignConvert.getH(19),
                        marginLeft: DesignConvert.getW(12)
                    }}
                    source={require('../../hardcode/main.js').home_topstart_icon()}
                />

                    <Text
                        onPress={() => {
                            this._onAvatorPress(item.channelLink)
                        }}
                        numberOfLines={1}
                        style={{
                            color: 'white',
                            maxWidth: DesignConvert.getW(260),
                            fontSize: DesignConvert.getH(14),
                            marginLeft: DesignConvert.getW(12)
                        }}>
                        {item.channelName}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                    data={this.newTaskList}
                    renderItem={this._renderHorseLampItem}
                    initialNumToRender={1}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    onScrollToIndexFailed={this._onScrollToIndexFailed}
                    style={{
                        width: DesignConvert.getW(345),
                        height: DesignConvert.getH(40),
                    }}
                />
        )
    }
}