import UserInfoStore from "./user";

export class Stores extends Object {
    userinfo:UserInfoStore
    other:any
    constructor(){
        super()
        this.userinfo = null
        this.other = null
    }
}

const storeInstance = new Stores();

export default storeInstance

