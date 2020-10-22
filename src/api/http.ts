import toast from "@components/custom/toast";
import { fetchHost } from "@config/project_config";
import navigationService from "@router/navigaitonService";
import ConstantsKey from "@utils/constantsDefine";
import LocalStorage from "@utils/localStorage";
import axios from "axios";
import HeaderManager from "./headerManager/headerManager";
import HttpResponseKeys,{HttpResModel} from "./httpResKey";
import RequestManager, { JSON_REQ_RES_SERILIZATION } from "./requestManager";




const instance = axios.create({
    baseURL: fetchHost,
    timeout: 10000,
    headers: JSON_REQ_RES_SERILIZATION
});

//请求拦截处理
instance.interceptors.request.use(function (config) {
    let token = HeaderManager.getHeaderToken()


    if (config.headers.hasOwnProperty(ConstantsKey.key_user_appCode)) {
        config.headers[ConstantsKey.key_user_appCode] = undefined
    }

    if (config.headers.hasOwnProperty(ConstantsKey.key_token_login)) {
        config.headers[ConstantsKey.key_token_login] = undefined
    }

    let holder = {...JSON_REQ_RES_SERILIZATION}


    if (token) {
        holder[ConstantsKey.key_token_login] = token
    }

    let appCode = HeaderManager.getAppCode()
    if (appCode) {
        holder[ConstantsKey.key_user_appCode] = appCode
    }

    config.headers = holder

    config.cancelToken = new axios.CancelToken(cancel => {

        let url = fetchHost + config.url;
        //把当前request存到内存中
        RequestManager.addCancelRequestToDict(url, cancel)

    })

    return config;

}, function (error) {
    // 对请求错误
    return Promise.reject(error);
});


//返回拦截处理
instance.interceptors.response.use(function (response) {

    //从requesttoken中清除掉
    let url = response.config.url;
    let cancelToken = RequestManager.getCancelRequestWithUrl(url)
    if (cancelToken) {
        RequestManager.deleteCancelRequestToDict(url)
    }


    let _data = response.data;
    console.log(_data, `接口返回数据来自:${response.request.responseURL}`);
    let success = _data[HttpResponseKeys.Field.key_status];
    let errorMsg = _data[HttpResponseKeys.Field.key_error_msg];

    handleResponseHeaders(response.headers);

    if (!success) {
        console.log("数据错误哦、拦截器已经拦截、response ---- ")
        handleResponsErrorMsg(_data);

        console.log(response);
    }
    //改成 都返回。不管、在业务代码判断status字段
    return constructFormatResponseData(_data) as any


}, function (error) {
    console.log(error)

    // 对响应错误
    return Promise.reject(error);
});

// -----------------工具方法--------------

/**
 * 构造统一参数返回业务层
 * @param _data
 * @returns {object}
 */
function constructFormatResponseData(_data = null) {
    if (!_data) {
        return null;
    }
    let success = _data[HttpResponseKeys.Field.key_status];
    let data = _data[HttpResponseKeys.Field.key_data];
    let code = _data[HttpResponseKeys.Field.key_error_code];
    let errorMsg = _data[HttpResponseKeys.Field.key_error_msg];


    let returnData = new HttpResModel()
    returnData.status = success
    returnData.data = data
    returnData.code = code
    returnData.error_msg = errorMsg

    // returnData["status"] = success;
    // returnData["data"] = data;
    // returnData["code"] = code;
    // returnData["error_msg"] = errorMsg;
    return returnData;


}

/**
 * 处理响应头保存token
 * @param response_headers
 */
function handleResponseHeaders(response_headers) {
    let header_token = response_headers[ConstantsKey.key_token_login];
    let header_appCode = response_headers[ConstantsKey.key_user_appCode.toLowerCase()]
    if (header_token) {
        HeaderManager.updateTokenHeader(header_token)
    }
    if (header_appCode) {
        HeaderManager.updateAppCodeHeader(header_appCode)
    }

}

function handleResponsErrorMsg(_data) {
    let code = _data[HttpResponseKeys.Field.key_error_code];
    let errorMsg = _data[HttpResponseKeys.Field.key_error_msg];

    switch (code) {
        //登录过期
        case "ERR_002_00000003": {
            toast.show({message: "登录过期，请重新登录"})
            RequestManager.cancelAllRequest();
            HeaderManager.clearHeader();
            LocalStorage.removeAllData()
            setTimeout(function () {

                navigationService.restart()
                // navigationService.navigate("Sign")
            }, 2000)
            break;
        }
        case "ERR_003_00000002": {
            console.log("重复提交，请稍后再试")
            break
        }
        //身份证识失败、错误码不提示
        case "ERR_002_00000009": {
            console.log(_data, `-----身份证识别失败`)


            break;
        }
        default: {
            toast.show({message: errorMsg})

            break;
        }

    }


}

export default instance;
