import {fetchHost} from "@config/project_config";

const requestCancelDict = {}


const JSON_REQ_RES_SERILIZATION = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

/**
 * http 请求管理、cancel http request
 */
export default class RequestManager {

    /**
     * 取消指定的某个request
     * @param action
     */
    static cancelRequest(action = "") {
        let url = fetchHost + action;
        let cancelToken = requestCancelDict[url]
        if (cancelToken) {
            cancelToken.cancel(url, `取消了当前请求`)
            requestCancelDict[url] = undefined

        }

    }

    /**
     * 取消所有请求
     */
    static cancelAllRequest() {
        Object.keys(requestCancelDict).forEach(key => {
            let cancelToken = requestCancelDict[key]
            if (cancelToken) {
                cancelToken.cancel(key, `取消了当前请求`)
                requestCancelDict[key] = undefined

            }
        })
    }


    /**
     * 保存当前cancelToken
     * @param url
     * @param cancelToken
     */
    static addCancelRequestToDict(url = "", cancelToken = {}) {
        requestCancelDict[url] = cancelToken;
    }

    /**
     * 删除指定的cancelToken
     * @param url
     */
    static deleteCancelRequestToDict(url = "") {
        requestCancelDict[url] = undefined
    }

    /**
     * 获取指定的cancelToken
     * @param url
     * @returns {*}
     */
    static getCancelRequestWithUrl(url = "") {
        return requestCancelDict[url]
    }


}


export {requestCancelDict,JSON_REQ_RES_SERILIZATION};
