import React, { Component } from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';
import DesignConvert from '../../utils/DesignConvert';

export default class TextButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    ...this.props.style
                }}
                onPress={this.props.onPress}
            >
                <Text
                        style={{
                            color: '#FFFFFF',
                            fontSize: DesignConvert.getF(13),
                            fontWeight: "normal",
                            ...this.props.textStyle
                        }}
                    >{this.props.text}</Text>
            </TouchableOpacity>
        )
    }

}