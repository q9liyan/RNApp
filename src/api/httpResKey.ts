


/**
 * http 字段参数统一配置 包括返回字段和错误码部分
 */
export default class HttpResponseKeys {
    /**
     *返回字段统一配置
     *
     * @static
     * @memberof HttpResponseKeys
     */
    static  Field = {
        key_data:"resultData",
        key_status:"success",
        key_error_msg:"errorMsg",
        key_error_code:"errorCode",

    }

    /**
     *错误码 枚举
     *
     * @static
     * @memberof HttpResponseKeys
     */
    static Code = {

    }



}


/**
 * http 返回基类集成
 */
export  class BaseResModel {

    id:string;
    createdTime:string;
    creator:string;
    creatorName:string;
    modifiedTime:string;
    modifiedUser:string;
    modifiedUserName:string

}






export class HttpResModel {
    status: boolean
    data: any
    code: string | number
    error_msg: string

}

/**
 * 泛型返回responsemodel
 */
export class HttpResModelGeneric<T> extends HttpResModel {
    data: T
}


/**
 * 分页数据class
 */
export class PageWrapModel<T> {
    totalCount: number
    currentPage: number
    pageSize: number
    datas: Array<T>


}


/**
 * 文件上传返回信息
 */
export class FileUploadResponse {

    /**
     *文件类型
     */
    contentType: string
    /**
     *文件下载URL
     */
    downloadUrl: string
    /**
     *文件实际名称
     */
    fileName: string
    /**
     *元数据信息
     */
    metaInfo: object
    /**
     *远程文件名称（包含了路径）
     * 【需要上传给服务端的字段】
     */
    remoteFileName: string
}
