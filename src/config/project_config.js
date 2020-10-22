
import {Platform} from "react-native"

/**
 * codepush 运行中。
 * @type {boolean}
 */
let isCodePushEffective = true


/* 是否是生产环境 */
let isPro = false;   // isPro
if (!__DEV__){
    isPro = true
    isCodePushEffective = true
}



const enviroment_domain = {
    dev:"http://app.psd.wegongxiang.com",
    // dev:"http://app.psd.hrpackage.com",

    pro:"http://app.psd.wegongxiang.com",
    // pro:"http://app.psd.hrpackage.com"
}
const default_gateway = "/api/gw/"
const file_upload_gateway = '/api/file/'

const codepush_key = {
    stage:{
        ios:"b0b0d5k5cZBkfadywfSnZDReCab86HfCuWndE",
        android:"qqFDjfQjKpGuP5Q6EylqrVcR0yaPyHpAsABbl"
    },
    release:{
        ios:"_rYOrXT3VxA-8YBaKnASwX8aOXvFQS_TokMrw",
        android:"lAPNoKlKtKiN9ltRLWHOlvSmy7ZMaC64NSKf0"
    }

}




const fetchHost = isPro ? enviroment_domain.pro + default_gateway : enviroment_domain.dev + default_gateway;


const fileUploadHost = isPro ? enviroment_domain.pro + file_upload_gateway : enviroment_domain.dev + file_upload_gateway

const AppDomain = isPro ? enviroment_domain.pro : enviroment_domain.dev

const key_ios = isPro ? codepush_key.release.ios : codepush_key.stage.ios;
const key_android = isPro ? codepush_key.release.android : codepush_key.stage.android;

const CodePushDeploymentKey = Platform.OS === "ios" ? key_ios : key_android



export {fileUploadHost, fetchHost,AppDomain,CodePushDeploymentKey,isCodePushEffective}
