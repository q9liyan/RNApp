import BasePageComponent from '@components/base/BasePageComponent';
import ImageTextCell from '@components/base/ImageTextCell';
import ToastUtil from '@components/base/ToastUtil';
import DesignConvert from '@utils/DesignConvert';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Clipboard
} from 'react-native';



export default class MePage extends BasePageComponent {

    constructor(props) {
        super(props);
        this._avatar = require('../../../hardcode/main').mine_defaultheader_icon()
        this.state = {};
    }

    _onCopyPress = () => {
        Clipboard.setString(this._userId);
        ToastUtil.showCenter("复制成功");
    }

    _onAvatarPress = () => {

    }



    _renderMyInfo = () => {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: DesignConvert.getH(60) + DesignConvert.statusBarHeight,
                    width: DesignConvert.getW(345),
                    height: DesignConvert.getH(125),
                    borderRadius: DesignConvert.getW(10),
                    backgroundColor: 'white',
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: DesignConvert.getHeight(-40)
                    }}
                    onPress={this._onAvatarPress}
                >
                    <Image
                        source={this._avatar}
                        style={{
                            // resizeMode: 'stretch',
                            width: DesignConvert.getW(80),
                            height: DesignConvert.getH(80),
                            borderRadius: DesignConvert.getW(42),
                            borderWidth: DesignConvert.getW(1),
                            borderColor: '#FFFFFF'
                        }}
                    />
                </TouchableOpacity>

                <Text
                    numberOfLines={1}
                    style={{
                        marginTop: DesignConvert.getH(48),

                        maxWidth: DesignConvert.getW(200),
                        color: "#000000",
                        fontSize: DesignConvert.getF(13),
                        fontWeight: "bold",
                    }}>{'请登录'}</Text>
                <View
                    style={{
                        marginTop: DesignConvert.getH(9),
                        flexDirection: 'row',

                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: DesignConvert.getF(12),
                            fontWeight: "normal",
                            color: '#878787'
                        }}>ID: {this._cutenumber ? this._cutenumber : this._userId}</Text>
                    <TouchableOpacity
                        style={{
                            paddingLeft: DesignConvert.getW(5),
                        }}
                        onPress={this._onCopyPress}>
                        <Text
                            style={{
                                color: '#878787',
                                fontSize: DesignConvert.getF(12)
                            }}
                        >复制</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    _renderTopFan = () => {
        return (
            <View
                style={{
                    width: DesignConvert.getW(345),
                    height: DesignConvert.getH(90),
                    borderRadius: DesignConvert.getW(10),
                    marginTop: DesignConvert.getH(8),
                    backgroundColor: '#FFFFFF',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity
                    // onPress={this._onMyLovesPress}
                    style={{
                        marginRight: DesignConvert.getW(85),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text
                        style={{
                            marginBottom: DesignConvert.getH(3),
                            color: "#1D1D1D",
                            fontSize: DesignConvert.getF(20),
                            fontWeight: "bold",
                        }}>{this._myLoves}</Text>

                    <Text
                        style={{
                            color: "#AEAEAE",
                            fontSize: DesignConvert.getF(12),
                        }}>关注</Text>
                </TouchableOpacity>
                <View
                    style={{
                        width: DesignConvert.getW(1),
                        height: DesignConvert.getH(32),
                        backgroundColor: '#707070',
                    }}
                ></View>
                <TouchableOpacity
                    // onPress={this._onFansPress}
                    style={{
                        marginLeft: DesignConvert.getW(85),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text
                        style={{
                            marginBottom: DesignConvert.getH(3),
                            color: "#1D1D1D",
                            fontSize: DesignConvert.getF(20),
                            fontWeight: "bold",
                        }}>{this._fans}</Text>

                    <Text
                        style={{
                            color: "#AEAEAE",
                            fontSize: DesignConvert.getF(12),
                        }}>粉丝</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <View style={style.container}>
                <Image
                    style={{
                        width: DesignConvert.swidth,
                        height: DesignConvert.getH(185)
                    }}
                    source={require('../../../hardcode/main').mine_top_bg()}
                />
                {this._renderMyInfo()}
                {this._renderTopFan()}
                <ImageTextCell
                    icon={require('../../../hardcode/main').mine_wallte_icon()}
                    title={'账户余额'}
                />
                <ImageTextCell
                    icon={require('../../../hardcode/main').mine_shouyi_icon()}
                    title={'我的收益'}
                />
                <ImageTextCell
                    icon={require('../../../hardcode/main').mine_store_icon()}
                    title={'我的优惠购'}
                />
                <ImageTextCell
                    icon={require('../../../hardcode/main').mine_setting_icon()}
                    title={'设置'}
                />
            </View>
        )
    }

}


const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: '#FCFCFC',
    }
})
