
import toast from "@components/custom/toast";
import AppShareGlobal from "@global";
import React, { Component } from "react";
import {
    View,
    StyleSheet,
    Text,
    ActivityIndicator,
    Image,
    Alert,
    TouchableOpacity, StatusBar, AlertOptions, AlertButton, ViewProps, ColorValue
} from "react-native";
import RootSiblings from 'react-native-root-siblings'
let sibling = undefined;
export default class ViewUtils {

    /**
     * 无数据显示 empty view
     * @param title
     * @param image
     * @returns {*}
     */
    static getNoDataView(title = "暂无数据", image = null) {
        return (
            <View
                style={
                    [{
                        paddingVertical: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 80
                    }]
                }>
                <Image
                    source={image}
                />
                <Text style={{ fontSize: 14, margin: 20, color: "#999" }}> {title} </Text>
            </View>
        )
    }

    static alert(title:string, msg:string, callBack: (value?: string) => void, confirm = "确定", cancel = "取消") {
        let option: AlertButton[] = cancel ?
            [
                { text: cancel, onPress: callBack, style: 'cancel' },
                { text: confirm, onPress: callBack },
            ] :
            [
                { text: confirm, onPress: callBack },
            ]
        Alert.alert(
            title,
            msg,
            option,
            { cancelable: false }
        )
    }

    /**
     * 显示loading 加载框
     * @param message
     */
    static showLoading(message = "加载中...") {
        sibling = new RootSiblings(
            <View style={styles.maskStyle} >
                <View style={styles.backViewStyle} >
                    <ActivityIndicator size="large" color="white" />
                    <Text style={{ fontSize: 15, color: "white", marginTop: 10 }}> {message} </Text>
                </View>
            </View>
        )
    }

    /**
     * 隐藏loading框
     */
    static hideLoading() {
        if (sibling instanceof RootSiblings) {
            sibling.destroy()
            sibling.destroy()
        }
    }

    /**
     * 显示hud message
     * @param message
     * @param duration
     */
    static showHudMessage(message = "", duration = 2000) {
        //2020,6,1全部替换为toast形式
        toast.show({ message: message })
        // let rootView = new RootSiblings(
        //     <View style={[styles.maskStyle,{backgroundColor:"transparent={}"}]}>
        //         <View style={styles.backViewStyle}>
        //             <Text style={{fontSize: 15, color:"white"}}>{message}</Text>
        //         </View>
        //     </View>
        // )
        // setTimeout(function () {
        //     if (rootView){
        //         rootView.destroy()
        //     }
        // },duration)
    }


    static renderCircleDotView(size = 10, color = "#0285FF") {
        return (
            <View style={{ width: size, height: size, borderRadius: size / 2, backgroundColor: color }
            }>
            </View>
        )
    }
    static renderHeightSizeBox(height: number, color = "transparent") {
        return (
            <View style={{ height: height, backgroundColor: color }}> </View>
        )
    }
}

const styles = StyleSheet.create({
    maskStyle: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        // width: global.deviceInfo.width,
        // height: global.deviceInfo.height,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backViewStyle: {
        backgroundColor: '#111',
        width: 120,
        height: 100,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 5
    }
}
)
