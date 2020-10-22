
import React from "react";
import { StyleSheet} from 'react-native';

export const $styles = {
    //基础颜色
    colorWhite: "#FFF",
    colorBlack: "#000",
    colorLine: "#CACACA",
    colorGrayBackground: "#F4F4F6",
    colorPrimary: "#0445E7",//主题颜色
    colorSuccess: "#0445E7",

    gradientColors:["#0081FF","#0445E7"],//按钮渐变色

    colorModalBlack: "#585C64",
    colorDCDCDC: "#DCDCDC",
    color333: "#333",//标题颜色
    color666: "#666",//描述文本
    color999: "#999",//占位符||描述文本
    colorCCC: "#CCC",//占位符

    color0E1B42: "#0E1B42",

    colorInputPlaceHolder: "#9A9A9A",//input 占位颜色

    fontSize16: DP(16),


    buttonDisableStyle: { opacity: 0.5 },





    //字体基础尺寸
    dimensionText36: { fontSize: SP(36) },
    dimensionText20: { fontSize: SP(20) },
    dimensionText18: { fontSize: SP(18) },
    dimensionText16: { fontSize: SP(16) },
    dimensionText14: { fontSize: SP(14) },
    dimensionText12: { fontSize: SP(12) },
    dimensionText10: { fontSize: SP(10) },

    //字体基础颜色
    colorTextPrimary: "#0445E7",//带有主题颜色的字体颜色
    colorTextNormal: "#A8AEAD",//颜色 #A8AEAD



    //背景基础颜色
    colorBackgroundWhite: { backgroundColor: "#FFFFFF" },


    hidden: { display: "none" },

    //App默认border shadow
    borderShadowStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor: "#fff",
        borderRadius: 6,
        elevation: 4,
    }



};

/**
 * 设置text
 * @param size  px
 * @returns {Number} dp
 */
export function SP(size = 0) {
    //PixelRatio.roundToNearestPixel();
    //size = Math.round(size *defaultPixel*scale /pixelRatio + 0.5);
    return size;
}
/**
 * 设置尺寸
 * @param size  px
 * @returns {Number} dp
 */
export function DP(size = 0) {
    // size = Math.round((size*defaultPixel*scale / pixelRatio + 0.5));
    return size;
}
