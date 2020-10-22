import DesignConvert from '@utils/DesignConvert';
import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Image
 } from 'react-native';

//TODO:跑马灯要实现或者用框架，暂时不浪费时间
export default class HotLamp extends Component {
    constructor(props) {
        super(props);
        this._horseLampList = props.horseLampList
        this.state = {
            index: 0,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        
        this._horseLampList = nextProps.horseLampList ? nextProps.horseLampList : [];
        
        if (this._horseLampList && this._horseLampList.length > 0) {
            this._startTimeout();
        }
        return true;
    }


    componentWillUnmount() {
        this._stopTimeout();
    }

    _stopTimeout() {
        if (this._Timer) {
            clearTimeout(this._Timer);
            this._Timer = null;
        }
    }

    _startTimeout() {
        if (this._Timer) return;

        this._Timer = setTimeout(() => {

            this._Timer = null;

            if (!this._flatList) {
                this.setState({ index: 0, })
            } else {
                this._flatList.scrollToIndex({
                    animated: true,
                    index: this.state.index,
                    viewOffset: 0,
                    viewPosition: 0,
                });
                let currentIndex = this.state.index + 2 > this._horseLampList.length ? 0 : this.state.index + 1;
                this.setState({ index: currentIndex, })
            }

        }, 5000);
    }

    _getFlatList = (ref) => {
        this._flatList = ref;
    }

    _onScrollToIndexFailed = () => {
        this.setState({
            index: 0,
        })
        this._flatList.scrollToEnd();
    }

    _onHorseLampPress = () => {

    }

    _onAvatorPress = (userId) => {

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
                    borderRadius: DesignConvert.getW(10),
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
            <View
                style={style.container}
            >
                
                <FlatList
                    ref={this._getFlatList}
                    data={this._horseLampList}
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
            </View>

        )
    }
}

const style = StyleSheet.create({
    container: {
        width: DesignConvert.getW(345),
        height: DesignConvert.getH(40),
        marginTop: DesignConvert.getH(15),
    }
})