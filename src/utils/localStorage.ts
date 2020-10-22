import AsyncStorage from '@react-native-community/async-storage';


/**
 * 封装本地简单数据存储类
 */
export default class LocalStorage {

    /**
     * 保存key - value -value 如果是对象必须转化为jsonstring
     * @param key
     * @param value
     * @returns {Promise<unknown>}
     */
    static setKeyValue = async (key = '', value = '') => {

        if (key == null) return Promise.reject("key 为空");

        let promise = new Promise((resolve, reject) => {
            AsyncStorage.setItem(key, value, function (error) {
                if (error == null) {
                    resolve(true);
                }
                reject(error)
            })
        })
        return promise;


    }


    /**
     * 获取key 对应的value
     * @param key
     * @returns {Promise<unknown>}
     */
    static getValue = async (key = '') => {
        if (key == null) return Promise.reject("key 为空");

        let promise = new Promise((resolve, reject) => {

            AsyncStorage.getItem(key, function (error, result) {
                if (error !== null) {
                     resolve(JSON.parse(result))

                }
                if (result == undefined && result == null) {
                    reject(error);
                }
                resolve(result);
            })


        })
        return promise;


    }
    /**
     * 删除key 的存储
     * @param key
     * @returns {Promise<R>}
     */
    static removeKey = async (key = '') => {
        let promise = new Promise((resolve, reject) => {

            if (key == null) reject("key 为空");
            AsyncStorage.removeItem(key, function (error) {
                if (error != null) {
                    reject(error);
                }
                resolve(true);
            })

        })
        return promise;


    }

    /**
     * 清空所有数据
     */
    static removeAllData(){
        AsyncStorage.clear();
    }


}
