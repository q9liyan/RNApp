import React from 'react'

import BasePageComponent from "@components/base/BasePageComponent";
import { View } from "react-native";


export default class Entrance extends BasePageComponent{

    constructor(props) {
      super(props)
    };
    
    
    componentDidMount(){
        this.navigation.replace("sign")
    }
    
    render(){
        return (<View/>)
    }
}