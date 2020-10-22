import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from "../components/pages/home/HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MePage from "@components/pages/me/MePage";
import LoginPage from '@components/pages/login/Login';
import RegisterPage from '@components/pages/login/Register';
import Entrance from '@components/pages/Entrance';
import Icon from 'react-native-vector-icons/Ionicons'
import DesignConvert from '@utils/DesignConvert';
const RootStack = createStackNavigator();

const MainStack = createStackNavigator()

const LoginStack = createStackNavigator()

const MeStack = createStackNavigator()


const Tab = createBottomTabNavigator();

const RouteListLogin = {
    login: LoginPage,

}
const RouteListHome = {
    home: HomePage,

}

const RouteListMe = {

    me: MePage,
}

const routerLogin = () => {
    return <LoginStack.Navigator initialRouteName="login" screenOptions={{ gestureEnabled: false, headerShown: false }}>

        {Object.keys(RouteListLogin).map((item) => {
            return <LoginStack.Screen key={item} name={item} component={RouteListLogin[item]} />
        })
        }
    </LoginStack.Navigator>

}


const routerHome = () => {
    return <MainStack.Navigator initialRouteName="login" screenOptions={{ gestureEnabled: false }}>

        {Object.keys(RouteListHome).map((item) => {
            return <MainStack.Screen key={item} name={item} component={RouteListHome[item]} options={StackNavigationOption} />
        })
        }
    </MainStack.Navigator>

}

const routerMe = () => {
    return <MeStack.Navigator initialRouteName="login" screenOptions={{ gestureEnabled: false }}>

        {Object.keys(RouteListMe).map((item) => {
            return <MeStack.Screen key={item} name={item} component={RouteListMe[item]} options={StackNavigationOption}/>
        })
        }
    </MeStack.Navigator>

}

/**
 * 获取tabbar 可见度
 * @param {} route 
 */
const getTabBarVisibility = (route) => {

    if (route.state && route.state.index > 0) {
        return false
    }
    return true;
}
const tabBarVisibleOptionConfig = ({ route }) => {
    return {
        tabBarVisible: getTabBarVisibility(route),

    }
}

const tabBarScreenOption = ({ route }) => {
    return {
        tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === '首页') {
                //   iconName = focused
                //     ? 'ios-information-circle'
                //     : 'ios-information-circle-outline';
                iconName = 'home-outline'
            } else if (route.name === '我的') {
                iconName = 'person-outline'
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={ focused ? '#00D8C9' : '#BFBFBF'} />;
        },
        
        tabBarLabel: ({ focused, color, size }) => {
            return (
                <Text
                    style={{
                        fontSize: DesignConvert.getF(12),
                        color: focused ? '#00D8C9' : '#BFBFBF',
                        margin: 1
                    }}
                >
                  {route.name}  
                </Text>
            )
        },
    }
}
const TabScreen = () => {
    return (
        <Tab.Navigator screenOptions={tabBarScreenOption} navigationOptions ={{
            
        }}>
            <Tab.Screen name="首页"
                component={routerHome}
                options={tabBarVisibleOptionConfig} />
            <Tab.Screen name="我的" component={routerMe} options={tabBarVisibleOptionConfig} />
        </Tab.Navigator>
    )
}


const StackNavigationOption = ({ route }) => {
    return (
        {
            header: null, 
            headerShown: false,
        }
    )
}

/**
 * 采用这种路由架构是因为 App通常登录之后跳转的动画一般都是modal 形式的、不是默认的card 
 * 参考 iOS原生的present 和pushviewcontroller两种方式 , 通常用户登录之后一般是presen形式
 */
const routerRoot = () => {

    return (
        <RootStack.Navigator initialRouteName="entrance" screenOptions={{ gestureEnabled: false }} mode="modal">

            {/* <RootStack.Screen name="entrance" component={Entrance} /> */}

            <RootStack.Screen name="tab" component={TabScreen}  options={StackNavigationOption}/>

            {/* <RootStack.Screen name="sign" component={routerLogin} /> */}


        </RootStack.Navigator>
    )

}
export default routerRoot;
