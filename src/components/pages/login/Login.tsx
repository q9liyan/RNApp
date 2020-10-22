import BasePageComponent from '@components/base/BasePageComponent';
import navigationService from '@router/navigaitonService';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, TouchableOpacity
} from 'react-native';


export default class LoginPage extends BasePageComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return (
            <View style={style.container}>
                <Text>LoginPage</Text>
                <TouchableOpacity style={{backgroundColor:"blue"}}
                onPress={()=>{
                    this.navigation.replace("tab")
                    // this.navigation.reset({routes:[{name:"tab"},{name:"homeDetail"}],index:1})

                }}>
                    <Text>login</Text>
                </TouchableOpacity>
            </View>
        )
    }

}


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
