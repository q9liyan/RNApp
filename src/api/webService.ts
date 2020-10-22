import http from './http';
import {HttpResModel} from "@api/model/HttpResModel";
import {JSON_REQ_RES_SERILIZATION} from "@api/requestManager";
import {fileUploadHost} from "@config/project_config";

export default class WebService {


    /**
     * post 请求
     * @param action
     * @param param
     * @returns {Promise<boolean|Promise<AxiosResponse<T> | never>>}
     */
    static postRequest(action:string = "", param:Array<any> = []):Promise<HttpResModel>  {


        if (!action) {
            return Promise.reject('路径错误');
        }

        // 加密参数
        param = requestEncrypt(param);

        var paramters = param

        console.log(param,`-----------${action}`)

        return http.post(action, paramters)
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.log("http request error");
                console.log(error);
                return error
                // return error;
            });
    }


    /**
     * get 请求
     * @param action
     * @param param
     * @returns {Promise<boolean|Promise<AxiosResponse<T> | never>>}
     */
    static getRequest(action:string = "", param:Array<any> = []):Promise<HttpResModel>  {

        if (!action) {
            return Promise.reject('路径错误');
        }
        // 加密参数
        param = requestEncrypt(param);

        var paramters = param
        return http.get(action, paramters)
            .then((response) => {

                return response
            })
            .catch((error) => {
                console.log("http request error");
                console.log(error);
                return error
                // return error;
            });
    }

    static upload =  async (action = "", param = []) => {

        var paramters = param

        let headers = {...JSON_REQ_RES_SERILIZATION}
        headers["Content-Type"] = 'multipart/form-data'

        return http.post(action, paramters,{headers:headers,baseURL:fileUploadHost})
            .then((response) => {
                return response
            })
            .catch((error) => {
                console.log("http upload  error");
                console.log(error);
                return error
                // return error;
            });
    }




}

/**
 * 统一加密处理参数
 * @param {参数对象}} data
 */
function requestEncrypt(data) {
    // if (data == null || data == undefined){
    //     data = []
    // }
    let json_data = JSON.stringify(data)
    return data;
    // return json_data;
}
