import * as React from 'react';
import { CommonActions, NavigationContainerRef, NavigationState, Route, StackActions, StackRouter } from '@react-navigation/native';


const navigationRef = React.createRef<NavigationContainerRef>()

function navigate(name = "", params = {}) {
    navigationRef.current?.navigate(name, params);
}
function push(name = "", params = {}) {
    navigationRef.current?.dispatch(
        StackActions.push(name, params)
    )

}


/**
 * 替换当前路由为 routeName 的路由
 * @param routeName
 * @param params
 */
function replace(routeName = '', params = {}) {
    navigationRef.current?.dispatch(
        StackActions.replace(routeName, params)
    )
}

//  返回当前路由堆栈的上一个页面,不会触发组件的componentDidMount 方法
function goBack(backCount = 1) {
    navigationRef.current?.dispatch(
        StackActions.pop(backCount)
    )

}



/**
 * 重启到登录界面
 */
function restart() {
    // navigationRef.current?.navigate("loginStack")
    navigationRef.current?.resetRoot({ index: 0, routes: [{ name: "loginStack" }] })
}

// 回到路由最顶层
function popToTop() {
    navigationRef.current?.dispatch(StackActions.popToTop())
}


//当前路由变化监听
function onNavigationStateChange(state: NavigationState) {

    console.log(`----onNavigationStateChange`, state)


}


const navigationService = {
    navigationRef,
    navigate,
    push,
    onNavigationStateChange,
    restart,
    popToTop,
    goBack,
    replace,


}
export default navigationService
