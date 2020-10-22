
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { Stores } from '@store';
import React, { Component } from 'react';
import { BackHandler, NativeEventSubscription, Platform, View } from 'react-native';







export type BaseComponentProps = StackScreenProps<any, any> & { store: Stores }

export type BaseComponetState = {}

type BaseParamsType = Object



export default class BasePageComponent
    <
    P extends BaseComponentProps = BaseComponentProps,
    S extends BaseComponetState = BaseComponetState,
    PARAMS extends BaseParamsType = Object
    >
    extends Component<P, S>{

    /**
     *导航器
     *
     * @type {StackNavigationProp<any, any>}
     * @memberof BasePageComponent
     */
    navigation: StackNavigationProp<any, any>
    page_index: number = 1;
    page_size: number = 20;
    /**
     *是否下拉
     *
     * @type {boolean}
     * @memberof BasePageComponent
     */
    isDownRefresh: boolean = false


    /**
     *Android物理键返回时间监听
     *
     * @type {NativeEventSubscription}
     * @memberof BasePageComponent
     */
    listenerAndroidBack: NativeEventSubscription


    /**
     *导航路由参数
     *
     * @type {PARAMS}
     * @memberof BasePageComponent
     */
    paramsOfRoute: PARAMS = null

    constructor(props: P) {
        super(props)
        this.navigation = props.navigation;

        if (props.route.params) {
            this.paramsOfRoute = props.route.params
        }
        else {
            this.paramsOfRoute = Object()
        }


        this.loadData();
        this.addViewLifeCircleEventListener()
        this.addAndroidHardBackPressListener()



    };


   private configCurrent() {
        this.navigation.setOptions({ gestureEnabled: this.autoSystemGoBack() })
    }
    componentDidMount(){
        this.configCurrent()
    }

    componentWillUnmount() {
        this.removeLifeCircleEventListener()
        this.removeAndroidHardBackPressListener()
    }


    addAndroidHardBackPressListener() {

        if (this.navigation && this.navigation.isFocused()) {
            if (Platform.OS == "android") {
                this.listenerAndroidBack = BackHandler.addEventListener("hardwareBackPress", () => {
                    this.goBack();
                    return true;
                });
            }
        }
    }

    removeAndroidHardBackPressListener() {
        if (this.navigation && this.navigation.isFocused()) {
            if (Platform.OS == "android") {
                this.listenerAndroidBack && this.listenerAndroidBack.remove()
            }
        }
    }

    /**
     * 默认加载数据
     */
    loadData() {
        console.log('BasePageComponent ---- loadData');
    }

    /**
     * 加载更多数据
     */
    loadMoreData() {
        console.log('BasePageComponent --- loadMoreData');
        this.page_index++
        this.isDownRefresh = false

    }

    /**
     * 加载最新数据
     */
    loadLastedData() {
        console.log('BasePageComponent ----- loadLastedData');
        this.page_index = 1
        this.isDownRefresh = true

    }


    /**
    * 添加component的生命周期listener（跟navigation无关联）
    */
    addViewLifeCircleEventListener() {
        this.navigation.addListener("focus", (payload) => {
            console.log('focus', payload);
            this.componentAppear()

        })
        this.navigation.addListener("blur", (payload) => {
            console.log('blur', payload);
            this.componentDisappear()

        })

        //此处非常不能直接返回 调用goback 不然会导致 此处回调继续被调用、导致循环调用
        this.navigation.addListener("beforeRemove", (payload) => {
            if (!this.autoSystemGoBack()) {
                payload.preventDefault()
            }

        })
    }
    /**
     * 移除component的生命周期listener（跟navigation无关联）
     */
    removeLifeCircleEventListener() {
        this.navigation.removeListener("focus", (payload) => { })
        this.navigation.removeListener("blur", (payload) => { })

    }

    /**
     * 类似于viewWillAppear
     */
    componentAppear() {

    }
    /**
     * 类似于viewDidDisappear
     */
    componentDisappear() {

    }


    /**
     * 返回键默认实现 【导航栏返回键、安卓物理返回键】 
     * 返回true 表示执行 
     */
    goBack() {

        let isCurrentPageFocus = this.navigation.isFocused()

        if (isCurrentPageFocus) {
            if (this.navigation.canGoBack()) {
                this.navigation.pop()
                return true
            }
        }

        return false

    }

    /**
     * 是否 启用系统返回功能 【点击返回和侧滑返回】
     */
    autoSystemGoBack(): boolean {
        return true
    }

}
