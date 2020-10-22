import BasePageComponent from '@components/base/BasePageComponent';
import navigationService from '@router/navigaitonService';
import DesignConvert from '@utils/DesignConvert';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TouchableOpacity, Image
} from 'react-native';
import Banner from '../../custom/Banner'
import HotLamp from '../../custom/HotLamp'

import HotCardView from '../../custom/HotCardView'
import HotSectionItem from '../../custom/HotSectionItem'
import TextButton from '@components/base/TextButton';

import LinearGradient from 'react-native-linear-gradient';

export default class HomePage extends BasePageComponent {

    constructor(props) {
        super(props);
        this.banners = [
            {
                image: 'http://www.qq745.com/uploads/allimg/141106/1-141106153Q5.png',
            },
            {
                image: 'http://img1.3lian.com/2015/a1/53/d/200.jpg',
            }
        ];
        this.horseLamp = [
            {
                channelName: '滴滴车主 无车注册 安心、自由、稳定',
                channelLink: '',
            },
            {
                channelName: 'Halo车主',
                channelLink: '',
            },
            {
                channelName: 'Halo车主',
                channelLink: '',
            },
            {
                channelName: 'Halo车主',
                channelLink: '',
            },
        ];
        this.state = {
            bannerList: [],

        };

    }

    _renderMomentum = () => {

    }
    // 常见问题
    _questionPress = () => {

    }
    // 商家入驻
    _storejionPress = () => {

    }
    // 游戏中心
    _gemcenterPress = () => {

    }
    // 新任务时间
    _newTaskPress = () => {

    }

    _carRegister = () => {

    }

    _unCarRegister = () => {

    }

    _clickListener = () => {

    }



    render() {
        return (
            <View style={style.container}>

                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={style.scrollContentContainer}
                    style={{
                        flex: 1,
                        height: DesignConvert.sheight
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            width: DesignConvert.swidth,
                            height: DesignConvert.getH(88),
                            justifyContent: 'center',
                        }}
                    >
                        <Text
                            style={{
                                marginLeft: DesignConvert.getW(16),
                                marginTop: DesignConvert.getH(12),
                                fontSize: DesignConvert.getF(20),
                                fontWeight: 'bold'
                            }}
                        >
                            热门
                        </Text>
                        <View
                            style={{
                                backgroundColor: '#00D8C9',
                                width: DesignConvert.getW(15),
                                height: DesignConvert.getH(4),
                                marginLeft: DesignConvert.getW(25),
                                marginTop: DesignConvert.getH(4)
                            }}
                        />
                        <Image
                            style={{
                                position: 'absolute',
                                width: DesignConvert.getW(27),
                                height: DesignConvert.getH(27),
                                right: DesignConvert.getW(27),


                            }}
                            source={require('../../../hardcode/main.js').home_topmain_icon()}
                        />
                    </View>
                    <Banner
                        // banners={this.state.bannerList}
                        banners={this.banners}
                        defaultIndex={0}
                        onMomentumScrollEnd={this._renderMomentum}
                        intent={this._clickListener}
                        scrollEnabled
                        style={{
                            width: DesignConvert.getW(345),
                            height: DesignConvert.getH(160),
                            borderRadius: DesignConvert.getW(10),
                        }}
                    />

                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            width: DesignConvert.getW(345),
                            height: DesignConvert.getH(100),
                            marginTop: DesignConvert.getH(8),
                            backgroundColor: '#00D8C9',
                            borderRadius: DesignConvert.getW(8)
                        }}
                    >
                        <TextButton
                            style={{
                                width: DesignConvert.getW(90),
                                height: DesignConvert.getH(30),
                                borderColor: 'white',
                                borderWidth: DesignConvert.getW(1),
                                borderRadius: DesignConvert.getW(20),
                            }}
                            text={'立即注册'}
                            textStyle={{
                                color: 'white'
                            }}
                            onPress={this._carRegister}
                        />

                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}
                            colors={["#FFB76D", "#FF9A41"]}
                            style={{
                                alignItems: 'center',
                                width: DesignConvert.getW(90),
                                height: DesignConvert.getH(30),
                                borderRadius: DesignConvert.getW(20),
                                justifyContent: 'center'
                            }}>
                            <TextButton
                                style={{
                                    width: DesignConvert.getW(90),
                                    height: DesignConvert.getH(30),
                                }}
                                text={'无车注册'}
                                onPress={this._unCarRegister}
                            />
                        </LinearGradient>
                    </View>

                    <HotCardView />

                    <HotLamp
                        horseLampList={this.horseLamp} />

                    <View
                        style={{
                            width: DesignConvert.swidth - DesignConvert.getW(30),
                            justifyContent: 'space-between',
                            marginTop: DesignConvert.getH(18),
                            padding: DesignConvert.getW(5),
                            flexWrap: 'wrap',
                            flexDirection: "row",
                        }}>
                        <HotSectionItem
                            img={require("../../../hardcode/main").home_stop_icon()}
                            text="新任务"
                            onPress={this._newTaskPress} />

                        <HotSectionItem
                            img={require("../../../hardcode/main").home_store_icon()}
                            text='游戏中心'
                            onPress={this._gemcenterPress} />

                        <HotSectionItem
                            img={require("../../../hardcode/main").home_leve_icon()}
                            text="商家入驻"
                            onPress={this._storejionPress} />

                        <HotSectionItem
                            img={require("../../../hardcode/main").home_question_icon()}
                            text="常见问题"
                            onPress={this._questionPress} />
                    </View>

                    {/* <Text>
                        热门
                    </Text> */}



                </ScrollView>
            </View>
        )
    }

}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    scrollContentContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})
