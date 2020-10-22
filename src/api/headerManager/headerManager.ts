/***
 * HTTP HEADER 管理器
 *  必须在token从本地获取的时候保存token
 */
import LocalStorage from "../../utils/localStorage";
import ConstantsKey from "../../utils/constantsDefine";

let _instance = null;
let _appCode = null;
export default class HeaderManager {

    /**
     * 刷新token
     * @param headerToken
     */
    static updateTokenHeader(headerToken = null) {
        _instance = headerToken;
        LocalStorage.setKeyValue(ConstantsKey.key_token_login, headerToken)

    }

    /**
     * 保存 appCode 到App生命周期
     * @param appCode
     */
    static  updateAppCodeHeader(appCode = null){
        _appCode = appCode
        LocalStorage.setKeyValue(ConstantsKey.key_user_appCode,appCode)
    }

    /**
     * 清空token
     */
    static  clearHeader(){
        _instance = null
        _appCode = null
        LocalStorage.removeKey(ConstantsKey.key_token_login)
        LocalStorage.removeKey(ConstantsKey.key_user_appCode)
    }

    /**
     *  从App内存获取token -- 同步的sync
     * @returns {*}
     */
    static getHeaderToken() {
        return _instance;
    }

    /**
     * 获取appCode
     * @returns {String}
     */
    static getAppCode(){
        return _appCode
    }

    /**
     * 异步获取token  从storage 里面读取
     * @returns {Promise<Promise<never>|undefined>}
     */
    static getHeaderTokenAsync = () => {
        return LocalStorage.getValue(ConstantsKey.key_token_login)
    }


}
